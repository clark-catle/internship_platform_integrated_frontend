<script setup lang="ts">
import { MoonIcon, SunIcon } from '@lucide/vue'
import { useTheme } from '../stores/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="rounded-xl p-2 hover:bg-muted transition-colors cursor-pointer"
    @click="toggleTheme"
  >
    <SunIcon v-if="isDark" class="size-4" />
    <MoonIcon v-else class="size-4" />
  </button>
</template>
