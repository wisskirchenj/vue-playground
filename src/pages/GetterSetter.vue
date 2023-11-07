<template>
    <div>
      <h2>Parent Component</h2>
      <ValueDoubler v-model="parentValue" />
      <p>Parent Value: {{ parentValue }}</p>
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue'
import ValueDoubler from '@/components/ValueDoubler.vue';

const parentValue = ref(0)
</script>