const sidebarButton = document.getElementById('ts-sidebar-button');
const sidebarElement = document.querySelector('aside');
if (sidebarButton) {
    sidebarButton === null || sidebarButton === void 0 ? void 0 : sidebarButton.addEventListener('click', () => {
        sidebarElement === null || sidebarElement === void 0 ? void 0 : sidebarElement.classList.toggle('closed');
    });
}
const inputElement = document.querySelector('#input-element');
const sendButton = document.querySelector('.send-button');
const sendSVG = document.querySelector('.arrow-icon path');
inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener('input', () => {
    if (inputElement.value && !(sendButton === null || sendButton === void 0 ? void 0 : sendButton.classList.contains('active'))) {
        sendButton === null || sendButton === void 0 ? void 0 : sendButton.classList.add('active');
        if (sendSVG)
            sendSVG.style.fill = '#ffffffff';
    }
    else if (!inputElement.value) {
        sendButton === null || sendButton === void 0 ? void 0 : sendButton.classList.remove('active');
        if (sendSVG)
            sendSVG.style.fill = '#9C9A92';
    }
});
export {};
//# sourceMappingURL=index.js.map