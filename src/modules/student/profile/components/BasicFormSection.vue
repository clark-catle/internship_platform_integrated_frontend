<script setup lang="ts">
import InputBase from '@/shared/components/InputBase.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import { X } from '@lucide/vue'
import { Motion } from 'motion-v'
import type { UserStudent } from '../type'
import { useSkill } from '../composables/useSkill'

const model = defineModel<UserStudent>('user', { required: true })

const { searchQuery, skillResult, showChoices } = useSkill()

const emit = defineEmits<{
  (e: 'addSkill', id: number): void
  (e: 'removeSkill', id: number): void
}>()

const addSkill = (id: number) => {
  showChoices.value = false
  emit('addSkill', id)
}
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
          v-model="model.student_info.name.first_name"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Last Name</LabelBase>
        <InputBase
          v-model="model.student_info.name.last_name"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Cellphone Number</LabelBase>
        <InputBase
          v-model="model.student_info.cellphone_number"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
      <div class="space-y-1.5">
        <LabelBase>City</LabelBase>
        <InputBase
          v-model="model.student_info.location.city"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Region</LabelBase>
        <InputBase
          v-model="model.student_info.location.region"
          disabled
          class="rounded-xl bg-muted"
        />
      </div>
    </div>
    <div class="space-y-1.5">
      <LabelBase>Skills</LabelBase>

      <div v-if="showChoices" class="fixed inset-0" @click="showChoices = false" />

      <div class="relative flex gap-2 mb-2 group">
        <InputBase
          v-model="searchQuery"
          placeholder="Add a skill (e.g. React, Python)"
          class="rounded-xl"
          @focus="showChoices = true"
        />

        <div
          v-if="showChoices"
          class="absolute z-20 bottom-10 mt-2 w-1/3 max-h-60 overflow-y-auto rounded-2xl border border-border bg-card shadow-card p-1.5 space-y-0.5 transition-all"
        >
          <button
            v-for="skill in skillResult"
            :key="skill.id"
            type="button"
            @click="addSkill(skill.id)"
            class="w-full text-left px-3 py-2 rounded-xl text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {{ skill.name }}
          </button>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in model.student_info.student_skill"
          :key="skill.id"
          class="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground font-medium"
        >
          {{ skill.name }}

          <button
            @click="emit('removeSkill', skill.id)"
            class="hover:text-destructive transition-colors"
          >
            <X class="w-3 h-3" />
          </button>
        </span>
      </div>
    </div>
  </Motion>
</template>
