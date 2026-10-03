import { mockApplication } from '@/data/applications'
import type { applicationStatusTab } from '@/shared/types'
import { ref, watch } from 'vue'

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
