import { ref } from 'vue'
import type { applicationStatusTab } from '../type'
import { mockApplications } from '@/data/applications'

export const useApplication = () => {
  const applications = ref(mockApplications)
  const loading = ref(false)
  const activeTab = ref<applicationStatusTab>('all')

  const changeTab = (val: applicationStatusTab) => (activeTab.value = val)

  return { applications, loading, activeTab, changeTab }
}
