<script setup lang="ts">
import { computed } from 'vue'
import type { actionbutton, applicationActionButtonProps } from '../type'
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from '@lucide/vue'

const { status, progress } = defineProps<applicationActionButtonProps>()

const nextProgressLabel = computed(() =>
  progress === 'applied' ? 'Move to interview' : 'Move to decision',
)

defineEmits<{
  action: [val: actionbutton]
}>()
</script>

<template>
  <button
    v-if="status === 'in review' && progress !== 'decision'"
    type="button"
    class="inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
    @click="$emit('action', 'nextStep')"
  >
    {{ nextProgressLabel }}
    <ArrowRight class="h-4 w-4" />
  </button>

  <button
    v-if="status === 'in review' && progress === 'decision'"
    type="button"
    class="inline-flex items-center gap-1.5 rounded-xl bg-success px-4 py-2 text-sm font-medium text-success-foreground hover:opacity-90"
    @click="$emit('action', 'accepted')"
  >
    <CheckCircle2 class="h-4 w-4" />
    Accept
  </button>

  <button
    v-if="status === 'rejected'"
    type="button"
    class="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
    @click="$emit('action', 'revertReject')"
  >
    <RotateCcw class="h-4 w-4" />
    Revert rejection
  </button>

  <button
    v-if="status !== 'accepted' && status !== 'rejected'"
    type="button"
    class="inline-flex items-center gap-1.5 rounded-xl bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:opacity-90"
    @click="$emit('action', 'rejected')"
  >
    <XCircle class="h-4 w-4" />
    Reject
  </button>
</template>
