<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import InputPass from '@/shared/components/InputPass.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import { ArrowRight } from '@lucide/vue'
import { Motion } from 'motion-v'
import type { RegisterComponentProp, signUpForm } from '../types'
import FormError from '@/shared/components/FormError.vue'

const props = defineProps<RegisterComponentProp>()
const form = defineModel<signUpForm>('form', { required: true })
const emit = defineEmits(['submit'])
</script>

<template>
  <Motion
    as-="div"
    :initial="{ opacity: 0, x: 20 }"
    :animate="{ opacity: 1, x: 0 }"
    :exit="{ opacity: 0, x: -20 }"
  >
    <h1 class="font-poppins font-bold text-2xl text-foreground mb-2 text-center">
      <span v-if="role === 'student'">Create Student Account</span>
      <span v-else>Create Company Account</span>
    </h1>
    <p class="text-muted-foreground text-center text-sm mb-8">
      <span v-if="role === 'student'">Start finding your dream internship</span>
      <span v-else>Start finding top talent</span>
    </p>

    <form class="space-y-5" @submit.prevent="emit('submit')">
      <div class="space-y-4">
        <div class="space-y-1.5">
          <LabelBase>Email</LabelBase>
          <InputBase
            v-model="form.email"
            :placeholder="role === 'student' ? 'Jane Smith' : 'Acme Corp'"
            class="rounded-xl py-5"
            type="email"
            required
          />

          <FormError :error="props.fieldErrors.email" />
        </div>

        <div class="space-y-1.5">
          <LabelBase>Password</LabelBase>

          <InputPass v-model="form.password" />

          <FormError :error="props.fieldErrors.password" />
        </div>

        <div class="space-y-1.5">
          <LabelBase>Confirm Password</LabelBase>

          <InputPass v-model="form.confirm_password" />

          <FormError :error="props.fieldErrors.confirm_password" />
        </div>
      </div>

      <FormError :error="error ? [error] : undefined" />

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
</template>
