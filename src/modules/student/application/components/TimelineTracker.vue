<script lang="ts" setup>
import { CheckCircle, Eye, Send, XCircle } from '@lucide/vue'
import type { applicationStatus } from '@/shared/types'
import type { timelineTrackerProp } from '../type'

const { status } = defineProps<timelineTrackerProp>()

const statusOrder: applicationStatus[] = ['pending', 'in review', 'accepted', 'rejected']
const steps = [
  { key: 'applied', label: 'Applied', icon: Send },
  { key: 'in review', label: 'Under Review', icon: Eye },
  { key: 'accepted', label: 'Accepted', icon: CheckCircle },
]

const isRejected = status === 'rejected'
const currentIndex = statusOrder.indexOf(status)

const stepStates = steps.map((step, i) => {
  const stepStatus = i === 0 ? 'pending' : i === 1 ? 'in review' : 'accepted'
  const stepIndex = statusOrder.indexOf(stepStatus)
  const isDone = isRejected && currentIndex >= stepIndex
  const isCurrent = isRejected && currentIndex === stepIndex

  return { ...step, stepIndex, isDone, isCurrent }
})
</script>

<template>
  <div class="flex items-center gap-0">
    <div v-for="(state, i) in stepStates" :key="state.key" class="flex items-center">
      <div class="flex flex-col items-center">
        <div
          class="w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all"
          :class="
            state.isDone
              ? 'border-primary bg-primary text-white'
              : state.isCurrent
                ? 'border-primary bg-primary/20 text-primary'
                : 'border-border bg-muted text-muted-foreground'
          "
        >
          <component :is="state.icon" class="w-4 h-4" />
        </div>
        <span
          class="text-xs mt-1.5 font-medium"
          :class="[state.isDone ? 'text-primary' : 'text-muted-foreground']"
        >
          {{ state.label }}
        </span>
      </div>

      <div
        v-if="i < stepStates.length - 1"
        class="h-0.5 w-12 mx-1 mb-5 transition-all"
        :class="currentIndex > state.stepIndex ? 'bg-primary' : 'bg-border'"
      />
    </div>

    <div v-if="isRejected" class="flex items-center ml-0">
      <div class="h-0.5 w-12 mx-1 mb-5 bg-border" />
      <div class="flex flex-col items-center">
        <div
          class="w-9 h-9 rounded-full flex items-center justify-center border-2 border-red-400 bg-red-100 dark:bg-red-900/20 text-red-500"
        >
          <XCircle class="w-4 h-4" />
        </div>
        <span class="text-xs mt-1.5 font-medium text-red-500">Rejected</span>
      </div>
    </div>
  </div>
</template>
