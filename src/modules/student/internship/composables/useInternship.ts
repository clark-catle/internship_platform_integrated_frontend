import { computed, reactive, ref, watch } from 'vue'
import type { filtersType, filterTypeKey } from '../type'
import { mockInternships } from '@/data/internship'
import type { internship } from '@/shared/types'

export const useInternship = () => {
  const mockData = mockInternships // source of the mock
  let searchedData: null | internship[] = null
  let filteredData: null | internship[] = null
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

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        const result = (filteredData === null ? mockData : filteredData).filter(
          (v) =>
            v.description.toLowerCase().includes(searchQuery.value) ||
            v.requirements.toLowerCase().includes(searchQuery.value) ||
            v.title.toLowerCase().includes(searchQuery.value) ||
            (v.internship_skill.length > 0 &&
              v.internship_skill.some((skill) => skill.name.includes(searchQuery.value))),
        )

        internships.value = result
        searchedData = result

        resolve()
      }, 2000),
    )

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

    /**
     * if the val is all, meaning then
     */
    if (val === 'all') {
      const result = searchedData === null ? mockData : searchedData

      internships.value = result
      filteredData = result

      return
    }

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        const result = (searchedData === null ? mockData : searchedData).filter(
          (v) =>
            (filter.allowance === 'all' || v.allowance === filter.allowance) &&
            (filter.setup === 'all' || v.setup === filter.setup),
        )

        internships.value = result
        filteredData = result
        resolve()
      }, 2000),
    )

    loading.value = false
  }

  const searchAndFilter = async () => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        const searchResult =
          searchQuery.value === ''
            ? mockData.filter(
                (v) =>
                  v.description.toLowerCase().includes(searchQuery.value) ||
                  v.requirements.toLowerCase().includes(searchQuery.value) ||
                  v.title.toLowerCase().includes(searchQuery.value) ||
                  (v.internship_skill.length > 0 &&
                    v.internship_skill.some((skill) => skill.name.includes(searchQuery.value))),
              )
            : mockData

after this, you need to filter the search result, but if theres nothing to filter, then just return the previous result
        const filterResult = searchResult.filter(
          (v) =>
            (filter.allowance === 'all' || v.allowance === filter.allowance) &&
            (filter.setup === 'all' || v.setup === filter.setup),
        )

        resolve()
      }, 2000),
    )
  }

  /**
   * clears the filter by making the filte.setup and filter.allowance value intno all
   * and retaining the default value of internship list by inserting the mock data in internship
   */
  const clearFilter = () => {
    loading.value = false

    filter.setup = 'all'
    filter.allowance = 'all'

    loading.value = false
  }

  const countFilter = computed(() => Object.values(filter).filter((v) => v !== 'all').length)

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
