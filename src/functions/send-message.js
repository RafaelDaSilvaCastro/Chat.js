const arrayMsg = []
const arrayMsgSystem = []
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


