import { studentNotifications } from '@/data/student'
import { computed, ref } from 'vue'
import type { studentNotification } from '../type'

const notif = ref(studentNotifications)

export const useNotif = () => {
  const markAllRead = () => notif.value.forEach((val) => (val.isRead = true))

  const unreadCount = computed(() => notif.value.filter((val) => !val.isRead).length)

  return { notif, unreadCount, markAllRead }
}
