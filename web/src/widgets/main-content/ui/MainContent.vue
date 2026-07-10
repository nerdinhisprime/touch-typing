<script setup lang="ts">
  import { WordsList } from '@/feature/words-list';
  import { GenerateWords } from '@/feature/generate-words';
  import { ChangeLayoutLang } from '@/feature/change-layout-language';
</script>

<template>
  <div class="center" style="flex-direction: column">
    <p>
      <WordsList />
    </p>
    <div style="display: flex; gap: 10px">
      <GenerateWords />
      <ChangeLayoutLang />
    </div>
  </div>
</template>
