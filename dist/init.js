import { renderChats, renderMessages, storeChats } from "./chats.js";
import { liftMessagesFlag } from "./flags.js";
const url = new URLSearchParams(window.location.search);
export let currentChatId;
currentChatId = url.get('chat-id') || '';
console.log(currentChatId);
const storedChats = localStorage.getItem('chats');
export let chats = storedChats
    ? JSON.parse(storedChats)
    : [];
console.log(chats);
renderChats();
export function deleteChatFromChats(chatId) {
    chats = chats.filter(chat => chat.chatId !== chatId);
    console.log(`Chat with id-"${chatId}" was deleted`);
    renderChats();
    storeChats();
    if (currentChatId === chatId) {
        window.location.replace('./new.html');
    }
}
export function changeCurrentChatId(chatId) {
    currentChatId = chatId;
}
if (url.get('chat-id')) {
    renderMessages(currentChatId);
    liftMessagesFlag();
}
//# sourceMappingURL=init.js.map