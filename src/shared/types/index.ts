import type { LucideIcon } from '@lucide/vue'

export type internshipSetup = 'on site' | 'hybrid' | 'remote'

export type internshipDurationUnit = 'hr' | 'day' | 'month'

export type internshipDuration = {
  duration: number
  durationUnit: internshipDurationUnit
}

export type internshipAllowance = 'non' | 'provided' | 'discuss'

export type internshipCategory = 'technology' | 'design' | 'marketing' | 'finance' | 'data science'

export type buttonBase = {
  variant?: 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'lg' | 'icon'
}

export type userRole = 'company' | 'student'

export type landingFeaturedSection = internshipDuration & {
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

export type studentNav = {
  icon: LucideIcon
  label: string
  hrefTo: string
  badge?: number
}
