<script setup lang="ts">
  import { ref } from 'vue';
  import { AppDialog } from '@/shared';

  const dialogRef = ref<InstanceType<typeof AppDialog> | null>(null)

  defineExpose({
    open: () => dialogRef.value?.open(),
    close: () => dialogRef.value?.close(),
  })
</script>

<template>
  <AppDialog ref="dialogRef">
    <article class="langsList">
      <h3>list of languages</h3>
      <section>
        <ul>
          <slot />
        </ul>
      </section>
    </article>
  </AppDialog>
</template>

<style scoped>
.langsList { background-color: white }
</style>
