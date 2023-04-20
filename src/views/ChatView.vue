

<template>
  <HeaderComponent/>
  <div id="chat">
        <article id="massages">
            <section v-for="(message, index) in messages"  :key="index">
            <MessageComponent :message="message" />
            </section>
        </article>
    </div>
    <div id="content">
        <div id="inputChat">
            <input  placeholder="Digite uma Mensagem..."  v-model="message">
            <button @click="(e)=>sendMessage()">Enviar</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import MessageComponent from '@/components/MessageComponent.vue';
import { ref } from 'vue';

const messages = ref([{value: "Bem Vindo ao nosso sistema",type:"system"}])
let message = ref("")

function sendMessage(){
  newMessage(message.value)
    message.value = ""
}

function newMessage(message: string){
  messages.value.push({
    value: message,
    type: "user"
  })
  messages.value.push({
    value: "Atualmente nosso sistema não está online, tente novamente mais tarde",
    type: "system"
  })
}


</script>

<style scoped>
#chat{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 85%;


}
#massages{
    border: 1px solid #ccc;
    height: 100%;
    width: 60%;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    background-color: rgb(255, 254, 254);
}
#content{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
}
#inputChat{
    display: flex;
    justify-content: space-between;
    width: 60%;
}
input{
    width: 80%;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}
button{
    padding: 10px;
    width: 20%;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}
button:hover{
    background-color: #474747;
}
</style>