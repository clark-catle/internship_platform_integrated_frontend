import { computed, reactive, ref } from 'vue'
import type { filtersType, filterTypeKey } from '../type'

export const useSearch = () => {
  const searchQuery = ref('')
  const filter = reactive<filtersType>({ setup: 'all', allowance: 'all' })

  const search = () => {
    console.log(searchQuery)
  }

  const addFilter = <K extends filterTypeKey>(key: K, val: filtersType[K]) => (filter[key] = val)

  const clearFilter = () => {
    filter.setup = 'all'
    filter.allowance = 'all'
  }

  const countFilter = computed(() => Object.values(filter).filter((v) => v !== 'all').length)

  return {
    searchQuery,
    search,
    filter,
    addFilter,
    clearFilter,
    countFilter,
  }
}
