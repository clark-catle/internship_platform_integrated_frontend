import type { ProfileSection } from '@/shared/types'

export type CompanyProfileSection = Exclude<ProfileSection, 'education' | 'student'>
