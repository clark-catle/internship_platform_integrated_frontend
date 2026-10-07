<script setup lang="ts">
import { CheckCircle2 } from '@lucide/vue'
import { useApplicationDetail } from '../composable/useApplicationDetail.ts'
import type { actionbutton, applicationProgress } from '@/shared/types/index.ts'
import ApplicationDetailBase from '@/shared/components/ApplicationDetailBase.vue'
import ApplicationActionbuton from '../components/ApplicationActionbuton.vue'

const { application } = useApplicationDetail()

const action = (action: actionbutton, progress: applicationProgress) => {
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

  console.log(application.value?.status)
}
</script>

<template>
  <ApplicationDetailBase v-model:application="application">
    <template #actionButton v-if="application">
      <div class="mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
        <ApplicationActionbuton
          v-if="application.status !== 'accepted'"
          :status="application.status"
          :progress="application.progress"
          @action="(val) => application && action(val, application.progress)"
        />

        <p
          v-if="application.status === 'accepted'"
          class="flex items-center gap-1.5 text-sm font-medium text-success"
        >
          <CheckCircle2 class="h-4 w-4" />
          This applicant has been accepted.
        </p>
      </div>
    </template>
  </ApplicationDetailBase>
</template>
