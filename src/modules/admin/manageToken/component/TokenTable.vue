<script setup lang="ts">
import type { AdminToken } from '@/shared/types'
import { formatDateTime } from '@/utils/format'
import { Copy, Trash2 } from '@lucide/vue'

const deleteId = defineModel<number | null>('deleteId', { required: true })

defineProps<{
  tokens: AdminToken[]
}>()

defineEmits<{
  copyToken: [val: string]
}>()

const tokenStatus = (usedAt: string | null, expiresAt: string) => {
  if (new Date(expiresAt) < new Date()) return { label: 'Expired', design: 'badge-danger' }

  if (!usedAt) return { label: 'Unused', design: 'badge-success' }

  return { label: 'Used', design: 'badge-warning' }
}
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-border bg-card">
    <table class="w-full text-left text-sm">
      <thead
        class="border-b border-border bg-secondary/40 text-xs uppercase tracking-wide text-muted-foreground"
      >
        <tr>
          <th class="px-5 py-3 font-medium">Token</th>
          <th class="px-5 py-3 font-medium">Expires</th>
          <th class="px-5 py-3 font-medium">Status</th>
          <th class="px-5 py-3 font-medium text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in tokens" :key="t.id" class="border-b border-border last:border-0">
          <td class="px-5 py-3.5 font-mono text-xs text-card-foreground">{{ t.token }}</td>
          <td class="px-5 py-3.5 text-xs text-muted-foreground">
            {{ t.expiresAt ? formatDateTime(t.expiresAt) : 'Never' }}
          </td>
          <td class="px-5 py-3.5">
            <span
              class="rounded-full px-2.5 py-1 text-xs font-medium"
              :class="tokenStatus(t.usedAt, t.expiresAt).design"
            >
              {{ tokenStatus(t.usedAt, t.expiresAt).label }}
            </span>
          </td>
          <td class="px-5 py-3.5">
            <div class="flex items-center justify-end gap-2">
              <button
                type="button"
                class="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Copy token"
                @click="$emit('copyToken', t.token)"
              >
                <Copy class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-destructive"
                aria-label="Delete token"
                @click="deleteId = t.id"
              >
                <Trash2 class="h-4 w-4" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
