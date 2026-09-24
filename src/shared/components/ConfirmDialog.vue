<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'

withDefaults(
  defineProps<{
    open: boolean
    title: string
    description?: string
    confirmLabel?: string
    cancelLabel?: string
    danger?: boolean
  }>(),
  {
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    danger: false,
  },
)

const emit = defineEmits<{ confirm: []; cancel: [] }>()
</script>

<template>
  <AnimatePresence>
    <Motion
      v-if="open"
      as="div"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.15, ease: 'easeInOut' }"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      @click.self="emit('cancel')"
    >
      <Motion
        as="div"
        :initial="{ opacity: 0, scale: 0.95, y: 10 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 0.95, y: 10 }"
        :transition="{ duration: 0.15, ease: 'easeInOut' }"
        class="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl"
      >
        <h3 class="text-lg font-semibold text-card-foreground">{{ title }}</h3>
        <p v-if="description" class="mt-2 text-sm text-muted-foreground">{{ description }}</p>
        <div v-if="$slots.default" class="mt-3">
          <slot />
        </div>
        <div class="mt-6 flex justify-end gap-3">
          <button
            type="button"
            class="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            @click="emit('cancel')"
          >
            {{ cancelLabel }}
          </button>
          <button
            type="button"
            class="rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            :class="danger ? 'bg-destructive' : 'gradient-primary'"
            @click="emit('confirm')"
          >
            {{ confirmLabel }}
          </button>
        </div>
      </Motion>
    </Motion>
  </AnimatePresence>
</template>
