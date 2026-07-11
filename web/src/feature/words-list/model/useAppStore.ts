import { getCharsFromArrWords, getArrRandomWords } from "@/shared";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('store', () => {
  const arrWords = ref<string[]>([]);
  const rawArrWords = ref<string[]>([])
  const countOfWords = ref<number>(5)

  const generateWords = () => {
    try {
      arrWords.value = getCharsFromArrWords(
        getArrRandomWords(
          rawArrWords.value,
          countOfWords.value
        )
      );
    } catch(err) { console.error(err) };
  };

  const setLanguageOfWords = (words: string[]) => {
    rawArrWords.value = words
    generateWords()
  };
  const setCountOfWords = (count = countOfWords.value) => {
    countOfWords.value = count;
    generateWords();
  };
  return {
    arrWords,
    countOfWords,
    rawArrWords,
    generateWords,
    setLanguageOfWords,
    setCountOfWords,
  };
});
