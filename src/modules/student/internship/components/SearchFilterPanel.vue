<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue';
import InputBase from '@/shared/components/InputBase.vue';
import { Search, SlidersHorizontal } from '@lucide/vue';
import { useSearch } from '../composables/useSearch';
import { AnimatePresence, Motion } from 'motion-v';
import FilterGroup from './FilterGroup.vue';
import type { internshipAllowance, internshipSetup } from '@/shared/types/index.ts';

const { searchQuery, showFilter, filter, countFilter } = useSearch();
 
const types: internshipAllowance = ["All", "Remote", "On-site", "Hybrid"];
const setup: internshipSetup = ["All", "1-2 months", "3-4 months", "5-6 months", "6+ months"];

</script>

<template><div className="bg-card rounded-2xl border border-border p-4 shadow-card"> 
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          
          <InputBase
            placeholder="Search internships, companies, skills..."
            className="pl-10 rounded-xl border-border bg-background"
          />
        </div>
        
        <ButtonBase variant="outline" className="rounded-xl gap-2 relative">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filters</span>

          <span v-if="countFilter !== 0" className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-white text-[10px] flex items-center justify-center">
              {{countFilter}}
            </span>
        </ButtonBase>

        <ButtonBase onClick={handleSearch} className="gradient-primary text-white border-0 rounded-xl">
          Search
        </ButtonBase>
      </div>
 
      <AnimatePresence>
        <Motion v-if="showFilter"
            :initial="{opacity: 0, height: 0}"
            :animate="{opacity: 1, height: 'auto'}"
            :exit="{opacity: 0, height: 0}"
            className="overflow-hidden">
            <div className="pt-4 mt-4 border-t border-border space-y-4">
              <FilterGroup label="Domain" options={domains} value={filters.domain} onChange={(v) => updateFilter("domain", v)} />
              <FilterGroup label="Type" options={types} value={filters.type} onChange={(v) => updateFilter("type", v)} />
              <FilterGroup label="Duration" options={durations} value={filters.duration} onChange={(v) => updateFilter("duration", v)} />

              {hasActiveFilters && (
                <button onClick={clearFilters} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <X className="w-3 h-3" /> Clear all filters
                </button>
              )}
            </div>
          </Motion>
      </AnimatePresence>
    </div></template>