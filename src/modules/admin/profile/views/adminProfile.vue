<script lang="ts" setup>
import ProfileBase from '@/shared/components/ProfileBase.vue'
import SectionBase from '@/shared/components/SectionBase.vue'
import EmailSection from '@/shared/components/EmailSection.vue'
import ChangePassword from '@/shared/components/ChangePassword.vue'
import { useAdminProfile } from '../composables/useAdminProfile'

const { user, loading, activeSection, changeEmail, changePassword } = useAdminProfile()
</script>

<template>
  <ProfileBase :loading="loading" :name="user.email.split('@')[0]!" :email="user.email">
    <template #tab-section>
      <SectionBase v-model:activeSection="activeSection" :section="['email', 'password']" />
    </template>

    <template #form-section>
      <EmailSection
        v-model:user="user"
        @changeEmail="changeEmail"
        v-if="activeSection === 'email'"
      />

      <ChangePassword v-else-if="activeSection === 'password'" @changePassword="changePassword" />
    </template>
  </ProfileBase>
</template>
