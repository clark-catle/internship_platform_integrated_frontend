<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Bell, Briefcase, ClipboardList, Trash2 } from '@lucide/vue'
import { formatDate, timeAgo } from '@/utils/format'
import { useCompanyDashboard } from '../composables/useCompanyDashboard'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { applicationInternship } from '@/data/applications'
import SectionCardBase from '@/shared/components/SectionCardBase.vue'
import ApplicationStatusBadge from '@/shared/components/ApplicationStatusBadge.vue'

const {
  company,
  statCards,
  needsAttention,
  recentPostings,
  removeNotification,
  recentNotifications,
} = useCompanyDashboard()
</script>

<template>
  <div class="space-y-6 main-wrapper">
    <div>
      <h2 class="text-lg font-semibold text-foreground">
        Welcome back, {{ company.company_name }}
      </h2>
      <p class="text-sm text-muted-foreground">
        Here's what's happening across your internship postings.
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
      <SectionCardBase
        title="Needs your attention"
        description="Pending reviews and applicants ready for a decision."
        class="lg:col-span-2"
      >
        <template #actions>
          <RouterLink
            :to="{ name: 'companyApplication' }"
            class="text-sm font-medium text-primary hover:underline"
          >
            View all
          </RouterLink>
        </template>

        <EmptyStateBase
          v-if="needsAttention.length === 0"
          :icon="ClipboardList"
          title="Nothing needs attention right now"
        />

        <div v-else class="space-y-3">
          <RouterLink
            v-for="app in needsAttention"
            :key="app.id"
            :to="{ name: 'companyApplicationDetail', params: { id: app.id } }"
            class="card-hover flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
          >
            <div class="flex items-center gap-3 min-w-0">
              <img
                :src="app.student?.name.first_name"
                :alt="app.student?.name.first_name"
                class="h-9 w-9 shrink-0 rounded-full object-cover"
              />
              <div class="min-w-0">
                <p class="truncate text-sm font-medium text-card-foreground">
                  {{ app.student?.name.first_name }} {{ app.student?.name.last_name }}
                </p>
                <p class="truncate text-xs text-muted-foreground">
                  {{ applicationInternship(app.internshipId)?.title }} · Applied
                  {{ formatDate(app.applied_at) }}
                </p>
              </div>
            </div>
            <ApplicationStatusBadge :status="app.status" />
          </RouterLink>
        </div>
      </SectionCardBase>

      <SectionCardBase title="Recent postings">
        <template #actions>
          <RouterLink
            :to="{ name: 'companyInternship' }"
            class="text-sm font-medium text-primary hover:underline"
          >
            Manage
          </RouterLink>
        </template>
        <EmptyStateBase
          v-if="recentPostings.length === 0"
          :icon="Briefcase"
          title="No active postings"
        />
        <div v-else class="space-y-3">
          <div
            v-for="i in recentPostings"
            :key="i.id"
            class="rounded-xl border border-border px-4 py-3"
          >
            <p class="truncate text-sm font-medium text-card-foreground">{{ i.title }}</p>
            <p class="mt-0.5 text-xs text-muted-foreground">
              {{ i.location.city }}, {{ i.location.region }}
            </p>
          </div>
        </div>
      </SectionCardBase>
    </div>

    <SectionCardBase title="Recent notifications">
      <template #actions>
        <RouterLink
          :to="{ name: 'companyNotification' }"
          class="text-sm font-medium text-primary hover:underline"
        >
          View all
        </RouterLink>
      </template>

      <EmptyStateBase
        v-if="recentNotifications.length === 0"
        :icon="Bell"
        title="No notifications yet"
      />
      <div v-else class="space-y-2">
        <div
          v-for="n in recentNotifications"
          :key="n.id"
          class="flex items-start gap-3 rounded-xl border border-border px-4 py-3"
        >
          <span
            class="mt-1.5 h-2 w-2 shrink-0 rounded-full"
            :class="n.read_at === null ? 'bg-primary' : 'bg-transparent'"
          />
          <span class="min-w-0 flex-1">
            <span class="block text-sm font-medium text-card-foreground">{{ n.data.title }}</span>
            <span class="mt-0.5 block text-sm text-muted-foreground">{{ n.data.message }}</span>
            <span class="mt-1 block text-xs text-muted-foreground">{{
              timeAgo(n.created_at)
            }}</span>
          </span>
          <Trash2
            class="h-4 w-4 shrink-0 cursor-pointer text-muted-foreground transition-colors hover:text-destructive"
            @click="removeNotification(n.id)"
          />
        </div>
      </div>
    </SectionCardBase>
  </div>
</template>
