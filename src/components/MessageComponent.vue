<template>
    <div v-if="message.type == 'user'" class="mymsg">
        <div class="sent-msg msgMySent">
            <p>
            <strong>Você</strong>
            <br>
            {{ message.value }}
        <br>
        </p>
        </div>

        
    </div>

    <div v-if="message.type == 'system'" class="msgMySent">
        <div class="sent-msg msgSystemSent msgSystem">
            <p>
            <strong>Sistema</strong>
            <br>
            {{ message.value }}
        <br>
        </p>
        </div>

        
    </div>
</template>

<script setup lang="ts">
import type IMessage from '@/interface/Message';
import { toRefs } from 'vue';

interface IProps {
    message: IMessage
}
const props = defineProps<IProps>()
const {message} = toRefs(props)
</script>

<style scoped>
  .mymsg{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border: none;
    margin:10px;
    padding: 1rem;
  }
  .sent-msg {
    text-align: right;
    padding-right: 10px;
    background-color: #343838;
    display: block;
    size: auto;
    width: 50%;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    color: #fff;
    word-break: break-all;
  }

  .msgMySent{
    border-radius: 18px 18px 0px 15px;
  }

  .msgSystemSent{
    border-radius: 18px 18px 15px 0px;
  }

  .msgSystem {
    display: flex;
    margin: 10px;

  }
  strong{
    font-weight: 500;
  }
</style>