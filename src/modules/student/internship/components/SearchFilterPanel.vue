<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import { Search, SlidersHorizontal, X } from '@lucide/vue'
import { AnimatePresence, Motion } from 'motion-v'
import FilterGroup from './FilterGroup.vue'
import type { filtersType, filterTypeKey, searchFilterPanelPropType } from '../type/index.ts'
import { ref } from 'vue'

const { filterCount } = defineProps<searchFilterPanelPropType>()

const emit = defineEmits<{
  (e: 'clearFilter'): void
  (e: 'search'): void
  (e: 'addFilter', key: filterTypeKey, val: filtersType[filterTypeKey]): void
}>()

const searchQueryModel = defineModel<string>('searchQuery', { required: true })

const filter = defineModel<filtersType>('filterModel', { required: true })

const showFilter = ref(false)

const toggleFilter = () => (showFilter.value = !showFilter.value)

const closeAndClearFilter = () => {
  showFilter.value = false

  emit('clearFilter')
}

const allowance: filtersType['allowance'][] = ['all', 'non', 'provided', 'discuss']
const setup: filtersType['setup'][] = ['all', 'remote', 'on site', 'hybrid']
</script>

<template>
  <div class="bg-card rounded-2xl border border-border p-4 shadow-card">
    <div class="flex gap-2">
      <div class="relative flex-1">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

        <InputBase
          placeholder="Search internships, companies, skills..."
          class="pl-10 rounded-xl border-border bg-background"
          v-model="searchQueryModel"
          @keydown="emit('search')"
        />
      </div>

      <div v-if="showFilter" class="absolute inset-0 z-10" @click="toggleFilter" />

      <div class="relative z-20">
        <ButtonBase variant="outline" class="rounded-xl gap-2 relative" @click="toggleFilter">
          <SlidersHorizontal class="w-4 h-4" />
          <span class="hidden sm:inline">Filters</span>

          <span
            v-if="filterCount !== 0"
            class="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-white text-[10px] flex items-center justify-center"
          >
            {{ filterCount }}
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
                @select="(...args) => emit('addFilter', ...args)"
              />

              <FilterGroup
                label="setup"
                :options="setup"
                :value="filter.setup"
                @select="(...args) => emit('addFilter', ...args)"
              />

              <button
                v-if="filterCount"
                @click="closeAndClearFilter"
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
