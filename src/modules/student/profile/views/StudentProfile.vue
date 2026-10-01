<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { useStudentProfile } from '../composables/useStudentProfile.ts'
import EducationFormSection from '../components/EducationFormSection.vue'
import ProfileBase from '@/shared/components/ProfileBase.vue'
import SectionBase from '@/shared/components/SectionBase.vue'
import EmailSection from '@/shared/components/EmailSection.vue'
import ChangePassword from '@/shared/components/ChangePassword.vue'
import StudentFormSection from '../components/StudentFormSection.vue'

const {
  user,
  loading,
  saving,
  activeSection,
  addSkill,
  removeSkill,
  addCourse,
  changeEmail,
  changePassword,
} = useStudentProfile()

const name = user.student_info.name.first_name + ' ' + user.student_info.name.last_name
console.log(user.student_info)
</script>

<template>
  <ProfileBase :loading="loading" :name="name" :email="user.email">
    <template #page-sub-title>
      <p class="text-muted-foreground mt-1">
        Complete your profile to attract better opportunities
      </p>
    </template>

    <template #save-action-button>
      <ButtonBase
        v-if="activeSection === 'student' || activeSection === 'education'"
        onClick="{save}"
        :disabled="saving"
        class="gradient-primary text-white border-0 rounded-xl gap-2 shadow-glow hover:opacity-90"
      >
        <Save class="w-4 h-4" /> {{ saving ? 'Saving...' : 'Save Changes' }}
      </ButtonBase>
    </template>

    <template #tab-section>
      <SectionBase
        v-model:activeSection="activeSection"
        :section="['student', 'education', 'email', 'password']"
      />
    </template>

    <template #form-section>
      <StudentFormSection v-if="activeSection === 'student'" v-model:student="user.student_info" />

      <EducationFormSection
        v-else-if="activeSection === 'education'"
        v-model:user="user"
        @addSkill="addSkill"
        @removeSkill="removeSkill"
        @addCourse="addCourse"
      />

      <EmailSection
        v-model:user="user"
        @changeEmail="changeEmail"
        v-else-if="activeSection === 'email'"
      />

      <ChangePassword v-else-if="activeSection === 'password'" @changePassword="changePassword" />
    </template>
  </ProfileBase>
</template>
