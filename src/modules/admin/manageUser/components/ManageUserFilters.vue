<script setup lang="ts">
import type { UserRole, UserStatusWithoutDelete } from '@/shared/types'
import { Search } from '@lucide/vue'

const search = defineModel('search', { required: true })

defineProps<{
  roleFilter: 'all' | UserRole
  statusFilter: 'all' | UserStatusWithoutDelete
}>()

const emit = defineEmits<{
  filterRole: [val: 'all' | UserRole]
  filterStatus: [val: 'all' | UserStatusWithoutDelete]
}>()

const roleOption = ['all', 'student', 'company', 'admin'] as const
const statusOption = ['all', 'active', 'block'] as const
</script>

<template>
  <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
    <div class="relative flex-1 sm:max-w-sm">
      <Search
        class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
      <input
        v-model="search"
        type="text"
        placeholder="Search by email…"
        class="w-full rounded-xl border border-input bg-card py-2.5 pl-10 pr-4 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>

    <div class="flex gap-1 rounded-xl bg-secondary p-1 w-fit">
      <button
        v-for="role in roleOption"
        :key="role"
        type="button"
        class="rounded-lg px-3.5 py-1.5 text-xs font-medium capitalize transition-colors"
        :class="
          roleFilter === role
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        "
        @click="emit('filterRole', role)"
      >
        {{ role }}
      </button>
    </div>

    <div class="flex gap-1 rounded-xl bg-secondary p-1 w-fit">
      <button
        v-for="status in statusOption"
        :key="status"
        type="button"
        class="rounded-lg px-3.5 py-1.5 text-xs font-medium capitalize transition-colors"
        :class="
          statusFilter === status
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        "
        @click="emit('filterStatus', status)"
      >
        {{ status }}
      </button>
    </div>
  </div>
</template>
