<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { useProfile } from '../composables/useProfile'
import BasicFormSection from '../components/BasicFormSection.vue'
import EducationFormSection from '../components/EducationFormSection.vue'
import EmailSection from '../components/EmailSection.vue'
import ChangePassword from '../components/ChangePassword.vue'
import ProfileBase from '@/shared/components/ProfileBase.vue'
import SectionBase from '@/shared/components/SectionBase.vue'

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
} = useProfile()

const name = user.student_info.name.first_name + ' ' + user.student_info.name.last_name
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
        v-if="activeSection === 'basic' || activeSection === 'education'"
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
        :section="['basic', 'education', 'email', 'password']"
      />
    </template>

    <template #form-section>
      <BasicFormSection v-if="activeSection === 'basic'" v-model:user="user" />

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
