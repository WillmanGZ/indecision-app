<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++" class="btn">+1</button>
      <button @click="counter--" class="btn">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squareCounter } = useCounter(10);
</script>

<style scoped>
@reference 'tailwindcss';

.btn {
  @apply p-5 bg-blue-600 rounded hover:bg-blue-300;
}
</style>
