<template>
    <div>
        <label for="inputValue">Enter a Number:</label>
        <input type="number" id="inputValue" v-model="modelValue" 
        @input="() => doubleValue = modelValue * 4"/>
        <p>Double the Value: {{ doubleValue }}</p>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue'

// Define a prop for v-model binding
const props = defineProps(['modelValue']);
// Use emit to update the prop value
const emit = defineEmits(['update:modelValue'])
const modelValue = ref(props.modelValue);

// Getter to double the input value
const doubleValue = computed({
    get: () => modelValue.value * 2,
    set: (newValue) => {
        emit('update:modelValue', newValue)
    }
});
</script>