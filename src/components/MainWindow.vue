<template>
  <section :style="{ 'background-image': `url(${background})` }">
    <header>
      <div class="scene-title">
        <i class="ri-circle-fill"></i> REC
      </div>

      <i class="ri-battery-low-line"></i>

    </header>

    <footer>
      <i class="ri-map-pin-fill"></i>
      {{ name }}
    </footer>

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

footer {
  padding: 12px 16px;
  text-shadow: 0 0 5px var(--primary-color);
  text-align: right;
}

header>.scene-title {
  background: none;
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-color);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 12px 16px;
}

header>.scene-title>i {
  width: 60px;
  animation: blink 1.25s ease-in-out infinite;
}

header>i {
  font-size: 36px;
  padding-right: 12px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--primary-color);
  position: relative;
  background-size: cover;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
