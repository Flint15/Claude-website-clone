const sidebarButton = document.getElementById('ts-sidebar-button');
const sidebarElement = document.querySelector('aside');
console.log(sidebarElement);
if (sidebarButton) {
    sidebarButton === null || sidebarButton === void 0 ? void 0 : sidebarButton.addEventListener('click', () => {
        sidebarElement === null || sidebarElement === void 0 ? void 0 : sidebarElement.classList.toggle('active');
    });
}
export {};
//# sourceMappingURL=index.js.map