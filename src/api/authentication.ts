import { request } from '@/lib/api-client'
import type { LoginPayload, RegisterPayload, RegisterValidRole, userRole } from '@/shared/types'

export const auth = {
  login: (email: string, password: string) =>
    request<LoginPayload>({
      endpoint: '/login/',
      body: { email, password },
      options: { method: 'POST' },
    }),

  register: (email: string, password: string, confirmPassword: string, role: RegisterValidRole) =>
    request<RegisterPayload>({
      endpoint: '/register/',
      body: { email, password, confirmPassword, role },
      options: { method: 'POST' },
    }),
}
