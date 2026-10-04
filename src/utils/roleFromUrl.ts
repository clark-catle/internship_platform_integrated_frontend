import type { userRole } from '@/shared/types'
import { useRoute } from 'vue-router'

export const roleFromUrl = (): userRole | null => {
  const route = useRoute()

  /**
   * route.fullPath = /company/users
   * and with .split('/')[1]
   * it will be
   * `company` value
   */
  const roleFromUrl = route.fullPath.split('/')[1]

  if (!roleFromUrl) return null

  if (roleFromUrl.includes('company')) return 'company'
  else if (roleFromUrl.includes('student')) return 'student'
  else if (roleFromUrl.includes('admin')) return 'admin'
  else return null
}
