import { computed, reactive, ref, watch } from 'vue'
import type { filtersType, filterTypeKey } from '../type'
import { mockStudentInternships } from '@/data/internship'

export const useInternship = () => {
  const mockData = mockStudentInternships // source of the mock
  const internships = ref(mockData) // result of the filter or search
  const loading = ref(false)
  const searchQuery = ref('')
  const filter = reactive<filtersType>({ setup: 'all', allowance: 'all' })

  return {
    internships,
    loading,
    searchQuery,
    filter,
  }
}
