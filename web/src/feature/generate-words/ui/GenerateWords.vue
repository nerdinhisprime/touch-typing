<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppStore } from '@/app/store';

onMounted(() => useAppStore().generateWords());
</script>
<template>
  <button @click="useAppStore().generateWords()">generate</button>
</template>
