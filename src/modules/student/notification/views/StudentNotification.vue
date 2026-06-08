<script setup lang="ts">
import { studentNotifications } from '@/data/student'
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { Bell, CheckCheck } from '@lucide/vue'
import { useNotif } from '../composables/useNotif'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'

const { notif, unreadCount, markAllRead } = useNotif()
</script>

<template>
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-foreground">
          Notifications
        </h1>
        <p className="text-muted-foreground mt-1">
          {{ unreadCount }} unread notification{{ unreadCount !== 1 ? 's' : '' }}
        </p>
      </div>

      <ButtonBase
        v-if="unreadCount > 0"
        onClick="{markAllRead}"
        variant="outline"
        className="rounded-xl gap-2 text-sm"
      >
        <CheckCheck className="w-4 h-4" /> Mark all read
      </ButtonBase>
    </div>

    <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
      {notifications.length === 0 ? (
      <EmptyStateBase
        :icon="Bell"
        title="All caught up!"
        description="You have no notifications at this time."
      />
      ) : (
      <div className="divide-y divide-border/50">
        {notifications.map((notif, i) => (
        <NotificationItem key="{notif.id}" notification="{notif}" index="{i}" />
        ))}
      </div>
      )}
    </div>
  </div>
</template>
