import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/feature/words-list';

export const index = () => {
  const store = useAppStore();
  const { arrWords } = storeToRefs(store);
  const currentColorArr = ref<Array<'red' | 'black' | 'white'>>([]);
  let i = 0;

  const resetTyping = () => {
    i = 0;
    currentColorArr.value = new Array(arrWords.value.length).fill('white');
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key.length !== 1) return;

    const pressedChar = e.key;

    if (pressedChar === arrWords.value?.[i]) {
      currentColorArr.value[i] = 'black';
      i++;
    } else {
      currentColorArr.value[i] = 'red';
    }

    if (i === arrWords.value.length) {
      store.generateWords();
    }
  };

  watch(arrWords, () => resetTyping(), { immediate: true })

  onMounted(() => {
    store.setLanguageOfWords();
    window.addEventListener('keydown', handleKeydown);
  });

  onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));

  return { arrWords, currentColorArr }
}
