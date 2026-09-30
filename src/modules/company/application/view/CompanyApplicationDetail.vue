<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { ArrowLeft, CheckCircle2, FileText } from '@lucide/vue'
import { formatDateTime, progressLabel } from '@/utils/format'
import { useApplicationDetail } from '../composable/useApplicationDetail'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import ApplicationProgressBadge from '@/modules/student/application/components/ApplicationProgressBadge.vue'
import { applicationInternship } from '@/data/applications'
import ApplicationActionbuton from '../components/ApplicationActionbuton.vue'
import StudentInfo from '../components/StudentInfo.vue'
import InternshipInfo from '../components/InternshipInfo.vue'
import type { actionbutton } from '../type/index.ts'
import type { applicationProgress } from '@/shared/types/index.ts'

const route = useRoute()
const { application } = useApplicationDetail(Number(route.params.id))

const actionButton = (action: actionbutton, progress: applicationProgress) => {
  if (!application.value) return

  switch (action) {
    case 'nextStep':
      progress === 'applied'
        ? (application.value.progress = 'interview')
        : (application.value.progress = 'decision')
      break
    case 'accepted':
      application.value.status = 'accepted'
      break
    case 'rejected':
      application.value.status = 'rejected'
      break
    case 'revertReject':
      application.value.status = 'in review'
      application.value.progress = 'applied'
      break
  }
}
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6">
    <RouterLink
      :to="{ name: 'companyApplication' }"
      class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft class="h-4 w-4" />
      Back to applications
    </RouterLink>

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
          <ApplicationProgressBadge :status="application.status" />
        </div>
        <p class="mt-3 text-xs text-muted-foreground">
          Applied on {{ formatDateTime(application.applied_at) }} · Progress:
          {{ progressLabel[application.progress] }}
        </p>

        <!-- Action controls -->
        <div class="mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
          <ApplicationActionbuton
            :status="application.status"
            :progress="application.progress"
            @action="(val) => application && actionButton(val, application.progress)"
          />

          <p
            v-if="application.status === 'accepted'"
            class="flex items-center gap-1.5 text-sm font-medium text-success"
          >
            <CheckCircle2 class="h-4 w-4" />
            This applicant has been accepted.
          </p>
        </div>
      </div>

      <StudentInfo v-if="application.student" :student="application.student" />

      <InternshipInfo
        v-if="applicationInternship(application.internshipId)"
        :internship="applicationInternship(application.internshipId)!"
      />
    </template>
  </div>
</template>
