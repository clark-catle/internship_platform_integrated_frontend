<script setup lang="ts">
import { computed } from 'vue'
import type { buttonBase } from '../types'

const props = defineProps<buttonBase>()

const variant = computed(() => {
  switch (props.variant) {
    case 'destructive':
      return 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90'
    case 'ghost':
      return 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground'
    case 'link':
      return 'text-primary underline-offset-4 hover:underline'
    case 'outline':
      return 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground'
    case 'secondary':
      return 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80'
    default:
      return 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
  }
})

const size = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-8 rounded-md px-3 text-xs'
    case 'lg':
      return 'h-10 rounded-md px-8'
    case 'icon':
      return 'h-9 w-9'
    default:
      return 'h-9 px-4 py-2'
  }
})

console.log(size)
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    :class="[size, variant]"
  >
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </button>
</template>
