<script setup lang="ts">
import type { internship as internshipType } from '@/shared/types'
import { allowanceLabels, durationLabel, setupLabels } from '@/utils/format'
import { Clock, MapPin, Wallet } from '@lucide/vue'

const { internship } = defineProps<{
  internship: internshipType
}>()
</script>

<template>
  <div class="rounded-2xl border border-border bg-card p-6">
    <h2 class="mb-3 text-base font-semibold text-card-foreground">Internship</h2>
    <p class="text-sm font-medium text-card-foreground">{{ internship.title }}</p>
    <div class="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
      <span class="flex items-center gap-1.5">
        <MapPin class="h-4 w-4" /> {{ internship.location.city }},
        {{ internship.location.region }}
      </span>
      <span class="badge-primary rounded-full px-2.5 py-1 text-xs font-medium capitalize">
        {{ setupLabels[internship.setup] }}
      </span>
      <span class="flex items-center gap-1.5">
        <Clock class="h-4 w-4" />
        {{ durationLabel(internship.duration, internship.duration_unit) }}
      </span>
      <span class="flex items-center gap-1.5"
        ><Wallet class="h-4 w-4" /> {{ allowanceLabels[internship.allowance] }}</span
      >
    </div>
  </div>
</template>
