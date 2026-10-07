import { mockApplication } from '@/data/applications'
import type { applicationStatusTab } from '@/shared/types'
import { ref, watch } from 'vue'

/**
 * admin returns all the application unlike company that only returns all the application that was passed in that company
 * @returns
 */
export const useApplication = () => {
  const applications = ref(mockApplication)
  const activeTab = ref<applicationStatusTab>('all')

  watch(activeTab, () => {
    applications.value =
      activeTab.value === 'all'
        ? mockApplication
        : mockApplication.filter((val) => val.status === activeTab.value)
  })

  return { applications, activeTab }
}
