import { request } from '@/lib/api-client'
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterValidRole,
} from '@/shared/types'

export const auth = {
  login: (email: string, password: string) =>
    request<LoginPayload, LoginResponse>({
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

  logout: () =>
    request({
      endpoint: '/user/logout',
      options: { method: 'POST' },
    }),
}
