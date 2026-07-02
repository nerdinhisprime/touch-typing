<script setup lang="ts">
import { reactive, onMounted } from 'vue';
interface wordsObj {
  name: string;
  words: string[];
}
const list = reactive<wordsObj>({
  name: '',
  words: ['']
})
onMounted(async () => {
  const file = await fetch('/english_1k.json')
  const data = await file.json()
  list.words = data.words
})
</script>
<template>
  <ul>
    <li v-for="i in list.words" :key="i">
      <p>{{ i }}</p>
    </li>
  </ul>
</template>
