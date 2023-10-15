<template>
    <DataHolder :name="name" @update:name="(val: string) => name = val"
      lang="Vue.JS"/>
    <img alt="Vue logo" height=100 src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :user="name" />
    <button @click="routeToTrips">Trips</button>
    <button @click="routeToTripsScopedSlots">Trips scoped slots</button>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { Router, useRouter } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import DataHolder from '../components/DataHolder.vue';

const name = ref('Jürgen')
const router: Router = useRouter();
const routeToTrips = () => router.push('trips');
const routeToTripsScopedSlots = () => router.push('tripsscoped');
</script>

<style>
</style>