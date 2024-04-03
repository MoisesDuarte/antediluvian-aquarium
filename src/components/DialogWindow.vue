<template>
  <section>
    <article class="title">
      <i class="ri-user-fill"></i>
      Consciência
    </article>

    <article class="dialog">
      {{ description }}
    </article>

    <button class="advance-dialog-button">Próximo ></button>
  </section>
</template>

<script setup lang="ts">
import { useScene } from '@/composables/scene.composable'

const { description } = useScene()
</script>

<style scoped>
section {
  position: relative;
  grid-column: span 2;
  border-top: 1px solid var(--primary-color);
  margin-top: 24px;
  padding-top: 24px;
}

article.dialog {
  margin-top: 14px;
  white-space: pre-line;
}

button.advance-dialog-button {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
