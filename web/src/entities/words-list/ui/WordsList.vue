<script setup lang="ts">
import { useAppStore } from '@/app/store';
import { AppChar } from '@/shared';
</script>
<template>
  <AppChar
    v-for="(item, index) in useAppStore().arrWords"
    :key="index"
  >
    {{ item }}
  </AppChar>
</template>
