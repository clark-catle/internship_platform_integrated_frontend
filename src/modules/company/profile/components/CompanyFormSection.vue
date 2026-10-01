<script setup lang="ts">
import InputBase from '@/shared/components/InputBase.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import TextAreaBase from '@/shared/components/TextAreaBase.vue'
import type { company as companyType } from '@/shared/types'
import { User } from '@lucide/vue'
import { Motion } from 'motion-v'

const company = defineModel<companyType>('company', { required: true })
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, x: 10 }"
    :animate="{ opacity: 1, x: 0 }"
    class="bg-card rounded-2xl border border-border shadow-card p-6 space-y-4"
  >
    <h3 class="font-semibold text-foreground flex items-center gap-2">
      <User class="w-4 h-4" /> Basic Information
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="space-y-1.5">
        <LabelBase>Company Name</LabelBase>
        <InputBase v-model="company.company_name" disabled class="rounded-xl bg-muted" />
      </div>
      <div class="space-y-1.5">
        <LabelBase>City</LabelBase>
        <InputBase v-model="company.location.city" disabled class="rounded-xl bg-muted" />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Region</LabelBase>
        <InputBase v-model="company.location.region" disabled class="rounded-xl bg-muted" />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Website</LabelBase>
        <InputBase v-model="company.website" disabled class="rounded-xl bg-muted" />
      </div>
      <div class="space-y-1.5 col-span-2">
        <LabelBase>Company Description</LabelBase>
        <TextAreaBase v-model="company.description" disabled class="rounded-xl bg-muted" />
      </div>
    </div>
  </Motion>
</template>
