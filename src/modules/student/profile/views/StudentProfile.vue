<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { Motion } from 'motion-v'
import { useProfile } from '../composables/useProfile'
import { Camera, Save } from '@lucide/vue'
import SectionBase from '../components/SectionBase.vue'
import LoadingBase from '@/shared/components/LoadingBase.vue'
import BasicFormSection from '../components/BasicFormSection.vue'
import EducationFormSection from '../components/EducationFormSection.vue'
import EmailSection from '../components/EmailSection.vue'
import ChangePassword from '../components/ChangePassword.vue'

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
</script>

<template>
  <LoadingBase v-if="loading" />

  <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-poppins font-bold text-2xl sm:text-3xl text-foreground">My Profile</h1>
        <p class="text-muted-foreground mt-1">
          Complete your profile to attract better opportunities
        </p>
      </div>
      <ButtonBase
        v-if="activeSection === 'basic' || activeSection === 'education'"
        onClick="{save}"
        :disabled="saving"
        class="gradient-primary text-white border-0 rounded-xl gap-2 shadow-glow hover:opacity-90"
      >
        <Save class="w-4 h-4" /> {{ saving ? 'Saving...' : 'Save Changes' }}
      </ButtonBase>
    </div>

    <Motion
      as="div"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      class="bg-card rounded-2xl border border-border shadow-card mb-6 overflow-hidden"
    >
      <div class="h-32 gradient-hero" />
      <div class="px-6 pb-6">
        <div class="flex items-end gap-4 -mt-10">
          <div class="relative">
            <div
              class="w-20 h-20 rounded-2xl border-4 border-card gradient-primary flex items-center justify-center text-white font-bold text-2xl shadow-card"
            >
              {{ user.student_info.name.first_name[0]?.toUpperCase() }}
            </div>
            <button
              class="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white shadow-sm"
            >
              <Camera class="w-3.5 h-3.5" />
            </button>
          </div>
          <div class="pb-1">
            <h2 class="font-poppins font-semibold text-lg text-foreground">
              {{ user.student_info.name.first_name + ' ' + user.student_info.name.last_name }}
            </h2>
            <p class="text-muted-foreground text-sm">{{ user.email }}</p>
          </div>
        </div>
      </div>
    </Motion>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <SectionBase v-model:activeSection="activeSection" />

      <div class="lg:col-span-3 space-y-5">
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
      </div>
    </div>

    <!-- {/* Avatar section */}
          

          
            {/* Section nav */}
            

            {/* Form */}
          
              {activeSection === "basic" && (
                
              )}

              {activeSection === "education" && (
                
              )}

              {activeSection === "links" && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                  class="bg-card rounded-2xl border border-border shadow-card p-6 space-y-4">
                  <h3 class="font-semibold text-foreground">Links & Portfolio</h3>
                  {[
                    { key: "portfolio_url", label: "Portfolio URL", icon: LinkIcon, placeholder: "https://yourportfolio.com" },
                    { key: "linkedin_url", label: "LinkedIn", icon: Linkedin, placeholder: "https://linkedin.com/in/..." },
                    { key: "github_url", label: "GitHub", icon: Github, placeholder: "https://github.com/..." },
                  ].map(({ key, label, icon: Icon, placeholder }) => (
                    <div key={key} class="space-y-1.5">
                      <Label class="flex items-center gap-1.5"><Icon class="w-3.5 h-3.5" /> {label}</Label>
                      <Input value={profile?.[key] || ""} onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                        placeholder={placeholder} class="rounded-xl" />
                    </div>
                  ))}
                </motion.div>
              )}
           
           -->
  </div>
</template>
