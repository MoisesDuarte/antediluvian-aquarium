<template>
  <section>
    <header>
      <div class="title">
        <h1>
          <i class="ri-map-pin-2-fill"></i>
          Chrysanthemum Street
        </h1>
      </div>

      <div class="title">
        <h1>
          14:23
          <i class="ri-time-fill"></i>
        </h1>
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
