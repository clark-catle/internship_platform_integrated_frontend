<script setup lang="ts">
import { applicationCountByInternship } from '@/data/applications'
import type { internship } from '@/shared/types'
import { durationLabel, setupLabels } from '@/utils/format'

const { data } = defineProps<{ data: internship }>()

defineEmits<{ openView: [id: number] }>()
</script>

<template>
  <button
    type="button"
    class="card-hover flex flex-col rounded-2xl border border-border bg-card p-5 text-left"
    @click="$emit('openView', data.id)"
  >
    <div class="flex items-start justify-between gap-2">
      <h3 class="text-sm font-semibold text-card-foreground">{{ data.title }}</h3>
      <span
        v-if="data.deleted_at"
        class="shrink-0 badge-danger rounded-full px-2 py-0.5 text-[11px] font-medium"
      >
        {{ data.admin_deleted_by ? 'Removed by admin' : 'Deleted' }}
      </span>
    </div>
    <p class="mt-1 text-xs text-muted-foreground">
      {{ data.location.city }}, {{ data.location.region }}
    </p>
    <div class="mt-3 flex flex-wrap gap-1.5">
      <span class="badge-primary rounded-full px-2 py-0.5 text-[11px] font-medium capitalize">
        {{ setupLabels[data.setup] }}
      </span>
      <span
        class="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
      >
        {{ durationLabel(data.duration, data.duration_unit) }}
      </span>
    </div>
    <p class="mt-4 text-xs font-medium text-muted-foreground">
      {{ applicationCountByInternship(data.id) }}
      applicant
      {{ applicationCountByInternship(data.id) === 1 ? '' : 's' }}
    </p>
  </button>
</template>
