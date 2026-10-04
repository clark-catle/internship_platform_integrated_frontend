<script setup lang="ts">
import type { User } from '@/shared/types'
import { Mail, ShieldCheck } from '@lucide/vue'

defineProps<{ account: User }>()
</script>

<template>
  <div class="rounded-xl border border-border bg-secondary/40 p-4">
    <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
      Linked account
    </p>
    <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
      <span class="flex items-center gap-1.5 text-card-foreground">
        <Mail class="h-3.5 w-3.5 text-muted-foreground" />
        {{ account.email }}
      </span>
      <span class="flex items-center gap-1.5 text-card-foreground">
        <ShieldCheck class="h-3.5 w-3.5 text-muted-foreground" />
        <span class="capitalize">{{ account.role }}</span>
      </span>
      <span
        class="rounded-full px-2.5 py-1 text-xs font-medium capitalize"
        :class="account.status === 'active' ? 'badge-success' : 'badge-danger'"
      >
        {{ account.status }}
      </span>
    </div>
  </div>
</template>
