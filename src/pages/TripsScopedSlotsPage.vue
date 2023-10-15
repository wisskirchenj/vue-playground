<template>
  <div class="container">
    <h2>Scoped slot's trips</h2>
    <trips-scoped-cards :cards="cards">
      <template v-slot:card="{ card }">
        <div class="trip-card">
          <h3>Trip {{ card.id }}</h3>
          <p>{{ card.from }} - {{ card.to }}</p>
          <p>Cost: {{ card.cost }}</p>
        </div>
      </template>
    </trips-scoped-cards>
    <button @click="routeBack">Back</button>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/model/card-data';
import TripsScopedCards from '@/components/TripsScopedCards.vue'
import { useRouter } from 'vue-router';

const cards: Card[] = [
  {
    id: '1',
    driver: 'Dan',
    cost: 250,
    from: '9 Central Ave',
    to: '121 Taylor Street'
  },
  {
    id: '2',
    driver: 'Tom',
    cost: 20,
    from: '10 Central Ave',
    to: '121 Main Street'
  }
]

const router = useRouter();
const routeBack = () => router.back();
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>