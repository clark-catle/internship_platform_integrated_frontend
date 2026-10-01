<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import InputBase from '@/shared/components/InputBase.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import { Motion } from 'motion-v'
import { Mail } from '@lucide/vue'
import type { User } from '@/shared/types'
import { useEmail } from '../composables/useEmail'

const user = defineModel<User>('user', { required: true })

const emit = defineEmits<{
  (e: 'changeEmail', email: string): void
}>()

const { showChangeEmail, newEmail, openChangeEmail, cancelChangeEmail } = useEmail()
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, x: 10 }"
    :animate="{ opacity: 1, x: 0 }"
    class="bg-card rounded-2xl border border-border shadow-card p-6 space-y-4"
  >
    <h3 class="font-semibold text-foreground flex items-center gap-2">
      <Mail class="w-4 h-4" /> Email Address
    </h3>

    <div class="space-y-1.5">
      <LabelBase>Current Email</LabelBase>
      <div class="flex flex-col sm:flex-row gap-3">
        <InputBase :model-value="user.email" disabled class="rounded-xl bg-muted flex-1" />

        <ButtonBase
          v-if="!showChangeEmail"
          variant="outline"
          class="rounded-xl shrink-0"
          @click="openChangeEmail"
        >
          Change
        </ButtonBase>
      </div>
    </div>

    <Motion
      v-if="showChangeEmail"
      as="div"
      :initial="{ opacity: 0, height: 0 }"
      :animate="{ opacity: 1, height: 'auto' }"
      class="space-y-3 pt-2 border-t border-border"
    >
      <form action="" @submit.prevent="emit('changeEmail', newEmail)" class="space-y-1.5">
        <div>
          <LabelBase>New Email</LabelBase>
          <InputBase
            v-model="newEmail"
            type="email"
            placeholder="you@example.com"
            class="rounded-xl"
          />
        </div>

        <div class="flex gap-2 justify-end">
          <ButtonBase variant="outline" class="rounded-xl" @click="cancelChangeEmail">
            Cancel
          </ButtonBase>
          <ButtonBase class="gradient-primary text-white border-0 rounded-xl">
            Save Email
          </ButtonBase>
        </div>
      </form>
    </Motion>
  </Motion>
</template>
