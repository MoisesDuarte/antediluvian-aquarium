<template>
  <section>
    <label class="title">
      <h1>What should I do?</h1>
    </label>

    <ul>
      <li>Move</li>
      <li>Look</li>
      <li>Interact</li>
      <li>Speak</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  border-left: 1px solid var(--link-color);
  padding-left: 24px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 12px;
}

ul > li:hover {
  cursor: pointer;
  background-color: var(--heading-color);
  color: var(--background-color);
}
</style>
