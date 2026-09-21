<script lang="ts" setup>
import { Bell } from '@lucide/vue'
import ToggleDarkModeButton from './ToggleDarkModeButton.vue'
import { useTheme } from '../stores/useTheme'
import { useNotif } from '@/modules/student/notification/composables/useNotif.ts'

const { isDark } = useTheme()
const { unreadCount } = useNotif()
</script>

<template>
  <div class="py-4 px-10 flex justify-end items-center gap-3">
    <ToggleDarkModeButton />

    <RouterLink :to="{ name: 'studentNotification' }">
      <div class="relative rounded-xl p-2 mr-2 hover:bg-muted transition-colors cursor-pointer">
        <Bell class="size-4" />
        <span
          v-if="unreadCount"
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold"
        >
          {{ unreadCount }}
        </span>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'studentProfile' }">
      <div
        class="size-8 rounded-full transition-colors"
        :class="[isDark ? 'bg-white' : 'bg-black']"
      />
    </RouterLink>
  </div>
</template>
