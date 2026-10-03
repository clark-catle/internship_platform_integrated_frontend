import type { userRole } from '@/shared/types'
import { useRoute } from 'vue-router'

export const roleFromUrl = (): userRole | null => {
  const route = useRoute()

  if (route.fullPath.includes('company')) return 'company'
  else if (route.fullPath.includes('student')) return 'student'
  else if (route.fullPath.includes('admin')) return 'admin'
  else return null
}
