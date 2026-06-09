import { ref } from 'vue'
import type { applicationTab } from '../type'

export const useApplication = () => {
  const loading = ref(false)
  const activeTab = ref<applicationTab>('all')

  const changeTab = (val: applicationTab) => (activeTab.value = val)

  const applicationTabCount

  return { loading, activeTab, changeTab }
}
