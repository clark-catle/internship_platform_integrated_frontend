<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowLeft, FileText } from '@lucide/vue'
import { formatDateTime, progressLabel } from '@/utils/format'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { applicationInternship } from '@/data/applications'
import type { application as ApplicationType } from '@/shared/types/index.ts'
import StudentInfo from '@/shared/components/StudentInfo.vue'
import ApplictionInternshipInfo from '@/shared/components/ApplictionInternshipInfo.vue'
import ApplicationStatusBadge from './ApplicationStatusBadge.vue'

const router = useRouter()

const application = defineModel<ApplicationType | undefined>('application', { required: true })
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6 mb-6">
    <div
      @click="router.back()"
      class="cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft class="h-4 w-4" />
      Back
    </div>

    <EmptyStateBase
      v-if="!application"
      :icon="FileText"
      title="Application not found"
      description="Application does not exist or is missing"
    />

    <template v-else>
      <div class="rounded-2xl border border-border bg-card p-6">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="flex items-center gap-3">
            <img
              :src="application.student?.name.first_name"
              alt=""
              class="h-12 w-12 shrink-0 rounded-full object-cover"
            />
            <div>
              <h1 class="text-lg font-semibold text-card-foreground">
                {{ application.student?.name.first_name }} {{ application.student?.name.last_name }}
              </h1>
              <p class="text-sm text-muted-foreground">
                Applied for {{ applicationInternship(application.internshipId)?.title }}
              </p>
            </div>
          </div>

          <ApplicationStatusBadge :status="application.status" />
        </div>
        <p class="mt-3 text-xs text-muted-foreground">
          Applied on {{ formatDateTime(application.applied_at) }} · Progress:
          {{ progressLabel[application.progress] }}
        </p>

        <slot name="actionButton" />
      </div>

      <StudentInfo v-if="application.student" :student="application.student" />

      <ApplictionInternshipInfo
        v-if="applicationInternship(application.internshipId)"
        :internship="applicationInternship(application.internshipId)!"
      />
    </template>
  </div>
</template>
