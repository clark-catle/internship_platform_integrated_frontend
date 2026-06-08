<script setup lang="ts">
import SidebarBase from '@/shared/components/SidebarBase.vue'
import { useCollapseSidebar } from '@/shared/stores/useCollapseSidebar'
import { computed } from 'vue'

const { collapsed } = useCollapseSidebar()

const sidebarWidth = computed(() => (collapsed.value ? 72 : 240))
</script>

<template>
  <div class="min-h-screen bg-background flex">
    <SidebarBase />

    <main
      class="flex-1 min-h-screen transition-all duration-300"
      :style="{ marginLeft: sidebarWidth }"
    >
      <router-view />
    </main>
  </div>
</template>
