import type { applicationProgress, applicationStatus } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type applicationStatusTab = applicationStatus | 'all'

export type applicationStatusDesign = {
  label: applicationStatus
  icon: LucideIcon
  class: string
  dot: string
}

export type timelineTrackerProp = {
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
