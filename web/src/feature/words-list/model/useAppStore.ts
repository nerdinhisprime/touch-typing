import { getCharsFromArrWords, getArrRandomWords } from "@/shared";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@/shared"; 
import { en, ru } from "@/shared/config";

const { setCurrLangData, setCountOfWordsData, getCurrentData } = useLocalStorage()
const { currentLang, currentCount } = getCurrentData()

export const useAppStore = defineStore('store', () => {
  const arrWords = ref<string[]>([]);
  const rawArrWords = ref<string[]>([])
  const countOfWords = ref<number>(5)

  const generateWords = () => {
    try {
      switch(currentLang) {
        case 'en': {
          rawArrWords.value = en.words
          break;
        }
        case 'ru': {
          rawArrWords.value = ru.words
          break;
        }
      }
      arrWords.value = getCharsFromArrWords(
        getArrRandomWords(
          rawArrWords.value,
          currentCount || countOfWords.value
        )
      );
    } catch(err) { console.error(err) };
  };

  const setCurrentLangData = (lang: string = currentLang || 'en') => {
    switch (lang) {
      case 'en': {
        setCurrLangData('en');
        rawArrWords.value = en.words
        break;
      }
      case 'ru': {
        setCurrLangData('ru');
        rawArrWords.value = ru.words
        break;
      }
      default: {
        //const exaustiveCheck: never = lang
        setCurrLangData(lang)
      }
    }
    generateWords()
  };
  const setCountOfWords = (count = countOfWords.value) => {
    countOfWords.value = count;
    generateWords();
    setCountOfWordsData(Number(count));
  };
  return {
    arrWords,
    countOfWords,
    rawArrWords,
    generateWords,
    setLanguageOfWords: setCurrentLangData,
    setCountOfWords,
  };
});
