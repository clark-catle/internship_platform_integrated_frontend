<script setup lang="ts">
import { Motion, AnimatePresence } from 'motion-v'
import { Clock, MapPin, Pencil, RotateCcw, Trash2, Wallet, X } from '@lucide/vue'
import { allowanceLabels, durationLabel, formatDate, setupLabels } from '@/utils/format'
import type { internship as internshipType } from '@/shared/types'
import SkillChip from '@/shared/components/SkillChip.vue'

defineProps<{
  internship: internshipType
}>()

const emit = defineEmits<{
  close: []
  viewApplications: [id: number]
  edit: [id: number]
  requestDelete: [id: number]
  restore: [id: number]
}>()
</script>

<template>
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
        <div class="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-semibold text-card-foreground">{{ internship.title }}</h3>
            <p class="mt-0.5 text-xs text-muted-foreground">Posted internship</p>
          </div>
          <button
            type="button"
            class="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary"
            @click="emit('close')"
            aria-label="Close"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div
          v-if="internship.deleted_at"
          class="mb-4 rounded-xl border px-4 py-3 text-sm"
          :class="
            internship.admin_deleted_by
              ? 'border-destructive/30 bg-destructive/10 text-destructive'
              : 'border-warning/30 bg-warning/10 text-warning'
          "
        >
          <!-- will render if the user is the admin -->
          <template v-if="internship.admin_deleted_by">
            This internship was removed by an administrator and cannot be restored.
          </template>
          <template v-else>
            You deleted this posting on {{ formatDate(internship.deleted_at) }}. You can restore it
            any time.
          </template>
        </div>

        <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span class="flex items-center gap-1.5">
            <MapPin class="h-4 w-4" />
            {{ internship.location.city }},
            {{ internship.location.region }}
          </span>
          <span class="badge-primary rounded-full px-2.5 py-1 text-xs font-medium capitalize">
            {{ setupLabels[internship.setup] }}
          </span>
          <span class="flex items-center gap-1.5">
            <Clock class="h-4 w-4" />
            {{ durationLabel(internship.duration, internship.duration_unit) }}
          </span>
          <span class="flex items-center gap-1.5">
            <Wallet class="h-4 w-4" /> {{ allowanceLabels[internship.allowance] }}
          </span>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <SkillChip v-for="s in internship.internship_skill" :key="s.id">{{ s.name }}</SkillChip>
        </div>

        <div class="mt-5">
          <h4 class="mb-1 text-sm font-semibold text-card-foreground">Description</h4>
          <p class="whitespace-pre-line text-sm text-muted-foreground">
            {{ internship.description }}
          </p>
        </div>
        <div class="mt-4">
          <h4 class="mb-1 text-sm font-semibold text-card-foreground">Requirements</h4>
          <p class="whitespace-pre-line text-sm text-muted-foreground">
            {{ internship.requirements }}
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
          <button
            type="button"
            class="inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            @click="emit('viewApplications', internship.id)"
          >
            View applications
          </button>

          <template v-if="!internship.deleted_at">
            <button
              type="button"
              class="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
              @click="emit('edit', internship.id)"
            >
              <Pencil class="h-4 w-4" />
              Edit
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-1.5 rounded-xl border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
              @click="emit('requestDelete', internship.id)"
            >
              <Trash2 class="h-4 w-4" />
              Delete
            </button>
          </template>

          <button
            v-else-if="internship.deleted_at"
            type="button"
            class="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            @click="emit('restore', internship.id)"
          >
            <RotateCcw class="h-4 w-4" />
            Restore
          </button>
        </div>
      </Motion>
    </Motion>
  </AnimatePresence>
</template>
