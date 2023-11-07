<template>
    <data-holder v-model:name="name" lang="Vue.JS"/>
    <img alt="Vue logo" height=100 src="../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App" :user="name" />
    <button @click="routeToTrips">Trips</button>
    <button @click="routeToTripsScopedSlots">Trips scoped slots</button>
    <button @click="routeToVmodelDemo">Vmodel demo</button>
    <button @click="routeToGetSet">Getter Setter</button>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import DataHolder from '@/components/DataHolder.vue';

const name = ref('Jürgen')
const router = useRouter();
const routeToTrips = () => router.push('trips');
const routeToTripsScopedSlots = () => router.push('tripsscoped');
const routeToVmodelDemo = () => router.push('vmodel');
const routeToGetSet = () => router.push('getset');
</script>

<style>
</style>