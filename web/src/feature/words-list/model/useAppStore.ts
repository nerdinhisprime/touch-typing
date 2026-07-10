import { getCharsFromArrWords, getArrRandomWords } from "@/shared";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('store', () => {
  const arrWords = ref<string[]>([]);
  let currentLayoutLanguage: string = ''

  const generateWords = async (count = 5) => {
    try {
      const file = await fetch('/english_1k.json');
      const data = await file.json();
      arrWords.value = getCharsFromArrWords(getArrRandomWords(data.words, count));
    } catch(err) { console.error(err) };
  };
  const loadGoalLanguage = (
    lang: string[],
    name: string = currentLayoutLanguage,
    count = 5
  ) => {
    try {
      arrWords.value = getCharsFromArrWords(getArrRandomWords(lang, count));
      currentLayoutLanguage = name
    } catch (err) { console.error(err) };
  };
  return { arrWords, currentLayoutLanguage, generateWords, loadGoalLanguage };
});
