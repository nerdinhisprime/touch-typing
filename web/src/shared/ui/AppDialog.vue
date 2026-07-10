<script setup lang="ts">
  import { ref } from 'vue'

  const dialogRef = ref<HTMLDialogElement | null>(null)
  defineExpose({
    open: () => dialogRef.value?.showModal(),
    close: () => dialogRef.value?.close(),
  })
</script>

<template>
  <dialog ref="dialogRef" @click="dialogRef?.close()">
    <div @click.stop>
      <slot />
    </div>
  </dialog>
</template>
