<script lang="ts" setup>
import { CheckCircle, Eye, Info, Send, XCircle } from '@lucide/vue'
import type { stepsDate, timelineTrackerProp } from '../type'
import type { applicationProgress } from '@/shared/types'

const { progress, status } = defineProps<timelineTrackerProp>()

const statusOrder: applicationProgress[] = ['applied', 'interview', 'decision']

const steps: stepsDate[] = [
  { label: 'applied', icon: Send },
  { label: 'interview', icon: Eye },
  { label: 'decision', icon: Info },
]

const isRejected = status === 'rejected'
const isAccpeted = status === 'accepted'

const showExtraStep = isRejected || isAccpeted

/**
 * as long as the status prop is accepted or rejected, it will pass the previous step,
 * other wise, it will proceed to the current progress
 */
const currentIndex = statusOrder.indexOf(progress)

const stepStates = steps.map((step) => {
  const stepIndex = statusOrder.indexOf(step.label)
  const isDone = (!isRejected && currentIndex > stepIndex) || status === 'accepted'
  const isCurrent = !isRejected && currentIndex === stepIndex

  return { ...step, stepIndex, isDone, isCurrent }
})
</script>

<template>
  <div class="flex items-center gap-0">
    <div v-for="(state, i) in stepStates" :key="state.label" class="flex items-center">
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

    <div v-if="showExtraStep" class="flex items-center ml-0">
      <div class="h-0.5 w-12 mx-1 mb-5 bg-primary" />
      <div class="flex flex-col items-center">
        <div
          class="w-9 h-9 rounded-full flex items-center justify-center border-2"
          :class="[
            isRejected && 'border-red-400 bg-red-100 dark:bg-red-900/20 text-red-500',
            isAccpeted && 'border-green-400 bg-green-100 dark:bg-green-900/20 text-green-500',
          ]"
        >
          <XCircle v-if="isRejected" class="w-4 h-4" />
          <CheckCircle v-if="isAccpeted" class="w-4 h-4" />
        </div>
        <span
          class="text-xs mt-1.5 font-medium capitalize"
          :class="[isRejected && 'text-red-500', isAccpeted && 'text-green-500']"
          >{{ status }}</span
        >
      </div>
    </div>
  </div>
</template>
