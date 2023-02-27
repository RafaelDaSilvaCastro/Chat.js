function changeTheme() {
    const body = document.querySelector('body')
    const chat = document.querySelector('#chat')
    const headerChat = document.querySelector('#headerChat')
    const msg = document.querySelector('#msg')
    const sendButton = document.querySelector('button')
    const btn = document.querySelector('img')

    toggleTheme({
        body,
        chat,
        headerChat,
        msg,
        sendButton,
        btnMode: btn
    })
  
    selectTheme(btn.classList.toggle('theme') ? "dark" : "light", btn)
  }

  function toggleTheme({body,chat,headerChat,msg,sendButton,btnMode}){
    body.classList.toggle('theme')
    chat.classList.toggle('theme')
    headerChat.classList.toggle('theme')
    msg.classList.toggle('theme')
    sendButton.classList.toggle('theme')
    btnMode.classList.toggle('theme')
  }

  function selectTheme(theme, btnMode){
    btnMode.src = `src/assets/theme/${theme}.png`
    console.log(btnMode.src )
    theme == "dark" ? btnMode.classList.remove('theme') : btnMode.classList.add('theme')
  }