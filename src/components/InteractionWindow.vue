<template>
  <section>
    <ul>
      <li>
        <i class="ri-walk-line"></i>
        Move
      </li>

      <li>
        <i class="ri-eye-fill"></i>
        Look
      </li>

      <li>
        <i class="ri-hand-coin-fill"></i>
        Use
      </li>

      <li>
        <i class="ri-speak-fill"></i>
        Speak
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  border-left: 1px solid var(--primary-color);
  padding-left: 24px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 12px;
}

ul > li {
  margin-bottom: 4px;
  padding-left: 6px;
  user-select: none;
}

ul > li:hover {
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--background-color);
}
</style>
