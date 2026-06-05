<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { Building2, GraduationCap } from '@lucide/vue'
import { Motion } from 'motion-v'
import type { userRole } from '@/shared/types'
import type { cardRole } from '../types'
import { ref } from 'vue'

const props = defineProps<{ role?: userRole }>()

const emit = defineEmits(['next'])

const role = ref<userRole | undefined>(props.role)

const cardRoles: cardRole[] = [
  {
    key: 'student',
    icon: GraduationCap,
    title: "I'm a Student",
    desc: 'Find internships, track applications, build your career profile',
  },
  {
    key: 'company',
    icon: Building2,
    title: "I'm a Company",
    desc: 'Post internships, discover talent, manage applications',
  },
]

const handleNext = () => {
  if (!role.value) return

  emit('next', role.value)
}
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, x: 20 }"
    :animate="{ opacity: 1, x: 0 }"
    :exit="{ opacity: 0, x: -20 }"
  >
    <h1 class="font-poppins font-bold text-2xl text-foreground mb-2 text-center">
      Join InternMatch
    </h1>

    <p class="text-muted-foreground text-center text-sm mb-8">Choose how you'll use the platform</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <button
        v-for="cardRole in cardRoles"
        :key="cardRole.key"
        @click="role = cardRole.key"
        class="p-5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer"
        :class="[
          role === cardRole.key
            ? 'border-primary bg-accent'
            : 'border-border hover:border-primary/40 hover:bg-muted',
        ]"
      >
        <div
          class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
          :class="[role === cardRole.key ? 'gradient-primary' : 'bg-muted']"
        >
          <component
            :is="cardRole.icon"
            class="w-6 h-6"
            :class="[role === cardRole.key ? 'text-white' : 'text-muted-foreground']"
          />
        </div>
        <p class="font-semibold text-foreground mb-1">{{ cardRole.title }}</p>

        <p class="text-xs text-muted-foreground leading-relaxed">{{ cardRole.desc }}</p>
      </button>
    </div>

    <ButtonBase
      :disabled="!role"
      @click="handleNext"
      type="button"
      class="w-full gradient-primary text-white border-0 rounded-xl py-5 font-semibold shadow-glow hover:opacity-90 cursor-pointer"
    >
      Continue <ArrowRight class="w-4 h-4 ml-2" />
    </ButtonBase>
  </Motion>
</template>
