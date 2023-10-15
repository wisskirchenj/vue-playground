<template>
  <div class="container">
    <h2>Mike's trips</h2>
    <trip-card driver="Dan" :cost="250" from="9 Central Ave" to="121 Taylor Street" />
    <trip-card :cost="100" from="98 Lyon Ave" to="4 Front Street">
      <template v-slot:header>
        <h3>TripCards header slot</h3>
      </template>
    </trip-card>
    <trip-card driver="Jess" :cost="170" from="65 High Meadow Lane" to="38 Linden Ave" />
  </div>
  <button @click="routeBack">Back</button>
</template>

<script setup lang="ts">
import TripCard from '@/components/TripCard.vue';
import { useRouter } from 'vue-router';

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