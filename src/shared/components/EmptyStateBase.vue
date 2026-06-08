<script setup lang="ts">
import { Motion } from 'motion-v'
import type { emptyStateProps } from '../types'
import ButtonBase from './ButtonBase.vue'

const { icon, title, description, action } = defineProps<emptyStateProps>()
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, scale: 0.95 }"
    :animate="{ opacity: 1, scale: 1 }"
    className="flex flex-col items-center justify-center py-16 px-8 text-center"
  >
    <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-6">
      <component :is="icon" className="w-10 h-10 text-primary opacity-60" />
    </div>

    <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">{{ title }}</h3>

    <p className="text-muted-foreground text-sm max-w-xs mb-6">{{ description }}</p>

    <ButtonBase
      v-if="action"
      @click="action.action"
      className="gradient-primary text-white border-0 rounded-xl"
    >
      {{ action.actionLabel }}
    </ButtonBase>
  </Motion>
</template>
