<script setup lang="ts">
import type { filterGroupProp } from '../type'

const { label, options, value } = defineProps<filterGroupProp>()

const emit = defineEmits(['select'])
</script>

<template>
  <div>
    <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
      {{ label }}
    </p>

    <div class="flex gap-2">
      <button
        v-for="opt in options"
        :key="opt"
        class="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200"
        :class="[
          value === opt
            ? 'gradient-primary text-white shadow-sm'
            : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground',
        ]"
        @click="emit('select', label, opt)"
      >
        {{ opt }}
      </button>
    </div>
  </div>
</template>
