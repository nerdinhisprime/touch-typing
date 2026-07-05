<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppStore } from '@/feature/words-list';

onMounted(() => useAppStore().generateWords());
</script>
<template>
  <button @click="useAppStore().generateWords()">generate</button>
</template>
