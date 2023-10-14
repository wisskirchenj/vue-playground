<template>
 <div class="trip-card">
    <h3>Trip {{ from }} - {{ to }}</h3>
    <p>Driver: {{ driver }}</p>
    <p>Cost: {{ cost }}</p>
 </div>
</template>

<script setup lang="ts">
defineProps({
    driver: String,
    cost: Number,
    from: String,
    to: String
});
</script>

<style>
.trip-card {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    width: 400px
}
</style>