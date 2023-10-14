<template>
  <div class="container">
    <h2>Mike's trips</h2>
    <TripCard 
        driver="Dan" 
        :cost="250" 
        from="9 Central Ave" 
        to="121 Taylor Street" 
    />
    <TripCard 
        driver="Max" 
        :cost="100" 
        from="98 Lyon Ave" 
        to="4 Front Street" 
    />
    <TripCard 
        driver="Jess" 
        :cost="170" 
        from="65 High Meadow Lane" 
        to="38 Linden Ave" 
    />
  </div>
  <button @click="routeToIndex">Back</button>
</template>

<script setup>
import TripCard from '../components/TripCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routeToIndex = () => router.back();
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>