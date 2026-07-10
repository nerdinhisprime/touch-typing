<script setup lang="ts">
  import { ref } from 'vue';
  import { AppDialog, AppButton } from '@/shared';
  import { ru, en } from '@/shared/config';
  import { useAppStore } from '@/feature/words-list';

  const allLangs = [ru, en]
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
          <li v-for="(item, index) in allLangs" :key="index">
            <AppButton
              @click="useAppStore().loadGoalLanguage(item.words, item.name)"
            >
              {{ item.name }}
            </AppButton>
          </li>
        </ul>
      </section>
    </article>
  </AppDialog>
</template>

<style scoped>
.langsList {
  background-color: white
}
</style>
