<template>
  <h1>Mi Primera App</h1>
  <hr />

  <MyCounter :value="1" />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3"/>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/MyCounter/MyCounterScript2.vue';
</script>
