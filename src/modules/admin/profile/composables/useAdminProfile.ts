import { mockUserAdmin } from '@/data/user'
import type { ChangePassword } from '@/shared/types'
import { onMounted, ref } from 'vue'
import type { AdminProfileSection } from '../type'

export const useAdminProfile = () => {
  const user = ref(mockUserAdmin)
  const loading = ref(true)
  const activeSection = ref<AdminProfileSection>('email')

  const changeEmail = (val: string) => {
    user.value.email = val
  }

  const changePassword = (val: ChangePassword) => console.log(val)

  onMounted(async () => {
    setTimeout(() => (loading.value = false), 1000)
  })

  return { user, loading, activeSection, changeEmail, changePassword }
}
