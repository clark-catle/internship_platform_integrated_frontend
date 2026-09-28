import type { LucideIcon } from '@lucide/vue'
import type { ComputedRef } from 'vue'

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

export type userRole = 'company' | 'student' | 'admin'

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

export type navItems = {
  icon: LucideIcon
  label: string
  hrefTo: string
  badge?: ComputedRef<number>
}

export type notificationType = 'submitted' | 'accepted' | 'rejected' | 'report'

export type emptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    action: () => void
    actionLabel: string
  }
}

export type applicationStatus = 'pending' | 'in review' | 'accepted' | 'rejected'

export type applicationProgress = 'applied' | 'interview' | 'decision'

export type apiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type requestArg<T> = {
  endpoint: string
  body?: T
  method?: apiMethod
  version?: string
}

export type internship = {
  id: number
  title: string
  description: string
  requirements: string
  setup: internshipSetup
  location: LocationType
  allowance: internshipAllowance
  duration: number
  duration_unit: internshipDurationUnit
  internship_skill: skill[]
  companyId?: number
  deleted_at: null
}

export type skill = {
  id: number
  name: string
}

export type company = {
  id: number
  company_name: string
  description: string
  website: string
  is_verified: boolean
  location: LocationType
  logo_url: string
  // internship?: internship[]
  internshipId?: number[]
}

export type LocationType = {
  region: string
  city: string
}

export type notification = {
  id: number
  data: notificationData
  read_at: string | null
  created_at: string
}

export type notificationData = {
  type: notificationDataType
  application_id: number
  title: string
  message: string
}

export type notificationDataType = 'success' | 'warning' | 'info'

export type application = {
  id: number
  status: applicationStatus
  progress: applicationProgress
  applied_at: string
  internshipId?: number
  student?: Student
}

export type User = {
  id: number
  email: string
  status: UserStatus
  role: UserRole
}

export type UserStatus = 'active' | 'block' | 'deleted'

export type UserRole = 'student' | 'company' | 'admin'

export type Course = {
  id: number
  name: string
}

export type Student = {
  id: number
  name: {
    first_name: string
    last_name: string
  }
  school: string
  cellphone_number: string
  course: Course
  location: LocationType
  student_skill: skill[]
}

export type UserStudent = User & {
  student_info: Student
}
