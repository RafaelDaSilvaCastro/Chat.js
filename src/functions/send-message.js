/**
 * Nomes: Rafael da Silva Castro & Vito Loch Mafei
 *
 */

function sendMsg() {
  const msg = document.getElementById('msg')
  if (msg.value != '') {
    let bodyChat = document.getElementById('chat')

    const MessageUser = document.createElement('div')
    MessageUser.classList.add('mymsg')
    const ContentMessageUser = document.createElement('div')
    ContentMessageUser.classList.add('sent-msg')
    ContentMessageUser.classList.add('msgMySent')

    ContentMessageUser.innerHTML = newMessageBaaseUser(msg.value)
    MessageUser.appendChild(ContentMessageUser)
    bodyChat.appendChild(MessageUser)

    let MessageBySystem = document.createElement('div')
    MessageBySystem.classList.add('msgSystem')
    let ContentMessageBySystem = document.createElement('div')
    ContentMessageBySystem.classList.add('sent-msg')
    ContentMessageBySystem.classList.add('msgSystemSent')

    ContentMessageBySystem.innerHTML = newMessageBaseSystem('Olá!')
    MessageBySystem.appendChild(ContentMessageBySystem)
    bodyChat.appendChild(MessageBySystem)

    MessageBySystem = document.createElement('div')
    MessageBySystem.classList.add('msgSystem')

    ContentMessageBySystem = document.createElement('div')
    ContentMessageBySystem.classList.add('sent-msg')
    ContentMessageBySystem.classList.add('msgSystemSent')
    ContentMessageBySystem.innerHTML = newMessageBaseSystem(
      'No momento nosso sistema não está disponível'
    )

    MessageBySystem.appendChild(ContentMessageBySystem)
    bodyChat.appendChild(MessageBySystem)

    msg.value = ''

    bodyChat.lastChild.scrollIntoView({ behavior: 'smooth' })
  }
}

function newMessageBaaseUser(message) {
  return `<p><strong>Você</strong><br>${message}<br></p>`
}

function newMessageBaseSystem(message) {
  return `<p><strong>Atendimento</strong><br>${message}</p>`
}

function message(message, type) {
  return type == 'USER'
    ? newMessageBaaseUser(message)
    : newMessageBaseSystem(message)
}
