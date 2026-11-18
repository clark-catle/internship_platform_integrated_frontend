import { request } from '@/lib/api-client'
import type {
  GenericResponse,
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

  register: (email: string, password: string, confirm_password: string, role: RegisterValidRole) =>
    request<RegisterPayload, GenericResponse>({
      endpoint: '/register/',
      body: { email, password, confirm_password, role },
      options: { method: 'POST' },
    }),

  logout: () =>
    request({
      endpoint: '/user/logout',
      options: { method: 'POST' },
    }),
}
