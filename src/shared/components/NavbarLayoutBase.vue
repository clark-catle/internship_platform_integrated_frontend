<script setup lang="ts">
import TopbarBase from '@/shared/components/TopbarBase.vue'
import { useCollapseSidebar } from '@/shared/stores/useCollapseSidebar'
import { computed } from 'vue'

const { collapsed } = useCollapseSidebar()

const sidebarWidth = computed(() => (collapsed.value ? 72 : 240))
</script>

<template>
  <div class="min-h-screen bg-background flex">
    <slot name="nav" />

    <main
      class="flex-1 min-h-screen transition-all duration-300"
      :style="{ marginLeft: sidebarWidth }"
    >
      <TopbarBase />

      <router-view />
    </main>
  </div>
</template>
