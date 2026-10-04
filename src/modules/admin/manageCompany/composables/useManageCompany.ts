import { ref, watch } from 'vue'
import { mockCompanies } from '@/data/companies'

export const useCompany = () => {
  const companies = ref(mockCompanies)
  const isVerified = ref(false)
  const search = ref('')

  watch([search, isVerified], () => {
    const searched = search.value
      ? mockCompanies.filter(
          (val) =>
            val.company_name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
            val.description.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
            val.location.city.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
            val.location.region.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()),
        )
      : mockCompanies

    const isVerify = isVerified.value ? searched.filter((val) => val.is_verified) : searched

    companies.value = isVerify
  })

  return { companies, isVerified, search }
}
