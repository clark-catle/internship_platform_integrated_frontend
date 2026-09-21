import type { notification, notificationType } from '@/shared/types'
import type { LucideIcon } from '@lucide/vue'

export type studentNotification = {
  id: string
  type: notificationType
  message: string
  isRead: boolean
  created_date: string
}

export type notificationIconType = {
  icon: LucideIcon
  bg: string
  color: string
}

export type notificationProp = {
  notification: notification
  index: number
}
