<template>
  <section :style="{ 'background-image': `url(${background})` }">
    <header>
      <div class="title">
        <i class="ri-map-pin-2-fill"></i>
        {{ name }}
      </div>
    </header>

    <div class="crt-noise" />
    <div class="crt-overlay" />
  </section>
</template>

<script setup lang="ts">
import { useScene } from '@/composables/scene.composable'

const { name, background } = useScene()
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

header>.title {
  z-index: 2;
}

section {
  border: 1px solid var(--primary-color);
  position: relative;
  background-size: cover;
}
</style>
