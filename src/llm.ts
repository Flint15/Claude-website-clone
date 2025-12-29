export async function createLLMResponse(message: string): Promise<string> {  
  try {
    const response = await fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message})
    })
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }
  
    const data = await response.json()
    return data.response
  
  } catch (error) {
    console.error(`Error fetching data:\n ${error}`)
    return 'Bruh... i couldn\'t get a response...;('
  }
}