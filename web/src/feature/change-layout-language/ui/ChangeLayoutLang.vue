<script setup lang="ts">
  import { ref } from 'vue';
  import { AppButton } from '@/shared';
  import { LanguagesList } from '@/entities/languages-list';
  import { ru, en } from '@/shared/config';
  import { useAppStore } from '@/feature/words-list';

  const dialogElement = ref<InstanceType<typeof LanguagesList> | null>(null)

  defineExpose({
    open: () => dialogElement.value?.open(),
    close: () => dialogElement.value?.close(),
  })
</script>

<template>
  <AppButton
    @click="dialogElement?.open()"
  >
    lang
  </AppButton>
  <LanguagesList ref="dialogElement">
    <li v-for="(item, index) in [ru, en]" :key="index">
      <AppButton
        @click="
          useAppStore().setLanguageOfWords(item.words);
          dialogElement?.close()
        "
      >
        {{ item.name }}
      </AppButton>
    </li>
  </LanguagesList>
</template>
