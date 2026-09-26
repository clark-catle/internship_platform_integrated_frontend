<script setup lang="ts">
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { useApplication } from '../composables/useApplications'
import type { applicationStatusTab } from '../type'
import { Building2, Calendar, FileText } from '@lucide/vue'
import { AnimatePresence, Motion } from 'motion-v'
import { formatDistanceToNow } from 'date-fns'
import ApplicationProgressBadge from '../components/ApplicationProgressBadge.vue'
import { applicationInternship } from '@/data/applications.ts'
import { internshipCompany } from '@/data/internship.ts'

const { applications, filteredApplication, loading, activeTab, changeTab } = useApplication()

const count = (val: applicationStatusTab) =>
  val === 'all'
    ? applications.value.length
    : applications.value.filter((app) => app.status === val).length

const tabs: applicationStatusTab[] = ['all', 'pending', 'in review', 'accepted', 'rejected']

const internship = (id: number | undefined) => applicationInternship(id)

const company = (id: number | undefined) => internshipCompany(internship(id)?.companyId)
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="font-poppins font-bold text-2xl sm:text-3xl text-foreground">My Applications</h1>
      <p class="text-muted-foreground mt-1">Track the status of all your internship applications</p>
    </div>

    <div class="flex gap-2 mb-6 flex-wrap">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize"
        :class="[
          activeTab === tab
            ? 'gradient-primary text-white shadow-sm'
            : 'bg-card ring ring-border text-muted-foreground hover:text-foreground',
        ]"
        @click="changeTab(tab)"
      >
        {{ tab }}
        {{ count(tab) }}
      </button>
    </div>

    <div class="grid grid-cols-1">
      <div class="space-y-4" v-if="loading">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-card rounded-2xl border border-border p-5 animate-pulse"
        >
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-xl skeleton" />
            <div class="flex-1 space-y-2">
              <div class="h-4 skeleton rounded w-1/2" />
              <div class="h-3 skeleton rounded w-1/3" />
            </div>
          </div>
        </div>
      </div>

      <EmptyStateBase
        v-else-if="applications.length === 0"
        :icon="FileText"
        title="No applications yet"
        description="Start applying to internships and track your progress here."
      />

      <div v-else class="space-y-4">
        <AnimatePresence>
          <Motion
            as="div"
            v-for="(application, i) in filteredApplication"
            :key="application.id"
            :initial="{ opacity: 0, y: 15 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: i * 0.04 }"
            class="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          >
            <RouterLink
              class="flex items-center gap-4 p-5 cursor-pointer hover:bg-muted/30 transition-colors"
              :to="{ name: 'studentApplicationDetail', params: { id: application.id } }"
            >
              <div
                class="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0"
              >
                {{ company(application.internshipId)?.company_name[0]?.toUpperCase() }}
              </div>

              <div class="flex-1 min-w-0">
                <p class="font-semibold text-foreground truncate">
                  {{ internship(application.internshipId)?.title }}
                </p>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="text-xs text-muted-foreground flex items-center gap-1">
                    <Building2 class="w-3 h-3" />
                    {{ company(application.internshipId)?.company_name }}
                  </span>

                  <span class="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar class="w-3 h-3" />
                    {{ formatDistanceToNow(new Date(application.applied_at), { addSuffix: true }) }}
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <ApplicationProgressBadge
                  :progress="application.progress"
                  :status="application.status"
                />
              </div>
            </RouterLink>
          </Motion>
        </AnimatePresence>
      </div>
    </div>
  </div>
</template>
