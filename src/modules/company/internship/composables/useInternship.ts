import { mockCompanyInternships } from '@/data/internship'
import { reactive, ref, watch } from 'vue'

export const useInternship = () => {
  const mainData = mockCompanyInternships
  const internship = ref(mainData)
  const tab = ref<'active' | 'deleted'>('active')

  watch(tab, () => {
    internship.value = internship.value.filter((val) =>
      tab.value === 'active' ? !val.deleted_at : val.deleted_at,
    )
  })

  return { internship }
}
