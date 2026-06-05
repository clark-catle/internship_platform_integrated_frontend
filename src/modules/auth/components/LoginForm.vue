<script setup lang="ts">
import LabelBase from '@/shared/components/LabelBase.vue'
import { useSignIn } from '../composables/auth'
import { ArrowRight, Mail } from '@lucide/vue'
import InputBase from '@/shared/components/InputBase.vue'
import InputPass from '@/shared/components/InputPass.vue'
import ButtonBase from '@/shared/components/ButtonBase.vue'

const { form, signIn, loading } = useSignIn()
</script>

<template>
  <form class="space-y-5" @submit.prevent="signIn">
    <div class="space-y-2">
      <LabelBase htmlFor="email" class="text-sm font-medium">Email address</LabelBase>
      <div class="relative">
        <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <InputBase
          placeholder="you@university.edu"
          v-model="form.email"
          class="pl-10 rounded-xl py-5"
          type="email"
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
</template>
