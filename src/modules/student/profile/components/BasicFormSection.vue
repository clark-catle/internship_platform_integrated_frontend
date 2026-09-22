<script setup lang="ts">
import InputBase from '@/shared/components/InputBase.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import { Motion } from 'motion-v'
import type { UserStudent } from '../type'

const user = defineModel<UserStudent>('user', { required: true })
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, x: 10 }"
    :animate="{ opacity: 1, x: 0 }"
    class="bg-card rounded-2xl border border-border shadow-card p-6 space-y-4"
  >
    <h3 class="font-semibold text-foreground">Basic Information</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="space-y-1.5">
        <LabelBase>First Name</LabelBase>
        <InputBase
          v-model="user.student_info.name.first_name"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Last Name</LabelBase>
        <InputBase
          v-model="user.student_info.name.last_name"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Cellphone Number</LabelBase>
        <InputBase
          v-model="user.student_info.cellphone_number"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
      <div class="space-y-1.5">
        <LabelBase>City</LabelBase>
        <InputBase v-model="user.student_info.location.city" disabled class="rounded-xl bg-muted" />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Region</LabelBase>
        <InputBase
          v-model="user.student_info.location.region"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
    </div>
  </Motion>
</template>
