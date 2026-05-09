<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { BriefcaseIcon, MenuIcon, XIcon } from '@lucide/vue'
import ToggleDarkModeButton from '@/shared/components/ToggleDarkModeButton.vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const route = useRoute()

const navLinks = [
  { label: 'Browse Internships', href: '#internships' },
  { label: 'Companies', href: '#companies' },
  { label: 'How it Works', href: '#how-it-works' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 w-full">
    <div
      class="px-4 sm:px-6 lg:px-8 transition-all duration-200"
      :class="[
        scrolled || mobileOpen
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-card border-b border-border'
          : 'bg-transparent',
      ]"
    >
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center gap-2 group">
          <div
            class="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform"
          >
            <BriefcaseIcon class="w-4 h-4 text-white" />
          </div>
          <span class="font-poppins font-bold text-xl text-gradient">InternMatch</span>
        </RouterLink>

        <div class="hidden md:flex items-center gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.href"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              route.path === link.href
                ? 'text-primary bg-accent'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted',
            ]"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="hidden md:flex items-center gap-2">
          <ToggleDarkModeButton />

          <RouterLink to="/login">
            <button class="rounded-xl text-sm px-4 py-2 hover:bg-muted transition-colors">
              Sign in
            </button>
          </RouterLink>
          <RouterLink to="/register">
            <button
              class="gradient-primary text-white rounded-xl text-sm px-4 py-2 shadow-glow hover:opacity-90 transition-opacity border-0"
            >
              Get Started
            </button>
          </RouterLink>
        </div>

        <div class="md:hidden flex items-center gap-2">
          <ToggleDarkModeButton />

          <button
            class="rounded-xl p-2 hover:bg-muted transition-colors"
            @click="mobileOpen = !mobileOpen"
          >
            <XIcon v-if="mobileOpen" class="w-5 h-5" />
            <MenuIcon v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-border px-4 pb-4"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.href"
          class="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <div class="flex gap-2 mt-3">
          <RouterLink to="/login" class="flex-1">
            <button
              class="w-full rounded-xl border border-border px-4 py-2 text-sm hover:bg-muted transition-colors"
            >
              Sign in
            </button>
          </RouterLink>
          <RouterLink to="/register" class="flex-1">
            <button
              class="w-full gradient-primary text-white rounded-xl border-0 px-4 py-2 text-sm"
            >
              Get Started
            </button>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>
