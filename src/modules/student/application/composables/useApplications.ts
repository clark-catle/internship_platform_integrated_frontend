import { ref } from 'vue'
import type { applicationStatusTab } from '../type'
import { mockStudentApplications } from '@/data/applications'

export const useApplication = () => {
  const applications = ref(mockStudentApplications)
  const filteredApplication = ref(mockStudentApplications)
  const loading = ref(false)
  const activeTab = ref<applicationStatusTab>('all')

  const changeTab = (val: applicationStatusTab) => {
    activeTab.value = val

    if (val === 'all') return (filteredApplication.value = mockStudentApplications)

    filteredApplication.value = mockStudentApplications.filter((v) => v.status === val)
  }

  return { applications, filteredApplication, loading, activeTab, changeTab }
}
