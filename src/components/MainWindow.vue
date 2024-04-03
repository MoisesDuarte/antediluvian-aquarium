<template>
  <section>
    <header>
      <div class="title">
        <i class="ri-map-pin-2-fill"></i>
        {{ name }}
      </div>
    </header>
  </section>
</template>

<script setup lang="ts">
import { useScene } from '@/composables/scene.composable'

const { name } = useScene()
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

section {
  background-image: url('../assets/backgrounds/street-at-night.jpg');
  background-size: cover;
  margin-right: 14px;
}
</style>
