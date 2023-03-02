/**
 * Nomes: Rafael da Silva Castro & Vito Loch Mafei
 * 
 */


const arrayMsg = []
const arrayMsgSystem = []
const elements = []

function sendMsg() {
  const msg = document.getElementById('msg')
  if (msg.value != '') {
    let bodyChat = document.getElementById('chat')

    elements.push(message(msg.value, 'USER'))
    elements.push(message('Olá!', 'SYSTEM'))
    elements.push(
      message('No momento nosso sistema não está disponível', 'SYSTEM')
    )

    bodyChat.innerHTML = elements.join('')
    msg.value = ''

    bodyChat.lastChild.scrollIntoView({ behavior: 'smooth' })
  }
}

function messageBaseUser(message) {
  return `<div class="mymsg">
    <div class="sent-msg msgMySent"><p><strong>Você</strong><br>${message}</p></div>
  </div><br>`
}

function messageBaseSystem(message) {
  return `<div class="msgSystem">
    <div class="sent-msg msgSystemSent"><p><strong>Atendimento</strong><br>${message}</p></div>
  </div><br>`
}

function message(message, type) {
  return type == 'USER' ? messageBaseUser(message) : messageBaseSystem(message)
}
