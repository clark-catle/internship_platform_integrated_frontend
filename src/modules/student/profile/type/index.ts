import type { LucideIcon } from '@lucide/vue'

export type ProfileSection = 'basic' | 'education' | 'password' | 'email'

export type SectionData = {
  key: ProfileSection
  icon: LucideIcon
}

export type ChangePassword = {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
