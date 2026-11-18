import { renderError } from '@/utils/renderError'
import { useCollapseSidebar } from '../stores/useCollapseSidebar'
import type { userRole } from '../types'
import { useNotif } from './useNotif'
import { auth } from '@/api/authentication'
import { useRouter } from 'vue-router'

export const useLogout = () => {
  const router = useRouter()
  const { collapsed, toggleCollapsed, currentUrlName } = useCollapseSidebar()

  const { unreadCount } = useNotif()

  const logout = async () => {
    try {
      const res = await auth.logout()

      localStorage.removeItem('token')
      localStorage.removeItem('user')

      await router.replace({ name: 'landingPage' })
    } catch (error) {
      const parsed = renderError(e)
      error.value = parsed.message
    }
  }

  return {
    collapsed,
    toggleCollapsed,
    currentUrlName,
    unreadCount,
    logout,
  }
}
