import { ref } from 'vue'
import type { applicationStatusTab } from '../type'
import { mockApplication } from '@/data/applications'

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
