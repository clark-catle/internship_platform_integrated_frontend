<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue'
import { AnimatePresence, Motion } from 'motion-v'
import { useSignUp } from '../composables/auth'
import ButtonBase from '@/shared/components/ButtonBase.vue'
import RegisterFormStep1 from '../components/RegisterFormStep1.vue'
import RegisterFormStep2 from '../components/RegisterFormStep2.vue'

const { form, loading, step, changeRole, addAcc } = useSignUp()
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
          <RegisterFormStep1 v-if="step === 1" @next="changeRole" :role="form.role" />

          <RegisterFormStep2
            v-else
            @submit="addAcc"
            :form="form.acc"
            :loading="loading"
            :role="form.role"
          />
        </AnimatePresence>
      </div>
    </Motion>
  </div>
</template>
