<script setup lang="ts">
const prop = defineProps<{
  color: 'white' | 'black' | 'red',
}>()
</script>

<template>
  <span class="AppChar" :style="{ color: prop.color}">
    <slot />
  </span>
</template>

<style scoped>
.AppChar {
  width: 10px;
}
</style>
