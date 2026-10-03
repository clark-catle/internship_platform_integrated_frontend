import { mockUserAccounts } from '@/data/user'
import type { UserRole, UserStatusWithoutDelete } from '@/shared/types'
import { computed, ref, watch } from 'vue'

export const useManageUser = () => {
  const mainData = mockUserAccounts
  const users = ref(mainData)
  const search = ref('')
  const roleFilter = ref<'all' | UserRole>('all')
  const statusFilter = ref<'all' | UserStatusWithoutDelete>('all')

  const toggleStatus = (id: number) => {
    const user = users.value.find((val) => val.id === id)

    if (user) user.status = user.status === 'active' ? 'block' : 'active'
  }

  watch(
    [search, roleFilter, statusFilter],
    () =>
      (users.value = mainData.filter(
        (val) =>
          (!search.value || val.email.includes(search.value.toLowerCase())) &&
          (roleFilter.value === 'all' || roleFilter.value === val.role) &&
          (statusFilter.value === 'all' || statusFilter.value === val.status),
      )),
  )

  return { users, search, roleFilter, statusFilter, toggleStatus }
}
