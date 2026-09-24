<script setup lang="ts">
import InputBase from '@/shared/components/InputBase.vue'
import LabelBase from '@/shared/components/LabelBase.vue'
import { Motion } from 'motion-v'
import { useSkill } from '../composables/useSkill'
import { useCourse } from '../composables/useCourse'
import { onMounted } from 'vue'
import type { UserStudent } from '@/shared/types'
import SkillChip from '@/shared/components/SkillChip.vue'

const { searchSkill, skillResult, showSkillChoices } = useSkill()
const { searchCourse, courseResult, showCourseChoices } = useCourse()

const user = defineModel<UserStudent>('user', { required: true })

const emit = defineEmits<{
  (e: 'addSkill', id: number): void
  (e: 'removeSkill', id: number): void
  (e: 'addCourse', id: number): void
}>()

const addCourse = (id: number, name: string) => {
  showCourseChoices.value = false
  searchCourse.value = name
  emit('addCourse', id)
}

const addSkill = (id: number) => {
  showSkillChoices.value = false
  emit('addSkill', id)
}

onMounted(() => (searchCourse.value = user.value.student_info.course.name))
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, x: 10 }"
    :animate="{ opacity: 1, x: 0 }"
    class="bg-card rounded-2xl border border-border shadow-card p-6 space-y-4"
  >
    <h3 class="font-semibold text-foreground">Education</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="space-y-1.5">
        <LabelBase>University / College</LabelBase>
        <InputBase v-model="user.student_info.school" placeholder="e.g. MIT" class="rounded-xl" />
      </div>
      <div class="space-y-1.5">
        <LabelBase>Major / Field of Study</LabelBase>

        <div
          v-if="showCourseChoices"
          class="fixed inset-0 z-10"
          @click="showCourseChoices = false"
        />

        <div class="relative">
          <InputBase
            v-model="searchCourse"
            placeholder="e.g. Computer Science"
            class="rounded-xl"
            @focus="showCourseChoices = true"
          />

          <div
            v-if="showCourseChoices"
            class="absolute z-20 bottom-10 mt-2 w-full max-h-60 overflow-y-auto rounded-2xl border border-border bg-card shadow-card p-1.5 space-y-0.5 transition-all"
          >
            <button
              v-for="course in courseResult"
              :key="course.id"
              type="button"
              @click="addCourse(course.id, course.name)"
              class="w-full text-left px-3 py-2 rounded-xl text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {{ course.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-1.5">
      <LabelBase>Skills</LabelBase>

      <div v-if="showSkillChoices" class="fixed inset-0 z-10" @click="showSkillChoices = false" />

      <div class="relative mb-2">
        <InputBase
          v-model="searchSkill"
          placeholder="Add a skill (e.g. React, Python)"
          class="rounded-xl"
          @focus="showSkillChoices = true"
        />

        <div
          v-if="showSkillChoices"
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
        <SkillChip
          v-for="skill in user.student_info.student_skill"
          :key="skill.id"
          :removeable="true"
          @remove-skill="emit('removeSkill', skill.id)"
        >
          {{ skill.name }}
        </SkillChip>
      </div>
    </div>
  </Motion>
</template>
