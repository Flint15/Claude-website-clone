import { chats, currentChatId } from "./init.js"

interface Message {
  'role': string
  'content': string
}

let conversationHistory: Message[] = []
let initialized = false

function initializeConversationHistory() {
  if (initialized) return

  if (currentChatId) {
    const currentChat = chats.find(chat => chat.chatId === currentChatId)
    conversationHistory = [...currentChat!.messages]
  }
  initialized = true
}

export async function createLLMResponse(message: string): Promise<string> {  
  try {
    initializeConversationHistory()

    conversationHistory.push({
      'role': 'user', 'content': message
    })
    
    const response = await fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: conversationHistory})
    })
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }
  
    const data = await response.json()
    const llmResponse = data.response

    conversationHistory.push({
      'role': 'assistant', 'content': llmResponse
    })
    
    return llmResponse
  
  } catch (error) {
    console.error(`Error fetching data:\n ${error}`)
    return 'Bruh... i couldn\'t get a response...;('
  }
}