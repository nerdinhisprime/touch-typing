<script setup lang="ts">
import { AppButton, useFileSystemAccess } from '@/shared';
</script>

<template>
  <AppButton @click="useFileSystemAccess().selectDirectory"/>
</template>
