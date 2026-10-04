<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowLeft, BadgeCheck, BadgeX, Globe, MapPin } from '@lucide/vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { roleFromUrl } from '@/utils/roleFromUrl'
import type { company as CompanyType, internship as InternshipType } from '../types'

defineProps<{
  company: CompanyType | undefined
  internship: InternshipType[] | undefined
}>()

defineEmits<{
  toggleVerify: []
}>()

const role = roleFromUrl()

const backCompanyPage =
  role === 'admin' ? 'adminManageCompany' : role === 'student' ? 'studentCompany' : ''

const internshipPage =
  role === 'admin' ? 'adminInternshipDetail' : role === 'student' ? 'studentInternshipDetail' : ''
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6">
    <RouterLink
      :to="{ name: backCompanyPage }"
      class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft class="h-4 w-4" />
      Back to companies
    </RouterLink>

    <EmptyStateBase
      v-if="!company"
      :icon="MapPin"
      title="Company not found"
      description="The company has been either deleted or not existing!"
    />

    <template v-else>
      <div class="rounded-2xl border border-border bg-card p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
          <img
            :src="company.logo_url"
            :alt="company.company_name"
            class="h-16 w-16 shrink-0 rounded-2xl object-cover"
          />
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <h1 class="text-xl font-semibold text-card-foreground">{{ company.company_name }}</h1>
              <span
                v-if="company.is_verified"
                class="inline-flex items-center gap-1 rounded-full badge-primary px-2.5 py-1 text-xs font-medium"
              >
                <BadgeCheck class="h-3.5 w-3.5" />
                Verified
              </span>
            </div>
            <p class="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin class="h-4 w-4" />
              {{ company.location.city }}, {{ company.location.region }}
            </p>
            <a
              v-if="company.website"
              :href="company.website"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <Globe class="h-4 w-4" />
              {{ company.website }}
            </a>
          </div>

          <button
            type="button"
            class="cursor-pointer inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium border"
            :class="[
              company.is_verified
                ? 'border-success/30 text-success hover:bg-success/10'
                : 'border-destructive/30 text-destructive hover:bg-destructive/10',
            ]"
            @click="$emit('toggleVerify')"
          >
            <BadgeCheck v-if="company.is_verified" class="h-4 w-4" />
            <BadgeX v-else class="h-4 w-4" />

            {{ company.is_verified ? 'Verified' : 'Unverified' }}
          </button>
        </div>
        <p class="mt-5 text-sm leading-relaxed text-card-foreground">{{ company.description }}</p>
      </div>

      <div>
        <h2 class="mb-3 text-base font-semibold text-foreground">Open internships</h2>
        <p v-if="!internship || internship.length === 0" class="text-sm text-muted-foreground">
          This company has no open internships right now.
        </p>
        <div v-else class="space-y-3">
          <RouterLink
            v-for="i in internship"
            :key="i.id"
            :to="{ name: internshipPage, params: { id: i.id } }"
            class="card-hover flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
          >
            <span class="text-sm font-medium text-card-foreground">{{ i.title }}</span>
            <span class="text-xs text-muted-foreground"
              >{{ i.location.city }}, {{ i.location.region }}</span
            >
          </RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>
