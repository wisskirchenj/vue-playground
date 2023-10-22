<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>
      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>
      <button @click="routeBack">Back</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const routeBack = () => router.back();
</script>
