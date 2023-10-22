<template>
    <input 
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
</template>

<script setup lang="ts">
defineProps<({
    modelValue: string
})>();
const emit = defineEmits<{
    "update:modelValue": [modelValue: string]
}>()
</script>