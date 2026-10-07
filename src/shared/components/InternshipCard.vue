<script lang="ts" setup>
import { Motion } from 'motion-v'
import type { internshipCardPropType } from '../../modules/student/internship/type'
import { ArrowRight, Building2, Clock, DollarSign, MapPin } from '@lucide/vue'
import type { internshipSetup } from '@/shared/types'
import { RouterLink } from 'vue-router'
import { internshipCompany } from '@/data/internship'
import { roleFromUrl } from '@/utils/roleFromUrl'

const { internship, index } = defineProps<internshipCardPropType>()

const typeColors: Record<internshipSetup, string> = {
  remote: 'badge-success',
  'on site': 'badge-info',
  hybrid: 'badge-warning',
}

const logoPlaceholder = internship.title[0]?.toUpperCase() || 'C'

const domainColors: Record<internshipSetup, string> = {
  hybrid: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  remote: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  'on site': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
}

const company = internshipCompany(internship.companyId)

const role = roleFromUrl()

const linkName =
  role === 'admin' ? 'adminInternshipDetail' : role === 'student' ? 'studentInternshipDetail' : ''
</script>

<template>
  <Motion
    as="div"
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ delay: index * 0.05, duration: 0.3 }"
    class="group relative bg-card rounded-2xl border border-border p-5 card-hover cursor-pointer shadow-card"
  >
    <div class="flex items-start gap-3 mb-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-lg text-white shadow-md gradient-primary"
      >
        <img
          v-if="company"
          src="https://www.gogol.com"
          alt=""
          class="w-full h-full rounded-xl object-cover"
        />
        <div v-else>{{ logoPlaceholder }}</div>
      </div>
      <div class="flex-1 min-w-0">
        <h3
          class="font-semibold text-foreground text-sm leading-tight mb-0.5 group-hover:text-primary transition-colors line-clamp-1"
        >
          {{ internship.title }}
        </h3>
        <p class="text-muted-foreground text-xs flex items-center gap-1">
          <Building2 class="w-3 h-3" /> {{ company?.company_name }}
        </p>
      </div>
    </div>

    <div class="flex flex-wrap gap-1.5 mb-4">
      <span
        class="text-xs font-medium px-2 py-0.5 rounded-full capitalize"
        :class="[typeColors[internship.setup] || 'badge-primary']"
      >
        {{ internship.setup }}
      </span>

      <!--   {internship.domain && (
          <span class={`text-xs font-medium px-2 py-0.5 rounded-full ${domainColors[internship.domain] || "badge-primary"}`}>
            {internship.domain}
          </span>
        )} -->
      <span
        v-for="skill in internship.internship_skill"
        :key="skill.name"
        class="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
      >
        {{ skill.name }}
      </span>
    </div>

    <div class="space-y-1.5 mb-4">
      <div class="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin class="w-3.5 h-3.5 text-primary" /> {{ internship.location.city }}
      </div>

      <div class="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock class="w-3.5 h-3.5 text-primary" /> {{ internship.duration }}
        {{ internship.duration_unit }}
      </div>

      <div class="flex items-center gap-1.5 text-xs text-muted-foreground capitalize">
        <DollarSign class="w-3.5 h-3.5 text-primary" /> {{ internship.allowance }}
      </div>
    </div>

    <div class="flex items-center justify-between pt-3 border-t border-border">
      <RouterLink
        :to="{ name: linkName, params: { id: internship.id } }"
        size="sm"
        class="gradient-primary text-white border-0 rounded-lg text-xs h-8 hover:opacity-90 flex flex-row items-center justify-center p-4"
      >
        {{ role === 'student' ? 'Apply Now' : 'View Internship' }}
        <ArrowRight class="w-3 h-3 ml-1" />
      </RouterLink>
    </div>
  </Motion>
</template>
