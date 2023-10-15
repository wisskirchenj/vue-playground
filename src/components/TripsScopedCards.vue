<template>
  <div v-for="card in cards" :key="card.id">
    <slot name="card" :card="card"></slot>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/model/card-data';

defineProps<{
  cards: Card[]
}>();
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>