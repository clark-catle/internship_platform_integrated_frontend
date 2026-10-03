import { computed, onMounted, ref } from 'vue'
import type { notification } from '../types'
import { mockCompanyNotifications, mockStudentNotifications } from '@/data/notification'
import { useRoute } from 'vue-router'
import { roleFromUrl } from '@/utils/roleFromUrl'

export const useNotif = () => {
  const notifications = ref<notification[]>([])

  const markAllRead = () =>
    notifications.value.forEach((val) =>
      val.read_at ? val : (val.read_at = new Date().toISOString()),
    )

  const markAsRead = (id: number) =>
    notifications.value.forEach((val) =>
      !val.read_at && val.id === id ? (val.read_at = new Date().toISOString()) : val,
    )

  const unreadCount = computed(() => notifications.value.filter((val) => !val.read_at).length)

  const removeNotification = (id: number) =>
    (notifications.value = notifications.value.filter((val) => val.id !== id))

  onMounted(() => {
    const role = roleFromUrl()

    console.log(role)

    switch (role) {
      case 'company':
        return (notifications.value = mockCompanyNotifications)
      case 'student':
        return (notifications.value = mockStudentNotifications)
      case 'admin':
        return (notifications.value = [])
      default:
        return (notifications.value = [])
    }
  })

  return { notifications, unreadCount, markAllRead, markAsRead, removeNotification }
}
