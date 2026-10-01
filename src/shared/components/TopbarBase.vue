<script lang="ts" setup>
import ToggleDarkModeButton from './ToggleDarkModeButton.vue'
import { useTheme } from '../stores/useTheme'
import { useNotif } from '../composables/useNotif.ts'
import NotificationBell from './NotificationBell.vue'

const { isDark } = useTheme()
const { notifications, unreadCount } = useNotif()
</script>

<template>
  <div class="py-4 px-10 flex justify-end items-center gap-3">
    <ToggleDarkModeButton />

    <NotificationBell :notifications="notifications" :unread-count="unreadCount" />

    <RouterLink :to="{ name: 'studentProfile' }">
      <div
        class="size-8 rounded-full transition-colors"
        :class="[isDark ? 'bg-white' : 'bg-black']"
      />
    </RouterLink>
  </div>
</template>
