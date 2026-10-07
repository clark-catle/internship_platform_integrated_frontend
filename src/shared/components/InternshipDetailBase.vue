<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { ArrowLeft, BadgeCheck, Clock, MapPin, Wallet } from '@lucide/vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import SkillChip from '@/shared/components/SkillChip.vue'
import { useTheme } from '@/shared/stores/useTheme'
import { roleFromUrl } from '@/utils/roleFromUrl'
import type { internship as internshipType, company as companyType } from '../types'

defineProps<{
  internship: internshipType | undefined
  company: companyType | undefined
}>()

const router = useRouter()

const { isDark } = useTheme()

const role = roleFromUrl()

const viewCompanyName =
  role === 'admin' ? 'adminManageCompanyDetail' : role === 'student' ? 'studentCompanyDetail' : ''
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6">
    <div
      @click="router.back()"
      class="cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft class="h-4 w-4" />
      Back
    </div>

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
                :to="{ name: viewCompanyName, params: { id: company.id } }"
                class="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {{ company?.company_name }}
                <BadgeCheck v-if="company?.is_verified" class="h-3.5 w-3.5" />
              </RouterLink>
            </div>
          </div>

          <slot name="applyButton" />
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
          :to="{ name: viewCompanyName, params: { id: company.id } }"
          class="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          View company profile →
        </RouterLink>
      </div>
    </template>

    <slot name="confirmDialog" />
  </div>
</template>
