<template>
    <input 
        :value="name"
        @input="emit('update:name', ($event.target as HTMLInputElement).value)"
    />
</template>

<script setup lang="ts">
defineProps<({
    name: string
})>();
const emit = defineEmits<{
    'update:name': [val: string]
}>()
</script>