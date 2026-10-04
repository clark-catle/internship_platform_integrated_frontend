<script setup lang="ts">
import { Search } from '@lucide/vue'

const search = defineModel<string>('search', { required: true })
</script>

<template>
  <div class="relative max-w-2/5 flex items-center gap-4">
    <input
      v-model="search"
      type="text"
      placeholder="Search companies by name or location…"
      class="w-full rounded-xl border border-input bg-card py-2.5 pl-10 pr-20 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
    />
    <div class="flex flex-col items-between">
      <Search
        class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  </div>
</template>
