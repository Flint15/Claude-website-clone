interface Chats {
  name: string
}

const storedChats = localStorage.getItem('chats')

export const chats: Chats[] = storedChats
  ? (JSON.parse(storedChats) as Chats[])
  : [{ name: 'blue' }]

const chatsContainer = document.querySelector<HTMLDivElement>('.chats-container')

let html = ''
chats.forEach(chat => {
  html += `<div class="chat can-focus">${chat.name}</div>`
})

if (chatsContainer) {
  chatsContainer.innerHTML = html
}