<script lang="ts" setup>
import { Bell } from '@lucide/vue'
import ToggleDarkModeButton from './ToggleDarkModeButton.vue'
import { useTheme } from '../stores/useTheme'

const { isDark } = useTheme()
</script>

<template>
  <div class="py-4 px-10 flex justify-end items-center gap-3">
    <ToggleDarkModeButton />

    <RouterLink to="studentNotification">
      <div class="rounded-xl p-2 hover:bg-muted transition-colors cursor-pointer">
        <Bell class="size-4" />
      </div>
    </RouterLink>

    <RouterLink to="studentProfile">
      <div
        class="size-8 rounded-full transition-colors"
        :class="[isDark ? 'bg-white' : 'bg-black']"
      />
    </RouterLink>
  </div>
</template>
