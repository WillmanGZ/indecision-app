<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- Message Box -->
    <MessageBox @send-message="onMessage($event)" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { type ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  { id: new Date().getTime(), message: '¿Quieres ir a tomar café?', itsMine: true },
  {
    id: new Date().getTime() + 1,
    message: 'Yes',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif',
  },
]);

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  });
};
</script>
