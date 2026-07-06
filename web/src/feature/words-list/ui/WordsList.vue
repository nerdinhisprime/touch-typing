<script setup lang="ts">
import { useAppStore } from '@/feature/words-list';
import { AppChar } from '@/shared';
import { storeToRefs } from 'pinia';
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';

const store = useAppStore();
const { arrWords } = storeToRefs(store);
const currentColorArr = ref<Array<'red' | 'black' | 'white'>>([]);
let i = 0;
const currentChar = ref<string>('')
const handleKeydown = (e: KeyboardEvent) => currentChar.value = e.key

watch(currentChar, () => {
  if(i === arrWords.value.length - 1) {
    currentColorArr.value = ['white']
    i = 0
    currentChar.value = ''
    store.generateWords()
  }
  if(currentChar.value === arrWords.value?.[i]) {
    currentColorArr.value[i] = 'black';
    i++;
  }
  else if(currentChar.value !== arrWords.value?.[i]) {
    currentColorArr.value[i] = 'red';
  }
});
watch(arrWords, () => {
  currentColorArr.value = ['white']
  i = 0
  currentChar.value = ''
})
onMounted(async () => {
  await store.generateWords();
  for(let i1 = 0; i1 < arrWords.value.length; i1++) {
    currentColorArr.value[i1] = 'white';
  };
  window.addEventListener('keydown', handleKeydown);
})

onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>
<template>
  <AppChar
    v-for="(item, index) in arrWords"
    :key="index"
    :color="currentColorArr[index] ?? 'white'"
  >
    {{ item }}
  </AppChar>
</template>
