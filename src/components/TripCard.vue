<template>
    <div class="trip-card">
        <header class="red">
            <slot name="header">
            </slot>
        </header>
        <h3>Trip {{ from }} - {{ to }}</h3>
        <p>Driver: {{ driver }}</p>
        <p>Cost: {{ cost }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    driver: {
        type: String,
        default: 'Max'
    },
    cost: {
        type: Number,
        required: true
    },
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
.red {
    color : red;
}
</style>