/**
 * Nomes: Rafael da Silva Castro & Vito Loch Mafei
 *
 */
function sendMsg() {
  const msg = document.getElementById('msg')
  if (msg.value != '') {
    createMessages(msg.value)
    msg.value = ""
  }
}

function newMessageUser(message) {
  const MessageUser = document.createElement('div')
  MessageUser.classList.add('mymsg')
  const ContentMessageUser = document.createElement('div')
  ContentMessageUser.classList.add('sent-msg')
  ContentMessageUser.classList.add('msgMySent')
  ContentMessageUser.innerHTML = `<p><strong>Você</strong><br>${message}<br></p>`
  MessageUser.appendChild(ContentMessageUser)
  return MessageUser
}

function newMessageBaseSystem(message) {
  let MessageBySystem = document.createElement('div')
  MessageBySystem.classList.add('msgSystem')
  let ContentMessageBySystem = document.createElement('div')
  ContentMessageBySystem.classList.add('sent-msg')
  ContentMessageBySystem.classList.add('msgSystemSent')

  ContentMessageBySystem.innerHTML = `<p><strong>Atendimento</strong><br>${message}</p>`
  MessageBySystem.appendChild(ContentMessageBySystem)
  return MessageBySystem
}

function createMessages(messageOfUser){
  let bodyChat = document.getElementById('chat')

  const messageUser = newMessageUser(messageOfUser)
  bodyChat.appendChild(messageUser)

  const messageBySystem = newMessageBaseSystem('No momento nosso sistema não está disponível')
  bodyChat.appendChild(messageBySystem)

  bodyChat.lastChild.scrollIntoView({ behavior: 'smooth' })
}
