import { ref, watch } from 'vue'
import type { filtersType } from '../type'
import { mockStudentInternships } from '@/data/internship'
import type { internshipSetup } from '@/shared/types'

export const useInternship = () => {
  const mockData = mockStudentInternships
  const internships = ref(mockData)
  const search = ref('')
  const filterSetup = ref<internshipSetup | 'all'>('all')

  watch([search, filterSetup], () => {
    internships.value = mockData.filter((val) => {
      const s = search.value.toLowerCase()

      const searching =
        s === '' ||
        val.title.toLowerCase().includes(s) ||
        val.requirements.toLowerCase().includes(s) ||
        val.description.toLowerCase().includes(s) ||
        val.location.city.toLowerCase().includes(s) ||
        val.location.region.toLowerCase().includes(s) ||
        val.internship_skill.some((is) => is.name.toLowerCase().includes(s))

      const filtering = filterSetup.value === 'all' || val.setup === filterSetup.value

      return searching && filtering
    })
  })

  return {
    internships,
    search,
    filterSetup,
  }
}
