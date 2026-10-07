<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { CheckCircle2, FileText, Upload } from '@lucide/vue'
import { studentApplied } from '@/data/applications'
import { mockStudent } from '@/data/student'
import InternshipDetailBase from '@/shared/components/InternshipDetailBase.vue'
import { useInternshipDetail } from '@/shared/composables/useInternshipDetail'
import ConfirmDialog from '@/shared/components/ConfirmDialog.vue'

const router = useRouter()
const { internship, company } = useInternshipDetail()
const student = mockStudent

const alreadyApplied = computed(() => {
  if (!internship) return null

  console.log(internship.id)

  return studentApplied(internship.id, student.id)
})

const applyOpen = ref(false)
const selectedResume = ref('john doe')

const onResumeChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) selectedResume.value = file.name
}

const submitApplication = () => {
  applyOpen.value = false
  router.push({ name: 'studentInternship' })
}
</script>

<template>
  <InternshipDetailBase :internship="internship" :company="company">
    <template #applyButton>
      <div>
        <span
          v-if="alreadyApplied"
          class="badge-success inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium"
        >
          <CheckCircle2 class="h-4 w-4" />
          Already applied
        </span>
        <button
          v-else
          type="button"
          class="rounded-xl gradient-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          @click="applyOpen = true"
        >
          Apply now
        </button>
      </div>
    </template>

    <template #confirmDialog>
      <ConfirmDialog
        v-if="applyOpen"
        title="Apply to this internship"
        :description="`Submitting as ${student.name.first_name} ${student.name.last_name}. Confirm the resume you'd like to attach.`"
        confirm-label="Submit application"
        @confirm="submitApplication"
        @cancel="applyOpen = false"
      >
        <label
          class="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border px-3.5 py-3 text-sm text-foreground hover:bg-secondary"
        >
          <FileText v-if="selectedResume" class="h-4 w-4 text-muted-foreground" />
          <Upload v-else class="h-4 w-4 text-muted-foreground" />
          <span class="truncate">{{ selectedResume || 'Attach a resume (PDF or DOC)' }}</span>
          <input type="file" accept=".pdf,.doc,.docx" class="hidden" @change="onResumeChange" />
        </label>
      </ConfirmDialog>
    </template>
  </InternshipDetailBase>
</template>
