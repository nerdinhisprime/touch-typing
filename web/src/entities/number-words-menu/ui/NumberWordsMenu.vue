<script setup lang="ts">
import { AppDialog } from '@/shared';
import { ref } from 'vue';

const dialogRef = ref<InstanceType<typeof AppDialog> | null>(null)

defineExpose({
  open: () => dialogRef.value?.open(),
  close: () => dialogRef.value?.close(),
})
</script>

<template>
  <AppDialog ref="dialogRef">
    <article @click.stop style="backgroundColor: skyblue">
      <h3>current word count</h3>
      <section>
        <slot />
      </section>
    </article>
  </AppDialog>
</template>
