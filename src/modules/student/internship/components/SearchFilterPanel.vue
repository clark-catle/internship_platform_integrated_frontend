<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import { Search, SlidersHorizontal, X } from '@lucide/vue'
import { useSearch } from '../composables/useSearch'
import { AnimatePresence, Motion } from 'motion-v'
import FilterGroup from './FilterGroup.vue'
import type { internshipAllowance, internshipSetup } from '@/shared/types/index.ts'

const {
  searchQuery,
  search,
  showFilter,
  toggleShowFilter,
  filter,
  addFilter,
  countFilter,
  clearFilter,
} = useSearch()

const allowance: (internshipAllowance | 'all')[] = ['all', 'non', 'provided', 'discuss']
const setup: (internshipSetup | 'all')[] = ['all', 'remote', 'on site', 'hybrid']
</script>

<template>
  <div class="bg-card rounded-2xl border border-border p-4 shadow-card">
    <div class="flex gap-2">
      <div class="relative flex-1">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

        <InputBase
          placeholder="Search internships, companies, skills..."
          class="pl-10 rounded-xl border-border bg-background"
          v-model="searchQuery"
          @keydown="search"
        />
      </div>

      <div v-if="showFilter" class="absolute inset-0 z-10" @click="toggleShowFilter" />

      <div class="relative z-20">
        <ButtonBase variant="outline" class="rounded-xl gap-2 relative" @click="toggleShowFilter">
          <SlidersHorizontal class="w-4 h-4" />
          <span class="hidden sm:inline">Filters</span>

          <span
            v-if="countFilter !== 0"
            class="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-white text-[10px] flex items-center justify-center"
          >
            {{ countFilter }}
          </span>
        </ButtonBase>

        <AnimatePresence>
          <Motion
            as="div"
            v-if="showFilter"
            :initial="{ opacity: 0, height: 0 }"
            :animate="{ opacity: 1, height: 'auto' }"
            :exit="{ opacity: 0, height: 0 }"
            class="absolute right-0"
          >
            <div class="mt-2 space-y-4 bg-card rounded-2xl border p-4 shadow-card w-min">
              <FilterGroup
                label="allowance"
                :options="allowance"
                :value="filter.allowance"
                @select="addFilter"
              />

              <FilterGroup
                label="setup"
                :options="setup"
                :value="filter.setup"
                @select="addFilter"
              />

              <button
                v-if="countFilter"
                @click="clearFilter"
                class="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <X class="w-3 h-3" /> Clear all filters
              </button>
            </div>
          </Motion>
        </AnimatePresence>
      </div>

      <ButtonBase onClick="{handleSearch}" class="gradient-primary text-white border-0 rounded-xl">
        Search
      </ButtonBase>
    </div>
  </div>
</template>
