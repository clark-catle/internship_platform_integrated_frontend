import type { applicationProgress, applicationStatus } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type applicationStatusDesign = {
  label: applicationStatus
  icon: LucideIcon
  class: string
  dot: string
}

export type timelineTrackerProp = {
  progress: applicationProgress
  status: applicationStatus
}

export type applicationProgressBadgeProps = {
  status: applicationStatus
  showIcon?: boolean
  small?: boolean
}

export type statusConfigType = Record<applicationStatus, statusConfigDataType>

export type statusConfigDataType = {
  label: applicationStatus
  icon: LucideIcon
  class: string
}

export type stepsDate = {
  label: applicationProgress
  icon: LucideIcon
}
