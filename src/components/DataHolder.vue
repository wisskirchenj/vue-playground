<template>
  <div>
    <h2>Hi, I'm {{ props.name }} and I'm toying around with {{ lang }}!</h2>
    <p>{{ lang }} was created by {{ showAuthor() }}!</p>
    <button @:click="upgrade">Upgrade!</button>
    <button @:click="downgrade">Downgrade</button>
    <input v-bind:name="name" 
      @input="e => $emit('update:name', (e.target as HTMLInputElement).value)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  name: String,
  lang: String
})
defineEmits(['update:name'])

const lang = ref(props.lang)
const name = ref(props.name)

function upgrade() {
  lang.value = 'Vue.JS'
}
function downgrade() {
  lang.value = 'Typescript'
}
function showAuthor() {
  return 'Typescript' === lang.value ? 'Anders Hejlsberg' : 'Evan You'
}
</script>