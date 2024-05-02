<template>
  <main class="game-container">
    <main-window />
    <interaction-window />
    <dialog-window />
  </main>

  <div class="notice">
    Conteúdo feito para telas maiores que 768px.<br>
    Modo responsivo em construção.
  </div>
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
}

.notice {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 12px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .notice {
    display: block;
  }
}
</style>
