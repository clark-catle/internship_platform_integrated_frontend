import type {
  internshipAllowance,
  internshipCategory,
  internshipDuration,
  internshipSetup,
} from '@/shared/types'

export type featuredSection = internshipDuration & {
  id: string
  company: string
  role: string
  type: internshipSetup
  category: internshipCategory
  skills: string[]
  location: string
  allowance: internshipAllowance
  isFeatured: boolean
}
