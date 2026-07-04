<script setup lang="ts">
import { AppNav } from '@/shared';
import GetWordsList from '@/feature/get-words-list';
import GenerateWords from '@/feature/generate-words';
</script>

<template>
  <AppNav>
    <GetWordsList />
    <GenerateWords />
  </AppNav>
</template>
