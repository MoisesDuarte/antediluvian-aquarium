<template>
  <section>
    <article class="title">
      <h1>Ilia Lafayette</h1>
    </article>

    <article class="dialog">
      I hate these streets. I wish they would stop growing...<br />
      It's been a while since I've been out at night like this, now that I think about it.
    </article>

    <button class="advance-dialog-button">Next ></button>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  position: relative;
  grid-column: span 2;
  border-top: 1px solid var(--link-color);
  margin-top: 24px;
  padding-top: 24px;
}

article.dialog {
  margin-top: 14px;
}

button.advance-dialog-button {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
