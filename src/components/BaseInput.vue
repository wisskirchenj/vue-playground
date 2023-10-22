<template>
    <input 
        :value="modelValue"
        @input="emit('update', ($event.target as HTMLInputElement).value)"
    />
</template>

<script setup lang="ts">
defineProps<({
    modelValue: string
})>();
const emit = defineEmits<{
  update: [modelValue: string]
}>()
</script>