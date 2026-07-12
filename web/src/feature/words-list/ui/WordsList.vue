<script setup lang="ts">
import { AppChar } from '@/shared';
import { index } from '../model'

const { arrWords, currentColorArr } = index()
</script>

<template>
  <AppChar
    v-for="(item, index) in arrWords"
    :key="index"
    :color="currentColorArr[index] ?? 'white'"
  >
    {{ item }}
  </AppChar>
</template>
