<script setup lang="ts">
import { GraduationCap, Key, Mail, User } from '@lucide/vue'
import type { SectionBaseProp, ProfileSectionLogo } from '../../modules/student/profile/type'
import type { ProfileSection } from '@/shared/types'

const { section } = defineProps<SectionBaseProp>()

const activeSection = defineModel<ProfileSection>('activeSection', { required: true })

const sectionLogo: ProfileSectionLogo = {
  admin: User,
  company: User,
  student: User,
  education: GraduationCap,
  email: Mail,
  password: Key,
}

const change = (val: ProfileSection) => {
  activeSection.value = val
}
</script>

<template>
  <div class="lg:col-span-1">
    <div class="bg-card rounded-2xl border border-border shadow-card p-3 space-y-1">
      <button
        v-for="(s, i) in section"
        :key="i"
        class="capitalized w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
        :class="[
          activeSection === s
            ? 'gradient-primary text-white'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        ]"
        @click="change(s)"
      >
        <component :is="sectionLogo[s]" class="w-4 h-4" /> {{ s }}
      </button>
    </div>
  </div>
</template>
