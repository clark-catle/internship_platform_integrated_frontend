<script setup lang="ts">
import ButtonBase from './ButtonBase.vue'
import EmptyStateBase from './EmptyStateBase.vue'
import { Bell, CheckCheck } from '@lucide/vue'
import type { notification } from '../types/index.ts'
import NotificationItem from './NotificationItem.vue'

defineProps<{
  unreadCount: number
  notifications: notification[]
}>()

defineEmits<{
  markAllRead: []
}>()
</script>

<template>
  <div class="max-w-4xl mx-auto main-wrapper">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-poppins font-bold text-2xl sm:text-3xl text-foreground">Notifications</h1>
        <p class="text-muted-foreground mt-1">
          {{ unreadCount }} unread notification{{ unreadCount !== 1 ? 's' : '' }}
        </p>
      </div>

      <ButtonBase
        v-if="unreadCount > 0"
        @click="$emit('markAllRead')"
        variant="outline"
        class="rounded-xl gap-2 text-sm"
      >
        <CheckCheck class="w-4 h-4" /> Mark all read
      </ButtonBase>
    </div>

    <div class="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
      <EmptyStateBase
        :icon="Bell"
        title="All caught up!"
        description="You have no notifications at this time."
        v-if="notifications.length === 0"
      />
      <div v-else class="divide-y divide-border/50">
        <NotificationItem
          v-for="(notification, i) in notifications"
          :key="notification.id"
          :notification="notification"
          :index="i"
        />
      </div>
    </div>
  </div>
</template>
