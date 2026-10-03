import { computed, reactive, ref, watch } from 'vue'
import type { filtersType, filterTypeKey } from '../type'
import { mockStudentInternships } from '@/data/internship'
import type { internship } from '@/shared/types'

export const useInternship = () => {
  const mockData = mockStudentInternships // source of the mock
  const internships = ref(mockData) // result of the filter or search
  const loading = ref(false)
  const searchQuery = ref('')
  const filter = reactive<filtersType>({ setup: 'all', allowance: 'all' })

  /**
   * filter the internship by its description, requirements, title, and title skill
   * then filtert the internship list if the filter.setup and filter.allowance isnt all value
   */
  const search = async () => {
    if (!searchQuery.value) {
      clearFilter()
      return
    }

    loading.value = true

    await searchAndFilter()

    loading.value = false
  }

  /**
   * adding the filter then filtering the internship list
   * @param key
   * @param val
   * @returns
   */
  const addFilter = async <K extends filterTypeKey>(key: K, val: filtersType[K]) => {
    loading.value = true

    filter[key] = val

    await searchAndFilter()

    loading.value = false
  }

  const searchAndFilter = async () => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        /**
         * if the `searchQuery` isnt an empty string, meaning there's something to be searched
         * so it will be filtered, but if there no, it will just return the mock data
         */
        const searchResult =
          searchQuery.value !== ''
            ? mockData.filter(
                (v) =>
                  v.description.toLowerCase().includes(searchQuery.value) ||
                  v.requirements.toLowerCase().includes(searchQuery.value) ||
                  v.title.toLowerCase().includes(searchQuery.value) ||
                  (v.internship_skill.length > 0 &&
                    v.internship_skill.some((skill) => skill.name.includes(searchQuery.value))),
              )
            : mockData

        /**
         * if the filter value doesnt have an all, it means it would proceed to filtering,
         * but if both is all value then it will just return the search result
         */
        const filterResult = Object.values(filter).some((val) => val !== 'all')
          ? searchResult.filter(
              (v) =>
                (filter.allowance === 'all' || v.allowance === filter.allowance) &&
                (filter.setup === 'all' || v.setup === filter.setup),
            )
          : searchResult

        internships.value = filterResult

        resolve()
      }, 2000),
    )
  }

  /**
   * clears the filter by making the filte.setup and filter.allowance value intno all
   * and retaining the default value of internship list by inserting the mock data in internship
   */
  const clearFilter = async () => {
    loading.value = true

    filter.setup = 'all'
    filter.allowance = 'all'
    searchQuery.value = ''
    internships.value = mockData

    loading.value = false
  }

  const countFilter = computed(() => {
    const filterCount = Object.values(filter).filter((v) => v !== 'all').length

    const search = searchQuery.value !== ''

    return search ? filterCount + 1 : filterCount
  })

  watch(searchQuery, () => {
    if (searchQuery.value === '') internships.value = mockData
  })

  return {
    internships,
    loading,
    searchQuery,
    search,
    filter,
    addFilter,
    clearFilter,
    countFilter,
  }
}
