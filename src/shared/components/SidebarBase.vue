<script setup lang="ts">
import {
  Bell,
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  User,
} from '@lucide/vue'
import { Motion } from 'motion-v'
import { useCollapseSidebar } from '../stores/useCollapseSidebar'
import type { userRole } from '../types'
import { useNotif } from '../composables/useNotif'
import { useRoute } from 'vue-router'

const { collapsed, toggleCollapsed, currentUrlName } = useCollapseSidebar()

const { role } = defineProps<{ role: userRole }>()

const route = useRoute()
const { unreadCount } = useNotif()

const logout = () => console.log('logging out')

const userNav = () => {
  switch (role) {
    case 'company':
      return [
        { icon: LayoutDashboard, label: 'Dashboard', hrefTo: 'companyDashboard' },
        { icon: Briefcase, label: 'My Internships', hrefTo: 'companyInternship' },
        { icon: FileText, label: 'Applications', hrefTo: 'companyApplication' },
        { icon: Bell, label: 'Notifications', hrefTo: 'companyNotification', badge: unreadCount },
        { icon: User, label: 'My Profile', hrefTo: 'companyProfile' },
      ]
    case 'student':
      return [
        { icon: LayoutDashboard, label: 'Dashboard', hrefTo: 'studentDashboard' },
        { icon: Briefcase, label: 'Internships', hrefTo: 'studentInternship' },
        { icon: Building2, label: 'Companies', hrefTo: 'studentCompany' },
        { icon: FileText, label: 'My Applications', hrefTo: 'studentApplication' },
        { icon: Bell, label: 'Notifications', hrefTo: 'studentNotification', badge: unreadCount },
        { icon: User, label: 'My Profile', hrefTo: 'studentProfile' },
      ]
    case 'admin':
      return [
        { icon: LayoutDashboard, label: 'Internship', hrefTo: 'studentInternship' },
        { icon: Building2, label: 'Companies', hrefTo: 'studentCompany' },
        { icon: FileText, label: 'My Applications', hrefTo: 'studentApplication' },
        { icon: Bell, label: 'Notifications', hrefTo: 'studentNotification', badge: unreadCount },
        { icon: User, label: 'My Profile', hrefTo: 'studentProfile' },
      ]
  }
}

const dashboardRoute = () => {
  if (route.fullPath.includes('company')) return 'companyDashboard'
  else if (route.fullPath.includes('student')) return 'studentDashboard'
  else if (route.fullPath.includes('admin')) return 'studentDashboard'
  else return 'landingPage'
}
</script>

<template>
  <Motion
    as="aside"
    :animate="{ width: collapsed ? 72 : 240 }"
    :transition="{ duration: 0.3, ease: 'easeInOut' }"
    class="relative shrink-0"
  />

  <Motion
    as="aside"
    :animate="{ width: collapsed ? 72 : 240 }"
    :transition="{ duration: 0.3, ease: 'easeInOut' }"
    class="fixed left-0 top-0 h-screen z-40 bg-sidebar"
    :style="{ background: 'hsl(var(--sidebar-background))' }"
  >
    <div class="flex flex-col h-full">
      <RouterLink
        :to="{ name: dashboardRoute() }"
        class="flex items-center h-16 px-4 border-b border-sidebar-border"
      >
        <div
          class="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center shrink-0 shadow-glow"
        >
          <Briefcase class="w-4 h-4 text-white" />
        </div>

        <Motion
          as="span"
          v-if="!collapsed"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          class="ml-3 font-poppins font-bold text-white text-lg whitespace-nowrap"
        >
          InternMatch
        </Motion>
      </RouterLink>

      <button
        @click="toggleCollapsed(!collapsed)"
        class="absolute right-0 top-13 translate-x-1/2 w-6 h-6 bg-sidebar-accent rounded-full flex items-center justify-center border border-sidebar-border text-sidebar-foreground hover:bg-sidebar-primary transition-colors z-10"
      >
        <ChevronRight v-if="collapsed" class="w-3 h-3" />
        <ChevronLeft v-else class="w-3 h-3" />
      </button>

      <nav class="flex-1 flex flex-col gap-2 px-3 py-4">
        <RouterLink
          v-for="navItem in userNav()"
          :key="navItem.hrefTo"
          :to="{ name: navItem.hrefTo }"
        >
          <div
            class="sidebar-item"
            :class="[
              currentUrlName === navItem.hrefTo
                ? 'bg-sidebar-primary/20 text-white ring-2 ring-sidebar-primary/50'
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-white',
            ]"
          >
            <div class="relative shrink-0">
              <component :is="navItem.icon" class="w-5 h-5" />
              <span
                v-if="navItem.badge?.value"
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold"
              >
                {{ navItem.badge }}
              </span>
            </div>

            <span v-if="!collapsed" class="whitespace-nowrap">{{ navItem.label }}</span>
          </div>
        </RouterLink>
      </nav>

      <div class="px-3 py-4 border-t border-sidebar-border space-y-1">
        <button
          @click="logout"
          class="w-full sidebar-item text-sidebar-foreground hover:bg-red-500/20 hover:text-red-400"
        >
          <LogOut class="w-5 h-5 shrink-0" />
          <span v-if="!collapsed">Logout</span>
        </button>
      </div>
    </div>
  </Motion>
</template>
