import type { userRole } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type signInForm = {
  email: string
  password: string
}

export type signUpForm = signInForm & {
  confirmPassword: string
  role?: userRole
}

export type cardRole = {
  key: userRole
  icon: LucideIcon
  title: string
  desc: string
}
