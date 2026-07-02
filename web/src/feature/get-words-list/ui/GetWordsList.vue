<script setup lang="ts">
import AppButton, { useFileSystemAccess } from '@/shared';

const { selectDirectory } = useFileSystemAccess()
</script>

<template>
  <AppButton @click="selectDirectory"/>
</template>
