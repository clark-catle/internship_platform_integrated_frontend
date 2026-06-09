import type { applicationStatus } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type applicationTab = applicationStatus | 'all'

export type applicationStatusDesign = {
  label: applicationStatus
  icon: LucideIcon
  class: string
  dot: string
}
