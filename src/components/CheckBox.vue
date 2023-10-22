<template>
    <input 
        :value="answer" 
        type="checkbox" 
        @change="emit('update:answer', !answer)" />
</template>

<script setup lang="ts">
defineProps<({
    answer: boolean
})>();
const emit = defineEmits<{
    'update:answer': [val: boolean]
}>()
</script>