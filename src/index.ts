const sidebarButton = document.getElementById('ts-sidebar-button')
const sidebarElement = document.querySelector('aside')

if (sidebarButton) {
  sidebarButton?.addEventListener('click', () => {
    sidebarElement?.classList.toggle('closed')
  })
}