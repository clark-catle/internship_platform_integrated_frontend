import { computed, reactive, ref } from 'vue'
import type { filtersType, filterTypeKey } from '../type'
import { mockInternships } from '@/data/internship'
import type { internship } from '@/shared/types'

export const useSearch = () => {
  const mockData = mockInternships // source of the mock
  const internship = ref(mockData) // result of the filter or search
  const searchQuery = ref('')
  const filter = reactive<filtersType>({ setup: 'all', allowance: 'all' })

  /**
   * filter the internship by its description, requirements, title, and title skill
   * then filtert the internship list if the filter.setup and filter.allowance isnt all value
   */
  const search = () => {
    internship.value = mockData.filter(
      (v) =>
        v.description.toLowerCase().includes(searchQuery.value) ||
        v.requirements.toLowerCase().includes(searchQuery.value) ||
        v.title.toLowerCase().includes(searchQuery.value) ||
        (v.internship_skill.length > 0 &&
          v.internship_skill.some((skill) => skill.name.includes(searchQuery.value))),
    )

    if (filter.allowance === 'all' || filter.setup === 'all') return

    filterInternship()
  }

  /**
   * adding the filter then filtering the internship list
   * @param key
   * @param val
   * @returns
   */
  const addFilter = <K extends filterTypeKey>(key: K, val: filtersType[K]) => {
    filter[key] = val

    if (val === 'all') return

    filterInternship()
  }

  /**
   * filter the internship value
   * @returns
   */
  const filterInternship = () =>
    (internship.value = internship.value.filter(
      (v) =>
        filter.allowance === 'all' ||
        filter.setup === 'all' ||
        v.setup === filter.setup ||
        v.allowance === filter.allowance,
    ))

  /**
   * clears the filter by making the filte.setup and filter.allowance value intno all
   * and retaining the default value of internship list by inserting the mock data in internship
   */
  const clearFilter = () => {
    filter.setup = 'all'
    filter.allowance = 'all'

    internship.value = mockData
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
