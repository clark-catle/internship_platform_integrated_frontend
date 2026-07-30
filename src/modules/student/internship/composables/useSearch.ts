import { computed, reactive, ref } from 'vue'
import type { filtersType } from '../type'

export const useSearch = () => {
  const searchQuery = ref('')
  const showFilter = ref(false)
  const filter = reactive<filtersType>({ setup: 'all', allowance: 'all', duration: 'all' })

  const countFilter = computed(() => Object.values(filter).filter((v) => v !== 'all').length)

  return { searchQuery, showFilter, filter, countFilter }
}
