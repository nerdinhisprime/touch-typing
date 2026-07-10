import { getCharsFromArrWords, getArrRandomWords } from "@/shared";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('store', () => {
  const arrWords = ref<string[]>([]);
  const rawArrWords = ref<string[]>([])

  const generateWords = (count: number = 5) => {
    try {
      arrWords.value = getCharsFromArrWords(getArrRandomWords(rawArrWords.value, count));
    } catch(err) { console.error(err) };
  };

  const setBaseSettings = (words: string[], count = 5) => {
    rawArrWords.value = words
    generateWords(count)
  };
  return { arrWords, rawArrWords, generateWords, setBaseSettings };
});
