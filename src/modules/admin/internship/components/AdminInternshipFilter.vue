<script setup lang="ts">
import { Search } from '@lucide/vue'
import type { internshipSetup } from '@/shared/types/index.ts'

const search = defineModel<string>('search', { required: true })

const filterSetup = defineModel<internshipSetup | 'all'>('filterModel', { required: true })

defineEmits<{
  addFilterSetup: [internshipSetup | 'all']
}>()

const setupOption = ['all', 'remote', 'on site', 'hybrid'] as const
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
        v-for="setup in setupOption"
        :key="setup"
        type="button"
        class="rounded-lg px-3.5 py-1.5 text-xs font-medium capitalize transition-colors"
        :class="
          filterSetup === setup
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        "
        @click="filterSetup = setup"
      >
        {{ setup }}
      </button>
    </div>
  </div>
</template>
