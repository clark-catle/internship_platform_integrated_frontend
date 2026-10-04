import { mockCompanies } from '@/data/companies'
import { ref } from 'vue'

export const useCompanyManageDetail = (id: number) => {
  const company = ref(mockCompanies.find((val) => val.id === id))

  const toggleVerify = () => {
    if (!company.value) return

    company.value.is_verified = !company.value.is_verified
  }

  return { company, toggleVerify }
}
