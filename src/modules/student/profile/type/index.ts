import type { ProfileSection } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type ProfileSectionLogo = Record<ProfileSection, LucideIcon>

export type SectionBaseProp = {
  section: ProfileSection[]
}

export type StudentProfileSection = Exclude<ProfileSection, 'admin' | 'company'>
