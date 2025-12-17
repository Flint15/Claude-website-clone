const sidebarButton = document.getElementById('ts-sidebar-button')
const sidebarElement = document.querySelector('aside')

if (sidebarButton) {
  sidebarButton?.addEventListener('click', () => {
    sidebarElement?.classList.toggle('closed')
  })
}

const inputElement = document.querySelector<HTMLInputElement>('#input-element')
const sendButton = document.querySelector('.send-button')
const sendSVG = document.querySelector<SVGPathElement>('.arrow-icon path')

inputElement?.addEventListener('input', () => {
  if (inputElement.value && !sendButton?.classList.contains('active')) {
    sendButton?.classList.add('active')
    if (sendSVG) sendSVG.style.fill = '#ffffffff'
  } else if (!inputElement.value) {
    sendButton?.classList.remove('active')
    if (sendSVG) sendSVG.style.fill = '#9C9A92'
  }
})