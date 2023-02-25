var arrayMsg = []

function sendMsg() {
  const msg = document.getElementById('msg')
  if(msg.value != ''){
    let bodyChat = document.getElementById('chat')
    let bodyMsg = ''

    arrayMsg.push(msg.value)

    for (i = 0; i < arrayMsg.length; i++) {
      bodyMsg += `<div class="mymsg" style="border: 1px solid black">
                    <div class="sent-msg"><p><strong>YOU</strong><br>${arrayMsg[i]}</p></div>
                  </div>  `
    }

    bodyChat.innerHTML = bodyMsg
    msg.value = ''
  }
  
}

function toggleDarkMode() {
  var body = document.querySelector('body')
  var chat = document.querySelector('#chat')
  var headerChat = document.querySelector('#headerChat')
  var msg = document.querySelector('#msg')
  var sendButton = document.querySelector('button')
  var btnMode = document.querySelector('img')

  body.classList.toggle('dark-mode')
  chat.classList.toggle('dark-mode')
  headerChat.classList.toggle('dark-mode')
  msg.classList.toggle('dark-mode')
  sendButton.classList.toggle('dark-mode')
  btnMode.classList.toggle('dark-mode')

  if (btnMode.classList.toggle('dark-mode')) {
    btnMode.src = 'src/mododarck.png'
    btnMode.classList.remove('dark-mode')
  } else {
    btnMode.src = 'src/modoligth.png'
    btnMode.classList.add('dark-mode')
  }
}
