import { mockStudentNotifications } from '@/data/notification'
import { computed, ref } from 'vue'

export const useNotif = () => {
  const notifications = ref(mockStudentNotifications)

  const markAllRead = () => {
    notifications.value.forEach((val) =>
      val.read_at ? val : (val.read_at = new Date().toISOString()),
    )

    console.log(notifications.value)
  }

  const unreadCount = computed(() => notifications.value.filter((val) => !val.read_at).length)

  return { notifications, unreadCount, markAllRead }
}
