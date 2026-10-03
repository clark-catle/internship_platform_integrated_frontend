<script setup lang="ts">
import { ClipboardList } from '@lucide/vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import ApplicationStatusBadge from '@/modules/student/application/components/ApplicationStatusBadge.vue'
import { formatDate } from '@/utils/format'
import type { applicationStatusTab } from '@/shared/types'
import { useApplication } from '../composable/useApplication'
import { applicationInternship } from '@/data/applications'

const { applications, activeTab } = useApplication()

const filters: { value: applicationStatusTab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'in review', label: 'In review' },
  { value: 'accepted', label: 'Accepted' },
  { value: 'rejected', label: 'Rejected' },
]

this should be admin specific compoment
</script>

<template>
  <div class="space-y-6 max-w-5xl mx-auto">
    <div class="flex gap-1 overflow-x-auto rounded-xl bg-secondary p-1 w-fit">
      <button
        v-for="f in filters"
        :key="f.value"
        type="button"
        class="whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors"
        :class="
          activeTab === f.value
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        "
        @click="activeTab = f.value"
      >
        {{ f.label }}
      </button>
    </div>

    <EmptyStateBase
      v-if="applications.length === 0"
      :icon="ClipboardList"
      title="No applications found"
      description="Applications to your internships will show up here."
    />

    <div v-else class="space-y-3">
      <RouterLink
        v-for="app in applications"
        :key="app.id"
        :to="{ name: 'companyApplicationDetail', params: { id: app.id } }"
        class="card-hover flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center gap-3">
          <img
            :alt="app.student?.name.first_name"
            class="h-11 w-11 shrink-0 rounded-full object-cover"
          />
          <div class="min-w-0">
            <h3 class="truncate text-sm font-semibold text-card-foreground">
              {{ app.student?.name.first_name }} {{ app.student?.name.last_name }}
            </h3>
            <p class="truncate text-xs text-muted-foreground">
              {{ applicationInternship(app.internshipId)?.title }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1.5">
          <ApplicationStatusBadge :status="app.status" />
          <span class="text-xs capitalize text-muted-foreground">
            {{ app.progress }} · {{ formatDate(app.applied_at) }}
          </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
