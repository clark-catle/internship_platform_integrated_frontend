<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <section class="rounded-2xl border border-border bg-card p-5 sm:p-6">
    <div v-if="title" class="mb-5 flex items-start justify-between gap-3">
      <div>
        <h2 class="text-base font-semibold text-card-foreground">{{ title }}</h2>
        <p v-if="description" class="mt-0.5 text-sm text-muted-foreground">{{ description }}</p>
      </div>
      <div v-if="$slots.actions" class="shrink-0">
        <slot name="actions" />
      </div>
    </div>
    <slot />
  </section>
</template>
