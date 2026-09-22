import type { Course, LocationType, skill, User } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

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

export type ProfileSection = 'basic' | 'education' | 'links'

export type SectionData = {
  key: ProfileSection
  label: string
  icon: LucideIcon
}
