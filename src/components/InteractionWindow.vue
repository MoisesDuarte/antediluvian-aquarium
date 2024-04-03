<template>
  <section>
    <ul v-if="!currentActionOptions">
      <li v-for="{ id, icon, label } in actionsList" :key="id" @click="currentAction = id">
        <i :class="icon"></i>
        {{ label }}
      </li>
    </ul>

    <ul v-if="currentActionOptions">
      <li v-for="{ id, name, icon } in currentActionOptions" :key="id">
        <i :class="icon"></i>
        {{ name }}
      </li>
      <li @click="currentAction = undefined">
        <i class="ri-arrow-go-back-line"></i>
        Voltar
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { EAction, useScene } from '@/composables/scene.composable'

const {
  state: { currentAction, currentActionOptions }
} = useScene()

const actionsList = [
  {
    id: EAction.MOVE,
    icon: 'ri-walk-line',
    label: 'Mover'
  },
  {
    id: EAction.SEE,
    icon: 'ri-eye-fill',
    label: 'Olhar'
  },
  {
    id: EAction.SPEAK,
    icon: 'ri-speak-fill',
    label: 'Falar'
  },
  {
    id: EAction.USE,
    icon: 'ri-hand-coin-fill',
    label: 'Usar'
  }
]
</script>

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
