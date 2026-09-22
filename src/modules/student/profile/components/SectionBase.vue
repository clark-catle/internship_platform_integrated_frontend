<script setup lang="ts">
import { GraduationCap, Key, Mail, User } from '@lucide/vue'
import type { ProfileSection, SectionData } from '../type'

const activeSection = defineModel<ProfileSection>('activeSection', { required: true })

const sections: SectionData[] = [
  { key: 'basic', icon: User },
  { key: 'education', icon: GraduationCap },
  { key: 'email', icon: Mail },
  { key: 'password', icon: Key },
]

const change = (val: ProfileSection) => {
  activeSection.value = val
}
</script>

<template>
  <div class="lg:col-span-1">
    <div class="bg-card rounded-2xl border border-border shadow-card p-3">
      <button
        v-for="s in sections"
        :key="s.key"
        class="capitalized w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
        :class="[
          activeSection === s.key
            ? 'gradient-primary text-white'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        ]"
        @click="change(s.key)"
      >
        <component :is="s.icon" class="w-4 h-4" /> {{ s.key }}
      </button>
    </div>
  </div>
</template>
