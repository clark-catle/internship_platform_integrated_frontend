import { studentNotifications } from '@/data/student'
import { computed, ref } from 'vue'
import type { studentNotification } from '../type'

const notifications = ref(studentNotifications)

export const useNotif = () => {
  const markAllRead = () => notifications.value.forEach((val) => (val.isRead = true))

  const unreadCount = computed(() => notifications.value.filter((val) => !val.isRead).length)

  return { notifications, unreadCount, markAllRead }
}
