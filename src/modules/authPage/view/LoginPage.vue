<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import { ArrowRight, Briefcase, Mail } from '@lucide/vue'
import { Motion } from 'motion-v'
import { useSignIn } from '../composables/auth'
import InputPass from '@/shared/components/InputPass.vue'

const { form, signIn, loading } = useSignIn()

const analyticItems = [
  ['50K+', 'Students'],
  ['12K+', 'Internships'],
  ['94%', 'Placed'],
  ['3.5K+', 'Companies'],
]
</script>

<template>
  <div class="min-h-screen bg-background flex">
    <div
      class="hidden lg:flex flex-1 gradient-hero relative overflow-hidden items-center justify-center"
    >
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>
      <div class="relative text-center px-12">
        <div
          class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
        >
          <Briefcase class="w-8 h-8 text-white" />
        </div>
        <h2 class="font-poppins font-bold text-4xl text-white mb-4">Welcome Back!</h2>
        <p class="text-white/80 text-lg leading-relaxed max-w-sm">
          Thousands of students are landing internships every day. Your next opportunity awaits.
        </p>
        <div class="mt-12 grid grid-cols-2 gap-4 text-center">
          <div
            v-for="(analyticItem, i) in analyticItems"
            :key="i"
            class="bg-white/15 backdrop-blur-sm rounded-2xl p-4"
          >
            <p class="font-poppins font-bold text-2xl text-white">{{ analyticItem[0] }}</p>
            <p class="text-white/70 text-sm">{{ analyticItem[1] }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12">
      <Motion
        is="div"
        :initial="{ opacity: 0, x: 20 }"
        :animate="{ opacity: 1, x: 0 }"
        class="w-full max-w-md"
      >
        <div class="lg:hidden flex items-center gap-2 mb-8">
          <div class="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center">
            <Briefcase class="w-4 h-4 text-white" />
          </div>
          <span class="font-poppins font-bold text-xl text-gradient">InternMatch</span>
        </div>

        <div class="mb-8">
          <h1 class="font-poppins font-bold text-3xl text-foreground mb-2">Sign in</h1>
          <p class="text-muted-foreground">
            Don't have an account?
            <RouterLink to="/register" class="text-primary hover:underline font-medium"
              >Create one free</RouterLink
            >
          </p>
        </div>

        <form class="space-y-5" @submit.prevent="signIn">
          <div class="space-y-2">
            <LabelBase htmlFor="email" class="text-sm font-medium">Email address</LabelBase>
            <div class="relative">
              <Mail
                class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
              />
              <InputBase
                placeholder="you@university.edu"
                v-model="form.email"
                class="pl-10 rounded-xl py-5"
                required
              />
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <LabelBase htmlFor="password" class="text-sm font-medium">Password</LabelBase>
              <a href="#" class="text-xs text-primary hover:underline">Forgot password?</a>
            </div>

            <InputPass v-model="form.password" />
          </div>

          <ButtonBase
            type="submit"
            :disabled="loading"
            class="w-full gradient-primary text-white border-0 rounded-xl py-5 font-semibold text-base shadow-glow hover:opacity-90"
          >
            <span v-if="loading">Signing in...</span>
            <span v-else>Sign in</span>
            <ArrowRight v-if="!loading" class="w-4 h-4 ml-2" />
          </ButtonBase>
        </form>
      </Motion>
    </div>
  </div>
</template>
