import { mockCompanyUser } from '@/data/company'
import { mockUserCompany } from '@/data/user'
import { onMounted, ref } from 'vue'
import type { CompanyProfileSection } from '../type'
import type { ChangePassword } from '@/shared/types'

export const useProfile = () => {
  const user = ref(mockUserCompany)
  const loading = ref(true)
  const saving = ref(false)
  const activeSection = ref<CompanyProfileSection>('basic')

  const changeEmail = (val: string) => {
    user.value.email = val
  }

  const changePassword = (val: ChangePassword) => console.log(val)

  onMounted(async () => {
    setTimeout(() => (loading.value = false), 1000)
  })

  return { user, loading, saving, activeSection, save, changeEmail, changePassword }
}
