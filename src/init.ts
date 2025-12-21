interface Chats {
  name: string
  id: string
}

const storedChats = localStorage.getItem('chats')

export const chats: Chats[] = storedChats
  ? (JSON.parse(storedChats) as Chats[])
  : [{ 
    name: 'blue',
    id: crypto.randomUUID()
  }]
console.log(chats)

const chatsContainer = document.querySelector<HTMLDivElement>('.chats-container')

let html = ''
chats.forEach(chat => {
  html += `
    <a class="chat can-focus" href="./new.html?chat_id=${chat.id}">
      ${chat.name}
    </a>
  `
})

if (chatsContainer) {
  chatsContainer.innerHTML = html
}