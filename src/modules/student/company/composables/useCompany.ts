import { mockStudentCompanies } from '@/data/companies'
import { ref, watch } from 'vue'

export const useCompany = () => {
  const mainData = mockStudentCompanies
  const companies = ref(mainData)
  const isVerified = ref(false)
  const search = ref('')

  watch([search, isVerified], () => {
    const searched = search.value
      ? mainData.filter(
          (val) =>
            val.company_name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
            val.description.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
            val.location.city.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) ||
            val.location.region.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()),
        )
      : mainData

    const isVerify = isVerified.value ? searched.filter((val) => val.is_verified) : searched

    companies.value = isVerify
  })

  return { companies, isVerified, search }
}
