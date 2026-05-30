<script setup lang="ts">
import { ArrowLeft, ArrowRight, Briefcase, Building2, Check, GraduationCap } from '@lucide/vue'
import { AnimatePresence, Motion } from 'motion-v'
import { ref } from 'vue'
import { useSignUp } from '../composables/auth'
import type { cardRole } from '../types'
import LabelBase from '@/shared/components/LabelBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputPass from '@/shared/components/InputPass.vue'

const { form, signUp, loading, changeRole } = useSignUp()

const step = ref<number>(1)

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
</script>

<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-4 py-12">
    <ButtonBase
      v-if="step == 2"
      variant="ghost"
      class="fixed top-4 left-4 z-50 flex"
      @click="step = 1"
    >
      <ArrowLeft class="w-4 h-4" />
      Back
    </ButtonBase>

    <Motion
      as="div"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      class="w-full max-w-lg"
    >
      <div class="text-center mb-8">
        <RouterLink to="/" class="inline-flex items-center gap-2">
          <div
            class="w-9 h-9 gradient-primary rounded-xl flex items-center justify-center shadow-glow"
          >
            <Briefcase class="w-5 h-5 text-white" />
          </div>
          <span class="font-poppins font-bold text-2xl text-gradient">InternMatch</span>
        </RouterLink>
      </div>

      <div class="flex items-center justify-center gap-2 mb-10">
        <div v-for="s in 2" :key="s" class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all"
            :class="[step >= s ? 'gradient-primary text-white' : 'bg-muted text-muted-foreground']"
          >
            <Check v-if="step > s" class="w-4 h-4" />
            <span v-else>{{ s }}</span>
          </div>

          <div
            v-if="s < 2"
            class="w-12 h-0.5 transition-colors"
            :class="[step > s ? 'bg-primary' : 'bg-border']"
          />
        </div>
      </div>

      <div class="bg-card rounded-3xl border border-border p-8 shadow-card">
        <AnimatePresence mode="wait">
          <Motion
            as="div"
            v-if="step === 1"
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :exit="{ opacity: 0, x: -20 }"
          >
            <h1 class="font-poppins font-bold text-2xl text-foreground mb-2 text-center">
              Join InternMatch
            </h1>

            <p class="text-muted-foreground text-center text-sm mb-8">
              Choose how you'll use the platform
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                v-for="cardRole in cardRoles"
                :key="cardRole.key"
                @click="changeRole(cardRole.key)"
                class="p-5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer"
                :class="[
                  form.role === cardRole.key
                    ? 'border-primary bg-accent'
                    : 'border-border hover:border-primary/40 hover:bg-muted',
                ]"
              >
                <div
                  class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  :class="[form.role === cardRole.key ? 'gradient-primary' : 'bg-muted']"
                >
                  <component
                    :is="cardRole.icon"
                    class="w-6 h-6"
                    :class="[form.role === cardRole.key ? 'text-white' : 'text-muted-foreground']"
                  />
                </div>
                <p class="font-semibold text-foreground mb-1">{{ cardRole.title }}</p>

                <p class="text-xs text-muted-foreground leading-relaxed">{{ cardRole.desc }}</p>
              </button>
            </div>

            <ButtonBase
              :disabled="!form.role"
              @click="step = 2"
              type="button"
              class="w-full gradient-primary text-white border-0 rounded-xl py-5 font-semibold shadow-glow hover:opacity-90 cursor-pointer"
            >
              Continue <ArrowRight class="w-4 h-4 ml-2" />
            </ButtonBase>
          </Motion>

          <Motion
            as-="div"
            v-else
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :exit="{ opacity: 0, x: -20 }"
          >
            <h1 class="font-poppins font-bold text-2xl text-foreground mb-2 text-center">
              <span v-if="form.role === 'student'">Create Student Account</span>
              <span v-else>Create Company Account</span>
            </h1>
            <p class="text-muted-foreground text-center text-sm mb-8">
              <span v-if="form.role === 'student'">Start finding your dream internship</span>
              <span v-else>Start finding top talent</span>
            </p>

            <form class="space-y-5" @submit.prevent="signUp">
              <div class="space-y-4">
                <div class="space-y-1.5">
                  <LabelBase>Email</LabelBase>
                  <InputBase
                    v-model="form.email"
                    :placeholder="form.role === 'student' ? 'Jane Smith' : 'Acme Corp'"
                    class="rounded-xl py-5"
                  />
                </div>

                <div class="space-y-1.5">
                  <LabelBase>Password</LabelBase>

                  <InputPass v-model="form.password" />
                </div>

                <div class="space-y-1.5">
                  <LabelBase>Confirm Password</LabelBase>

                  <InputPass v-model="form.confirmPassword" />
                </div>
              </div>

              <ButtonBase
                type="submit"
                :disabled="loading"
                class="w-full gradient-primary mt-6 text-white border-0 rounded-xl py-5 font-semibold shadow-glow hover:opacity-90"
              >
                <span v-if="loading">Creating Account...</span>
                <span v-else>Create Account</span>
                <ArrowRight v-if="!loading" class="w-4 h-4 ml-2" />
              </ButtonBase>
            </form>

            <p class="text-center text-xs text-muted-foreground mt-4">
              Already have an account?
              <RouterLink to="/login" class="text-primary hover:underline">Sign in</RouterLink>
            </p>
          </Motion>
        </AnimatePresence>
      </div>
    </Motion>
  </div>
</template>
