<script setup lang="ts">
import { Users } from '@lucide/vue'
import { useManageUser } from '../composables/useManageUser'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { mockUserAdmin } from '@/data/user'
import ManageUserFilters from '../components/ManageUserFilters.vue'

const { users, search, roleFilter, statusFilter, toggleStatus } = useManageUser()
</script>

<template>
  <div class="space-y-6 main-wrapper">
    <ManageUserFilters
      v-model:search="search"
      :role-filter="roleFilter"
      :status-filter="statusFilter"
      @filter-role="(e) => (roleFilter = e)"
      @filter-status="(e) => (statusFilter = e)"
    />

    <EmptyStateBase
      v-if="users.length === 0"
      :icon="Users"
      title="No accounts found"
      description="Try a different search or filter."
    />

    <div v-else class="overflow-hidden rounded-2xl border border-border bg-card">
      <table class="w-full text-left text-sm">
        <thead
          class="border-b border-border bg-secondary/40 text-xs uppercase tracking-wide text-muted-foreground"
        >
          <tr>
            <th class="px-5 py-3 font-medium">Email</th>
            <th class="px-5 py-3 font-medium">Role</th>
            <th class="px-5 py-3 font-medium">Status</th>
            <th class="px-5 py-3 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in users" :key="u.email" class="border-b border-border last:border-0">
            <td class="px-5 py-3.5 text-card-foreground">
              {{ u.email }}
              <span v-if="u.id === mockUserAdmin.id" class="ml-1.5 text-xs text-muted-foreground"
                >(you)</span
              >
            </td>
            <td class="px-5 py-3.5 capitalize text-muted-foreground">{{ u.role }}</td>
            <td class="px-5 py-3.5">
              <span
                class="rounded-full px-2.5 py-1 text-xs font-medium capitalize"
                :class="u.status === 'active' ? 'badge-success' : 'badge-danger'"
              >
                {{ u.status }}
              </span>
            </td>
            <td class="px-5 py-3.5 text-right">
              <button
                type="button"
                class="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
                :disabled="u.id === mockUserAdmin.id"
                @click="toggleStatus(u.id)"
              >
                {{ u.status === 'active' ? 'Block' : 'Unblock' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
