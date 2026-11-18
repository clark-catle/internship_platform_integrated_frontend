import type { userRole } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type signInForm = {
  email: string
  password: string
}

export type signUpForm = {
  email: string
  password: string
  confirm_password: string
}

export type cardRole = {
  key: userRole
  icon: LucideIcon
  title: string
  desc: string
}

export type SigninError = Partial<Record<keyof signInForm, string[]>>

export type SignupError = Partial<Record<keyof signUpForm, string[]>>

export type LoginComponentProp = {
  fieldErrors: SigninError
  error: string | null
  loading: boolean
}

export type RegisterComponentProp = {
  fieldErrors: SignupError
  form: signUpForm
  error: string | null
  role?: userRole
  loading: boolean
}
