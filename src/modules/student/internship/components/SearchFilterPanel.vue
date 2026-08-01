<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import { Search, SlidersHorizontal, X } from '@lucide/vue'
import { useSearch } from '../composables/useSearch'
import { AnimatePresence, Motion } from 'motion-v'
import FilterGroup from './FilterGroup.vue'
import type {
  internshipAllowance,
  internshipDurationUnit,
  internshipSetup,
} from '@/shared/types/index.ts'

const { searchQuery, search, showFilter, filter, countFilter, clearFilter } = useSearch()

const allowance: (internshipAllowance | 'all')[] = ['all', 'non', 'provided', 'discuss']
const setup: (internshipSetup | 'all')[] = ['all', 'remote', 'on site', 'hybrid']
const durationUnit: (internshipDurationUnit | 'all')[] = ['all', 'day', 'hr', 'month']

const allowanceFilter = (val: internshipAllowance | 'all') => (filter.allowance = val)
const setupFilter = (val: internshipSetup | 'all') => (filter.setup = val)
const durationUnitFilter = (val: internshipDurationUnit | 'all') => {
  val === 'all'  ? filter.duration = val : filter.duration.
}
</script>

<template>
  <div className="bg-card rounded-2xl border border-border p-4 shadow-card">
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
        />

        <InputBase
          placeholder="Search internships, companies, skills..."
          className="pl-10 rounded-xl border-border bg-background"
          v-model="searchQuery"
          @keydown="search"
        />
      </div>

      <ButtonBase variant="outline" className="rounded-xl gap-2 relative">
        <SlidersHorizontal className="w-4 h-4" />
        <span className="hidden sm:inline">Filters</span>

        <span
          v-if="countFilter !== 0"
          className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-white text-[10px] flex items-center justify-center"
        >
          {{ countFilter }}
        </span>
      </ButtonBase>

      <ButtonBase
        onClick="{handleSearch}"
        className="gradient-primary text-white border-0 rounded-xl"
      >
        Search
      </ButtonBase>
    </div>

    <AnimatePresence>
      <Motion
        v-if="showFilter"
        :initial="{ opacity: 0, height: 0 }"
        :animate="{ opacity: 1, height: 'auto' }"
        :exit="{ opacity: 0, height: 0 }"
        className="overflow-hidden"
      >
        <div className="pt-4 mt-4 border-t border-border space-y-4">
          <FilterGroup
            label="Allowance"
            :options="allowance"
            :value="filter.allowance"
            @select="allowanceFilter"
          />
          <FilterGroup label="Setup" :options="setup" :value="filter.setup" @select="setupFilter" />

          <FilterGroup
            label="Duration Unit"
            :options="durationUnit"
            :value="filter.duration === 'all' ? filter.duration : filter.duration.durationUnit"
            @select="setupFilter"
          />

          <button
            v-if="countFilter"
            @click="clearFilter"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="w-3 h-3" /> Clear all filters
          </button>
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>
