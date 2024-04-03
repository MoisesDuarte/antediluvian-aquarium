<template>
  <main class="game-container">
    <main-window />
    <interaction-window />
    <dialog-window />
  </main>
</template>

<script setup lang="ts">
import MainWindow from './components/MainWindow.vue'
import InteractionWindow from './components/InteractionWindow.vue'
import DialogWindow from './components/DialogWindow.vue'
</script>

<style scoped>
.game-container {
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 468px 300px;
  animation: blur 1s;
}
</style>
