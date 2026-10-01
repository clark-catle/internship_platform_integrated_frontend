<script setup lang="ts">
import { ref } from 'vue'
import { Bell } from '@lucide/vue'
import { timeAgo } from '@/utils/format'
import { onClickOutside } from '@/utils/onClickOutside'
import type { notification } from '../types'
import { AnimatePresence, Motion } from 'motion-v'

defineProps<{
  unreadCount: number
  notifications: notification[]
}>()

const emit = defineEmits<{
  open: [notification: notification]
  viewAll: []
}>()

const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)
onClickOutside(rootEl, () => (open.value = false))

const handleOpen = (notif: notification) => {
  open.value = false
  emit('open', notif)
}

const handleViewAll = () => {
  open.value = false
  emit('viewAll')
}
</script>

<template>
  <div ref="rootEl" class="relative">
    <button
      type="button"
      class="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
      aria-label="Notifications"
      @click="open = !open"
    >
      <Bell class="h-5 w-5" />
      <span
        v-if="unreadCount > 0"
        class="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground"
      >
        {{ unreadCount > 9 ? '9+' : unreadCount }}
      </span>
    </button>

    <AnimatePresence>
      <Motion
        v-if="open"
        as="div"
        :initial="{ opacity: 0, y: -4 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: -4 }"
        :transition="{ duration: 0.15, ease: 'easeOut' }"
        class="absolute right-0 z-40 mt-2 w-80 overflow-hidden rounded-2xl border border-border bg-popover shadow-xl sm:w-96"
      >
        <div class="flex items-center justify-between border-b border-border px-4 py-3">
          <p class="text-sm font-semibold text-popover-foreground">Notifications</p>
          <button
            type="button"
            class="text-xs font-medium text-primary hover:underline"
            @click="handleViewAll"
          >
            View all
          </button>
        </div>
        <div class="max-h-96 overflow-y-auto">
          <p
            v-if="notifications.length === 0"
            class="px-4 py-6 text-center text-sm text-muted-foreground"
          >
            You're all caught up.
          </p>
          <button
            v-for="n in notifications.slice(0, 6)"
            :key="n.id"
            type="button"
            class="flex w-full items-start gap-3 border-b border-border/60 px-4 py-3 text-left transition-colors last:border-0 hover:bg-secondary"
            @click="handleOpen(n)"
          >
            <span
              class="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              :class="n.read_at === null ? 'bg-primary' : 'bg-transparent'"
            />
            <span class="flex-1 min-w-0">
              <span
                class="block truncate text-sm"
                :class="
                  n.read_at === null
                    ? 'font-semibold text-popover-foreground'
                    : 'font-medium text-popover-foreground'
                "
              >
                {{ n.data.title }}
              </span>
              <span class="mt-0.5 block text-xs text-muted-foreground">{{
                timeAgo(n.created_at)
              }}</span>
            </span>
          </button>
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>
