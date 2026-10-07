<script setup lang="ts">
import NotificationBase from '@/shared/components/NotificationBase.vue'
import { useNotif } from '@/shared/composables/useNotif'

const { notifications, unreadCount, markAllRead } = useNotif()
</script>

<template>
  <NotificationBase
    :unread-count="unreadCount"
    :notifications="notifications"
    @markAllRead="markAllRead"
  />
</template>
