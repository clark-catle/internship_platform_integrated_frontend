<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Bell, ClipboardList } from '@lucide/vue'
import { formatDate, timeAgo } from '@/utils/format'
import SectionCardBase from '@/shared/components/SectionCardBase.vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { useAdminDashboard } from '../composables/useAdminDashboard'
import { applicationInternship } from '@/data/applications'
import { internshipCompany } from '@/data/internship'

const { statCards, recentApplications, recentNotifications } = useAdminDashboard()
</script>

<template>
  <div class="space-y-6 main-wrapper">
    <div>
      <h2 class="text-lg font-semibold text-foreground">Platform overview</h2>
      <p class="text-sm text-muted-foreground">A snapshot of activity across InternMatch.</p>
    </div>

    <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
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
      <SectionCardBase
        title="Recent applications"
        description="Platform-wide, most recent first."
        class="lg:col-span-2"
      >
        <template #actions>
          <RouterLink
            :to="{ name: 'adminApplication' }"
            class="text-sm font-medium text-primary hover:underline"
          >
            View all
          </RouterLink>
        </template>
        <EmptyStateBase
          v-if="recentApplications.length === 0"
          :icon="ClipboardList"
          title="No applications yet"
        />
        <div v-else class="space-y-3">
          <RouterLink
            v-for="app in recentApplications"
            :key="app.id"
            :to="{ name: 'adminApplicationDetail', params: { id: app.id } }"
            class="card-hover flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
          >
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-card-foreground">
                {{ app.student?.name.first_name }} {{ app.student?.name.last_name }} →
                {{ applicationInternship(app.internshipId)?.title }}
              </p>
              <p class="truncate text-xs text-muted-foreground">
                {{
                  internshipCompany(applicationInternship(app.internshipId)?.companyId)
                    ?.company_name
                }}
                · {{ formatDate(app.applied_at) }}
              </p>
            </div>
            <StatusBadge :status="app.status" />
          </RouterLink>
        </div>
      </SectionCardBase>

      <SectionCardBase title="Recent notifications">
        <template #actions>
          <RouterLink
            :to="{ name: 'adminNotification' }"
            class="text-sm font-medium text-primary hover:underline"
          >
            View all
          </RouterLink>
        </template>
        <EmptyStateBase
          v-if="recentNotifications.length === 0"
          :icon="Bell"
          title="No notifications"
        />
        <div v-else class="space-y-2">
          <div
            v-for="n in recentNotifications"
            :key="n.id"
            class="rounded-xl border border-border px-4 py-3"
          >
            <p class="text-sm font-medium text-card-foreground">{{ n.data.title }}</p>
            <p class="mt-0.5 text-sm text-muted-foreground">{{ n.data.message }}</p>
            <p class="mt-1 text-xs text-muted-foreground">{{ timeAgo(n.created_at) }}</p>
          </div>
        </div>
      </SectionCardBase>
    </div>
  </div>
</template>
