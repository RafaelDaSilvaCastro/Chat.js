const arrayMsg = []
const arrayMsgSystem = []
<<<<<<< HEAD
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
=======
const elements = [message("Bem vindo á nossa central de atendimento","SYSTEM")]

function sendMsg() {
  const msg = document.getElementById('msg')
  if(msg.value != ''){
    let bodyChat = document.getElementById('chat')

    elements.push(message(msg.value,"USER"))
    elements.push(message("No momento nosso sistema não está disponível","SYSTEM"))

    bodyChat.innerHTML = elements
  msg.value = '' 
  }

}


function messageBaseUser(message){
    return `<div class="mymsg">
    <div class="sent-msg msgMySent"><p><strong>Você</strong><br>${message}</p></div>
  </div>`
}

function messageBaseSystem(message){
    return `<div class="msgSystem">
    <div class="sent-msg msgSystemSent"><p><strong>Atendimento</strong><br>${message}</p></div>
  </div>`
}

function message(message, type){
    return type == "USER" ? messageBaseUser(message) : messageBaseSystem(message)
}


>>>>>>> 97e5bd8acfb1bd234d0f2a13046222e40a685ee5
