<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  Upload,
  Wallet,
} from '@lucide/vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { useInternshipDetail } from '../composables/useInternshipDetail'
import { studentApplied } from '@/data/applications'
import { mockStudent } from '@/data/student'
import SkillChip from '@/shared/components/SkillChip.vue'
import ConfirmDialog from '@/shared/components/ConfirmDialog.vue'
import { useTheme } from '@/shared/stores/useTheme'
import { internshipCompany } from '@/data/internship'

const router = useRouter()
const { internship } = useInternshipDetail(4)
const student = mockStudent

const alreadyApplied = computed(() => studentApplied(internship.id, student.id))

const applyOpen = ref(false)
const selectedResume = ref('clark')

const onResumeChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) selectedResume.value = file.name
}

const submitApplication = () => {
  applyOpen.value = false
  router.push({ name: 'studentInternship' })
}

const company = internshipCompany(internship.companyId)

const { isDark } = useTheme()
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6">
    <RouterLink
      :to="{ name: 'studentInternship' }"
      class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft class="h-4 w-4" />
      Back to internships
    </RouterLink>

    <EmptyStateBase
      v-if="!internship"
      :icon="MapPin"
      title="Internship not found"
      description="Internship was expired, deleted, or taken down by the company who posted it"
    />

    <template v-else>
      <div class="rounded-2xl border border-border bg-card p-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="flex items-start gap-3">
            <div
              class="h-12 w-12 shrink-0 rounded-full object-cover"
              :class="[isDark ? 'bg-white' : 'bg-black']"
            />
            <div>
              <h1 class="text-xl font-semibold text-card-foreground">{{ internship.title }}</h1>

              <RouterLink
                v-if="company"
                :to="{ name: 'studentCompanyDetail', params: { id: company.id } }"
                class="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {{ company?.company_name }}
                <BadgeCheck v-if="company?.is_verified" class="h-3.5 w-3.5" />
              </RouterLink>
            </div>
          </div>

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
        </div>

        <div class="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span class="flex items-center gap-1.5"
            ><MapPin class="h-4 w-4" /> {{ internship.location.city }},
            {{ internship.location.region }}</span
          >
          <span class="badge-primary rounded-full px-2.5 py-1 text-xs font-medium capitalize">
            {{ internship.setup }}
          </span>
          <span class="flex items-center gap-1.5">
            <Clock class="h-4 w-4" />
            {{ internship.duration + ' ' + internship.duration_unit }}
          </span>
          <span class="flex items-center gap-1.5">
            <Wallet class="h-4 w-4" /> {{ internship.allowance }}
          </span>
        </div>

        <div class="mt-5 flex flex-wrap gap-2">
          <SkillChip v-for="s in internship.internship_skill" :key="s.id">
            {{ s.name }}
          </SkillChip>
        </div>
      </div>

      <div class="rounded-2xl border border-border bg-card p-6">
        <h2 class="mb-2 text-base font-semibold text-card-foreground">Description</h2>
        <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {{ internship.description }}
        </p>
      </div>

      <div class="rounded-2xl border border-border bg-card p-6">
        <h2 class="mb-2 text-base font-semibold text-card-foreground">Requirements</h2>
        <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {{ internship.requirements }}
        </p>
      </div>

      <div v-if="company" class="rounded-2xl border border-border bg-card p-6">
        <h2 class="mb-3 text-base font-semibold text-card-foreground">
          About {{ company.company_name }}
        </h2>
        <p class="text-sm leading-relaxed text-muted-foreground">
          {{ company.description }}
        </p>

        <RouterLink
          :to="{ name: 'studentCompanyDetail', params: { id: company.id } }"
          class="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          View company profile →
        </RouterLink>
      </div>
    </template>

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
  </div>
</template>
