<template>
  <section>
    <article class="title">
      <i :class="icon"></i>
      {{ name }}
    </article>

    <article class="dialog">
      {{ lines[0] }}
    </article>

    <button v-if="lines.length > 1" class="advance-dialog-button">Próximo ></button>
  </section>
</template>

<script setup lang="ts">
import { useScene } from '@/composables/scene.composable'
import { computed } from 'vue'

const {
  state: { currentActorDetails }
} = useScene()

const name = computed(() => currentActorDetails.value?.name)
const icon = computed(() => currentActorDetails.value?.icon)
const lines = computed(() => currentActorDetails.value?.lines || [])
</script>

<style scoped>
section {
  position: relative;
  grid-column: span 2;
  margin-top: 24px;
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
