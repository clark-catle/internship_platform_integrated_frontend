<script setup lang="ts">
import SkillChip from '@/shared/components/SkillChip.vue'
import type { Student } from '@/shared/types'
import { FileText, MapPin, Phone, School } from '@lucide/vue'

const { student } = defineProps<{ student: Student }>()
</script>

<template>
  <div class="rounded-2xl border border-border bg-card p-6">
    <h2 class="mb-4 text-base font-semibold text-card-foreground">Applicant details</h2>
    <dl class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
      <div>
        <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">School</dt>
        <dd class="mt-0.5 flex items-center gap-1.5 text-sm text-card-foreground">
          <School class="h-3.5 w-3.5 text-muted-foreground" />
          {{ student.school }}
        </dd>
      </div>
      <div>
        <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">Course</dt>
        <dd class="mt-0.5 text-sm text-card-foreground">
          {{ student.course.name }}
        </dd>
      </div>
      <div>
        <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">Cellphone</dt>
        <dd class="mt-0.5 flex items-center gap-1.5 text-sm text-card-foreground">
          <Phone class="h-3.5 w-3.5 text-muted-foreground" />
          {{ student.cellphone_number }}
        </dd>
      </div>
      <div>
        <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">Location</dt>
        <dd class="mt-0.5 flex items-center gap-1.5 text-sm text-card-foreground">
          <MapPin class="h-3.5 w-3.5 text-muted-foreground" />
          {{ student.location.city }}, {{ student.location.region }}
        </dd>
      </div>
    </dl>

    <div class="mt-4">
      <dt class="mb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Skills
      </dt>
      <div class="flex flex-wrap gap-2">
        <SkillChip v-for="s in student.student_skill" :key="s.id">
          {{ s.name }}
        </SkillChip>
      </div>
    </div>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-5 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
    >
      <FileText class="h-4 w-4" />
      View resume — resume.pdf
    </a>
  </div>
</template>
