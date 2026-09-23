<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import { Motion } from 'motion-v'
import { Lock } from '@lucide/vue'
import { usePassword } from '../composables/usePassword'
import type { ChangePassword } from '../type'

const emit = defineEmits<{
  (e: 'changePassword', payload: ChangePassword): void
}>()

const { form, passwordNotMatch, clearForm } = usePassword()

const submit = () => {
  if (form.newPassword !== form.confirmPassword) return (passwordNotMatch.value = true)

  if (passwordNotMatch.value) passwordNotMatch.value = false

  console.log('google')
  clearForm()

  emit('changePassword', form)
}
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, x: 10 }"
    :animate="{ opacity: 1, x: 0 }"
    class="bg-card rounded-2xl border border-border shadow-card p-6 space-y-4"
  >
    <h3 class="font-semibold text-foreground flex items-center gap-2">
      <Lock class="w-4 h-4" /> Change Password
    </h3>

    <form action="" class="space-y-4 max-w-full" @submit.prevent="submit()">
      <div class="space-y-1.5">
        <LabelBase>Old Password</LabelBase>
        <InputBase
          v-model="form.oldPassword"
          type="password"
          placeholder="Enter current password"
          class="rounded-xl"
          required
        />
      </div>

      <div class="space-y-1.5">
        <LabelBase>New Password</LabelBase>
        <InputBase
          v-model="form.newPassword"
          type="password"
          placeholder="Enter new password"
          class="rounded-xl"
          required
        />
      </div>

      <div class="space-y-1.5">
        <LabelBase>Confirm New Password</LabelBase>
        <InputBase
          v-model="form.confirmPassword"
          type="password"
          placeholder="Re-enter new password"
          class="rounded-xl"
          required
        />

        <p v-if="passwordNotMatch" class="text-xs text-destructive">Passwords do not match</p>
      </div>

      <ButtonBase class="gradient-primary text-white border-0 rounded-xl">
        Update Password
      </ButtonBase>
    </form>
  </Motion>
</template>
