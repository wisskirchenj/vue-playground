
<template>
    <!-- <base-input v-model="firstName" /> <== works and uses modelValue (default) instead of name -->
    <base-input v-model:name="firstName" />
    {{ firstName }}
    <br /><br />
    <button @click="routeBack">Back</button>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import { useRouter } from 'vue-router';

const firstName = ref('Lera');
const router = useRouter();
const routeBack = () => router.back();
</script>

