import type { signInForm, signUpForm } from '@/modules/auth/types'
import client from './client'

export default {
  login: (body: signInForm) => client.post<signInForm>('/login', body),
  register: (body: signUpForm) => client.post<signUpForm>('/register', body),
}
