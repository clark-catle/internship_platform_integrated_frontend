import type { notificationType } from '@/shared/types'

export type studentNotification = {
  id: string
  type: notificationType
  message: string
  isRead: boolean
  created_date: string
}
