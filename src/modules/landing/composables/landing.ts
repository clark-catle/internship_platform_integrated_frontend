import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/shared/types'

export const useLanding = () => {
  const router = useRouter()

  onMounted(async () => {
    const token = localStorage.getItem('token')
    const user: null | User = JSON.parse(localStorage.getItem('user'))

    if (!token && !user) return

    if (token && !user) localStorage.removeItem('token')

    if (user && !token) localStorage.removeItem('user')

    await router.replace({ name: `${user.role}Dashboard` })
  })
}
