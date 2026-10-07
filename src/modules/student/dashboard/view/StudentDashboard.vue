<script setup lang="ts">
import { Bell, Briefcase, FileText } from '@lucide/vue'
import { formatDate, timeAgo } from '@/utils/format'
import { useStudentDashboard } from '../composables/useStudentDashboard'
import SectionCardBase from '@/shared/components/SectionCardBase.vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { applicationInternship } from '@/data/applications'
import { internshipCompany } from '@/data/internship'
import ApplicationStatusBadge from '@/shared/components/ApplicationStatusBadge.vue'

const { student, statCards, recentApplications, recentNotifications, markAsRead, completeness } =
  useStudentDashboard()
</script>

<template>
  <div class="space-y-6 main-wrapper">
    <div>
      <h2 class="text-lg font-semibold text-foreground">
        Welcome back, {{ student.name.first_name + ' ' + student.name.last_name }}
      </h2>
      <p class="text-sm text-muted-foreground">
        Here's what's happening with your internship search.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div
        v-for="card in statCards"
        :key="card.label"
        class="rounded-2xl border border-border bg-card p-5"
      >
        <div class="flex items-center justify-between">
          <span class="text-2xl font-semibold text-card-foreground">{{ card.value }}</span>
          <span class="flex h-9 w-9 items-center justify-center rounded-full" :class="card.tone">
            <component :is="card.icon" class="h-4.5 w-4.5" />
          </span>
        </div>
        <p class="mt-1 text-sm text-muted-foreground">{{ card.label }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <SectionCardBase title="Recent applications" class="lg:col-span-2">
        <EmptyStateBase
          v-if="recentApplications.length === 0"
          :icon="Briefcase"
          title="No applications yet"
          description="Once you apply to internships, they'll show up here."
        />
        <div v-else class="space-y-3">
          <div
            v-for="app in recentApplications"
            :key="app.id"
            class="flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
          >
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-card-foreground">
                {{ applicationInternship(app.internshipId)?.title }}
              </p>
              <p class="truncate text-xs text-muted-foreground">
                {{
                  internshipCompany(applicationInternship(app.internshipId)?.companyId)
                    ?.company_name
                }}
                · Applied
                {{ formatDate(app.applied_at) }}
              </p>
            </div>
            <ApplicationStatusBadge :status="app.status" />
          </div>
        </div>
      </SectionCardBase>

      <SectionCardBase title="Profile completeness">
        <div class="mb-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            class="h-full gradient-primary transition-all"
            :style="{ width: completeness.percent + '%' }"
          />
        </div>
        <p class="text-sm text-muted-foreground">
          {{ completeness.done }} of {{ completeness.total }} sections complete ({{
            completeness.percent
          }}%)
        </p>
        <div
          class="mt-4 flex items-center gap-2 rounded-xl border border-border px-3.5 py-2.5 text-sm text-card-foreground"
        >
          <FileText class="h-4 w-4 text-muted-foreground" />
          No resume uploaded yet
        </div>
      </SectionCardBase>
    </div>

    <!-- Recent notifications -->
    <SectionCardBase title="Recent notifications">
      <EmptyStateBase
        v-if="recentNotifications.length === 0"
        :icon="Bell"
        title="No notifications yet"
      />
      <div v-else class="space-y-2">
        <button
          v-for="n in recentNotifications"
          :key="n.id"
          type="button"
          class="flex w-full items-start gap-3 rounded-xl border border-border px-4 py-3 text-left transition-colors hover:bg-secondary"
          @click="markAsRead(n.id)"
        >
          <span
            class="mt-1.5 h-2 w-2 shrink-0 rounded-full"
            :class="n.read_at === null ? 'bg-primary' : 'bg-transparent'"
          />
          <span class="min-w-0 flex-1">
            <span class="block text-sm font-medium text-card-foreground">{{ n.data.title }}</span>
            <span class="mt-0.5 block text-sm text-muted-foreground">{{ n.data.message }}</span>
            <span class="mt-1 block text-xs text-muted-foreground">
              {{ timeAgo(n.created_at) }}
            </span>
          </span>
        </button>
      </div>
    </SectionCardBase>
  </div>
</template>
