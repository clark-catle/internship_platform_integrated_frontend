import type {
  internshipAllowance,
  internshipCategory,
  internshipDuration,
  internshipSetup,
} from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

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

export type whySectionColor = 'indigo' | 'green' | 'rose' | 'amber'

export type whyFeature = {
  icon: LucideIcon
  title: string
  desc: string
  color: whySectionColor
}
