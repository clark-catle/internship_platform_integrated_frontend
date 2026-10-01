<script setup lang="ts">
import { CheckCircle, Clock, Eye, XCircle } from '@lucide/vue'
import type { ApplicationStatusBadgeProps, statusConfigType } from '../type'

const prop = withDefaults(defineProps<ApplicationStatusBadgeProps>(), {
  showIcon: true,
  small: true,
})

const statusConfig: statusConfigType = {
  pending: { label: 'pending', icon: Clock, class: 'badge-warning' },
  'in review': { label: 'in review', icon: Eye, class: 'badge-info' },
  accepted: {
    label: 'accepted',
    icon: CheckCircle,
    class: 'badge-success',
  },
  rejected: { label: 'rejected', icon: XCircle, class: 'badge-danger' },
}

const config = statusConfig[prop.status]
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full font-medium"
    :class="[config.class, prop.small ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5']"
  >
    <component :is="config.icon" :class="[prop.small ? 'w-3 h-3' : 'w-4 h-4']" />
    {{ config.label }}
  </span>
</template>
