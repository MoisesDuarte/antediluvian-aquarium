<template>
  <section>
    <header>
      <div class="title">
        <i class="ri-map-pin-2-fill"></i>
        Chrysanthemum Street
      </div>

      <div class="title">
        14:23
        <i class="ri-time-fill"></i>
      </div>
    </header>
  </section>
</template>

<script setup lang="ts"></script>

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
