<script setup lang="ts">
  import { ref } from 'vue';
  import { AppButton } from '@/shared';
  import { LanguagesList } from '@/entities/LanguagesList';

  const dialogElement = ref<InstanceType<typeof LanguagesList> | null>(null)
</script>

<template>
  <AppButton
    @click="dialogElement?.open()"
  >
    lang
  </AppButton>
  <LanguagesList ref="dialogElement" />
</template>
