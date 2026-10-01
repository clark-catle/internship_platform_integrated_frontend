<script lang="ts" setup>
import ProfileBase from '@/shared/components/ProfileBase.vue'
import { useProfile } from '../composables/useProfile'
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { Save } from '@lucide/vue'
import SectionBase from '@/shared/components/SectionBase.vue'
import EmailSection from '@/shared/components/EmailSection.vue'
import ChangePassword from '@/shared/components/ChangePassword.vue'
import CompanyFormSection from '../components/CompanyFormSection.vue'

const { user, loading, saving, activeSection, changeEmail, changePassword } = useProfile()
</script>

<template>
  <ProfileBase :loading="loading" :name="user.company_info.company_name" :email="user.email">
    <template #page-sub-title>
      <p class="text-muted-foreground mt-1">Complete your profile to attract more applicants</p>
    </template>

    <template #save-action-button>
      <ButtonBase
        v-if="activeSection === 'company'"
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
        :section="['company', 'email', 'password']"
      />
    </template>

    <template #form-section>
      <CompanyFormSection v-if="activeSection === 'company'" v-model:company="user.company_info" />

      <EmailSection
        v-model:user="user"
        @changeEmail="changeEmail"
        v-else-if="activeSection === 'email'"
      />

      <ChangePassword v-else-if="activeSection === 'password'" @changePassword="changePassword" />
    </template>
  </ProfileBase>
</template>
