<script setup lang="ts">
import { Motion, AnimatePresence } from 'motion-v'
import { X } from '@lucide/vue'

defineProps<{
  title: string
}>()

const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <Teleport to="body">
    <AnimatePresence>
      <Motion
        as="div"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.15 }"
        @click.self="emit('close')"
      >
        <Motion
          as="div"
          class="max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-xl"
          :initial="{ opacity: 0, scale: 0.96, y: 8 }"
          :animate="{ opacity: 1, scale: 1, y: 0 }"
          :exit="{ opacity: 0, scale: 0.96, y: 8 }"
          :transition="{ duration: 0.18, ease: 'easeOut' }"
        >
          <div class="mb-5 flex items-start justify-between gap-3">
            <h3 class="text-lg font-semibold text-card-foreground">{{ title }}</h3>
            <button
              type="button"
              class="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary"
              @click="emit('close')"
              aria-label="Close"
            >
              <X class="h-5 w-5" />
            </button>
          </div>
          <slot />
        </Motion>
      </Motion>
    </AnimatePresence>
  </Teleport>
</template>
