const storedChats = localStorage.getItem('chats');
export const chats = storedChats
    ? JSON.parse(storedChats)
    : [{
            name: 'blue',
            id: crypto.randomUUID()
        }];
console.log(chats);
const chatsContainer = document.querySelector('.chats-container');
let html = '';
chats.forEach(chat => {
    html += `
    <a class="chat can-focus" href="./new.html?chat_id=${chat.id}">
      ${chat.name}
    </a>
  `;
});
if (chatsContainer) {
    chatsContainer.innerHTML = html;
}
//# sourceMappingURL=init.js.map