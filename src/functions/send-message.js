const arrayMsg = []
const arrayMsgSystem = ["Bem vindo á nossa central de atendimento"]

function sendMsg() {
  const msg = document.getElementById('msg')
  if(msg.value != ''){
    let bodyChat = document.getElementById('chat')

    arrayMsg.push(msg.value)
    arrayMsgSystem.push("No momento nosso sistema não está disponível")

      bodyChat.innerHTML = [...message(arrayMsg,"USER"),...message(arrayMsgSystem,"SYSTEM")]
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

function message(array, type){
    if(array.length){
        return array.map((message)=>{
            return type == "USER" ? messageBaseUser(message) : messageBaseSystem(message)
        })
    }
    return []
}


