<script setup lang="ts">
import { Clock } from '@lucide/vue'
import { Motion } from 'motion-v'
import type { studentNotification } from '../type'
import { notificationTypeIcons } from '@/data/student'
import { computed } from 'vue'
import { formatDistanceToNow } from 'date-fns'

const { notification, index } = defineProps<{
  notification: studentNotification
  index: number
}>()

const time = computed(() => formatDistanceToNow(notification.created_date, { addSuffix: true }))

const typeIcons = notificationTypeIcons

const style = typeIcons[notification.type] ?? typeIcons.default
</script>

<template>
  <Motion
    :initial="{ opacity: 0, x: -10 }"
    :animate="{ opacity: 1, x: 0 }"
    :transition="{ delay: index * 0.05 }"
    class="flex items-start gap-3 p-4 transition-colors cursor-pointer"
    :class="[notification.isRead ? 'hover:bg-muted/50' : 'bg-accent/40 hover:bg-accent/60']"
  >
    <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" :class="[style.bg]">
      <component :is="style.icon" class="w-4 h-4" :class="[style.color]" />
    </div>

    <div class="flex-1 min-w-0">
      <p class="text-sm text-foreground" :class="{ 'font-medium': !notification.isRead }">
        {{ notification.message }}
      </p>

      <div class="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
        <Clock class="w-3 h-3" />
        {{ time }}
      </div>
    </div>

    <div v-if="!notification.isRead" class="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
  </Motion>
</template>
