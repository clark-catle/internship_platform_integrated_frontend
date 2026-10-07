import type { ProfileSection } from '@/shared/types'

export type AdminProfileSection = Exclude<ProfileSection, 'company' | 'student' | 'education'>
