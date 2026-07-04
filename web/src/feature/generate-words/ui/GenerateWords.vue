<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import { getArrRandomWords, getCharsFromArrWords } from '@/shared';

const list = reactive({ words: [''] })
const data = ref()

const generateWords = async (data: string[], count = 5) => {
  list.words = getCharsFromArrWords(getArrRandomWords(data, count))
}

onMounted(async () => {
  const file = await fetch('/english_1k.json')
  data.value = await file.json()
  await generateWords(data.value.words)
})
</script>
<template>
  <button @click="generateWords(data.words)">generate</button>
  <span v-for="(char, index) in list.words" :key="index">{{ char }}</span>
</template>
