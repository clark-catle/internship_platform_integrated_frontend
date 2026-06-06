<script setup lang="ts">
import { studentNavItems } from '@/data/shared'
import { ChevronLeft, ChevronRight, LogOut } from '@lucide/vue'
import { Motion } from 'motion-v'
import { ref } from 'vue'
import { useCollapseSidebar } from '../stores/useCollapseSidebar'

const navItems = studentNavItems
const { collapsed, toggleCollapsed, currentUrl } = useCollapseSidebar()
const logout = () => console.log('logging out')
</script>

<template>
  <Motion
    as="aside"
    :animate="{ width: collapsed ? 72 : 240 }"
    :transition="{ duration: 0.3, ease: 'easeInOut' }"
    class="fixed left-0 top-0 h-full z-40 flex flex-col overflow-hidden"
    :style="{ background: 'hsl(238, 30%, 15%)' }"
  >
    <div
      class="flex items-center h-16 px-4 border-b"
      :style="{ borderColor: 'hsl(238, 30%, 20%)' }"
    >
      <div
        class="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center shrink-0 shadow-glow"
      >
        <Briefcase class="w-4 h-4 text-white" />
      </div>
      <Motion
        as="span"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        class="ml-3 font-poppins font-bold text-white text-lg whitespace-nowrap"
      >
        InternMatch
      </Motion>
    </div>

    <button
      @click="toggleCollapsed(!collapsed)"
      class="absolute right-0 top-20 translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center border text-white hover:opacity-80 transition-opacity z-10"
      :style="{ background: 'hsl(238, 40%, 30%)', borderColor: 'hsl(238, 30%, 25%)' }"
    >
      <ChevronRight v-if="collapsed" class="w-3 h-3" />
      <ChevronLeft else class="w-3 h-3" />
    </button>

    <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
      <RouterLink v-for="navItem in navItems" :key="navItem.hrefTo" :to="navItem.hrefTo">
        <div
          class="sidebar-item"
          :class="[
            currentUrl
              ? 'bg-white/15 text-white border border-white/20'
              : 'text-white/60 hover:bg-white/10 hover:text-white',
          ]"
        >
          <component :is="navItem.icon" class="w-5 h-5 shrink-0" />
          <span v-if="!collapsed" class="whitespace-nowrap">{{ navItem.label }}</span>
        </div>
      </RouterLink>
    </nav>

    <div class="px-3 py-4 border-t space-y-1" :style="{ borderColor: 'hsl(238, 30%, 20%)' }">
      <button
        @click="logout"
        class="w-full sidebar-item text-white/60 hover:bg-red-500/20 hover:text-red-400"
      >
        <LogOut class="w-5 h-5 shrink-0" />
        <span v-if="!collapsed">Logout</span>
      </button>
    </div>
  </Motion>
</template>
