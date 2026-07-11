<script setup lang="ts">
  import { ref } from 'vue';
  import { AppButton } from '@/shared';
  import { NumberWordsMenu } from '@/entities/number-words-menu';
  import { useAppStore } from '@/feature/words-list';

  const store = useAppStore();

  const dialogRef = ref<InstanceType<typeof NumberWordsMenu> | null>(null);
  const localCount = ref<number>(store.countOfWords);
</script>

<template>
  <AppButton @click="dialogRef?.open()">
    count
  </AppButton>
  <NumberWordsMenu
    ref="dialogRef"
    @close="store.setCountOfWords(localCount)"
  >
    <input
      v-model="localCount"
      id="numberOfWords"
      type="range"
    >
    <label for="numberOfWords">
      {{ localCount }}
    </label>
  </NumberWordsMenu>
</template>
