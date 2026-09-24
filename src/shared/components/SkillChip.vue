<script lang="ts" setup>
import { X } from '@lucide/vue'

withDefaults(
  defineProps<{
    removeable?: boolean
  }>(),
  { removeable: false },
)

defineEmits<{
  (e: 'removeSkill'): void
}>()
</script>

<template>
  <span
    class="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground font-medium"
  >
    <slot />

    <button
      v-if="removeable"
      @click="$emit('removeSkill')"
      class="hover:text-destructive transition-colors"
    >
      <X class="w-3 h-3" />
    </button>
  </span>
</template>
