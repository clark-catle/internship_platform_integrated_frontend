<script setup lang="ts">
import SidebarBase from '@/shared/components/SidebarBase.vue'
import TopbarBase from '@/shared/components/TopbarBase.vue'
import { useCollapseSidebar } from '@/shared/stores/useCollapseSidebar'
import { roleFromUrl } from '@/utils/roleFromUrl'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const { collapsed } = useCollapseSidebar()
const router = useRouter()

const sidebarWidth = computed(() => (collapsed.value ? 72 : 240))

const role = roleFromUrl()

if (!role) router.push('/')
</script>

<template>
  <div class="min-h-screen bg-background flex">
    <SidebarBase v-if="role" :role="role" />

    <main
      class="flex-1 min-h-screen transition-all duration-300"
      :style="{ marginLeft: sidebarWidth }"
    >
      <TopbarBase />

      <router-view />
    </main>
  </div>
</template>
