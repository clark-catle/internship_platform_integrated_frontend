import { ref } from 'vue'
import { mockApplication } from '@/data/applications'
import type { applicationStatusTab } from '@/shared/types'

export const useApplication = () => {
  const applications = ref(mockApplication)
  const filteredApplication = ref(mockApplication)
  const loading = ref(false)
  const activeTab = ref<applicationStatusTab>('all')

  const changeTab = (val: applicationStatusTab) => {
    activeTab.value = val

    if (val === 'all') return (filteredApplication.value = mockApplication)

    filteredApplication.value = mockApplication.filter((v) => v.status === val)
  }

  return { applications, filteredApplication, loading, activeTab, changeTab }
}
