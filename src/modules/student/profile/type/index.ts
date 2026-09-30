import type { ProfileSection } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type StudentProfileSection = Record<ProfileSection, LucideIcon>

export type SectionBaseProp = {
  section: ProfileSection[]
}
