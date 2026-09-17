import { computed, reactive, ref } from 'vue'
import type { filtersType } from '../type'

export const useSearch = () => {
  const searchQuery = ref('')
  const showFilter = ref(false)
  const filter = reactive<filtersType>({ setup: 'all', allowance: 'all' })

  const search = () => {
    console.log(searchQuery)
  }

  const addFilter = <K extends keyof filtersType>(filterKey: K, val: filtersType[K]) => {
    filter[filterKey] = val
  }

  const countFilter = computed(() => Object.values(filter).filter((v) => v !== 'all').length)

  const clearFilter = () => {
    filter.setup = 'all'
    filter.allowance = 'all'
  }

  const toggleShowFilter = () => (showFilter.value = !showFilter.value)

  return {
    searchQuery,
    search,
    showFilter,
    toggleShowFilter,
    filter,
    addFilter,
    countFilter,
    clearFilter,
  }
}
