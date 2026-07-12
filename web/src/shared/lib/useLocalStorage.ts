const setItem = (key: string, value: any) => localStorage.setItem(key, value)
const getItem = (key: string) => localStorage.getItem(key)
const currLang = 'current language'
const currCount = 'current count of words'

export const useLocalStorage = () => {
  const setCountOfWordsData = (count: number) => setItem(currCount, JSON.stringify(count))
  const setCurrLangData = (data: string) => setItem(currLang, data)
  const getCurrentData = () => {
    const currentLanguage= getItem(currLang)
    const currentCount = getItem(currCount)
    return { currentLang: currentLanguage, currentCount: Number(currentCount) }
  }

  return {
    setCountOfWordsData,
    setCurrLangData,
    getCurrentData,
  }
}
