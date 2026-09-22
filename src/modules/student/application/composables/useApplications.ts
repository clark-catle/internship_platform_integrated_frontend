import { ref } from 'vue'
import type { applicationStatusTab } from '../type'
import { mockApplications } from '@/data/applications'

export const useApplication = () => {
  const applications = ref(mockApplications)
  const filteredApplication = ref(mockApplications)
  const loading = ref(false)
  const activeTab = ref<applicationStatusTab>('all')

  const changeTab = (val: applicationStatusTab) => {
    activeTab.value = val

    if (val === 'all') return (filteredApplication.value = mockApplications)

    filteredApplication.value = mockApplications.filter((v) => v.status === val)
  }

  return { applications, filteredApplication, loading, activeTab, changeTab }
}
