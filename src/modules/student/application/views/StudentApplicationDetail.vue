<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { ArrowLeft, Clock, FileText, MapPin, Wallet } from '@lucide/vue'
import SkillChip from '@/shared/components/SkillChip.vue'
import { useApplicationDetail } from '../composables/useApplicationDetail'
import TimelineTracker from '../components/TimelineTracker.vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { AnimatePresence, Motion } from 'motion-v'
import ApplicationProgressBadge from '../components/ApplicationProgressBadge.vue'

const route = useRoute()
const { application } = useApplicationDetail(Number(route.params.id))
</script>

<template>
  <AnimatePresence>
    <Motion
      :initial="{ opacity: 0, y: 15 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ delay: 0.04 }"
    >
      <div class="mx-auto max-w-3xl space-y-6">
        <RouterLink
          :to="{ name: 'studentApplication' }"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft class="h-4 w-4" />
          Back to applications
        </RouterLink>

        <EmptyStateBase
          v-if="!application"
          :icon="FileText"
          title="Application not found"
          description="Application not existing or not been found"
        />

        <template v-else>
          <div class="rounded-2xl border border-border bg-card p-6">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <img
                  v-if="application.internship?.company?.logo_url"
                  :src="application.internship.company.logo_url"
                  :alt="application.internship.company.company_name"
                  class="h-12 w-12 shrink-0 rounded-xl object-cover"
                />
                <div>
                  <h1 class="text-lg font-semibold text-card-foreground">
                    {{ application.internship?.title }}
                  </h1>
                  <p class="text-sm text-muted-foreground">
                    {{ application.internship?.company?.company_name }}
                  </p>
                </div>
              </div>

              <ApplicationProgressBadge
                :progress="application.progress"
                :status="application.status"
              />
            </div>
            <p class="mt-3 text-xs text-muted-foreground">
              Applied on {{ new Date(application.applied_at).toLocaleDateString() }}
            </p>

            <!-- Progress timeline -->
            <div class="mt-6">
              <TimelineTracker :progress="application.progress" :status="application.status" />
            </div>
          </div>

          <div v-if="application.internship" class="rounded-2xl border border-border bg-card p-6">
            <h2 class="mb-3 text-base font-semibold text-card-foreground">Internship details</h2>
            <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span class="flex items-center gap-1.5">
                <MapPin class="h-4 w-4" />
                {{
                  application.internship.location.city +
                  ' ' +
                  application.internship.location.region
                }}
              </span>
              <span class="badge-primary rounded-full px-2.5 py-1 text-xs font-medium capitalize">
                {{ application.internship.setup }}
              </span>
              <span class="flex items-center gap-1.5">
                <Clock class="h-4 w-4" />
                {{ application.internship.duration + ' ' + application.internship.duration_unit }}
              </span>
              <span class="flex items-center gap-1.5">
                <Wallet class="h-4 w-4" />
                {{ application.internship.allowance }}
              </span>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <SkillChip v-for="s in application.internship.internship_skill" :key="s.id">
                {{ s.name }}
              </SkillChip>
            </div>

            <div class="mt-4 space-y-5">
              <div class="rounded-2xl border border-border bg-card p-6">
                <h2 class="mb-2 text-base font-semibold text-card-foreground">Description</h2>
                <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {{ application.internship.description }}
                </p>
              </div>
              <div class="rounded-2xl border border-border bg-card p-6">
                <h2 class="mb-2 text-base font-semibold text-card-foreground">Requirements</h2>
                <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {{ application.internship.requirements }}
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-border bg-card p-6">
            <h2 class="mb-3 text-base font-semibold text-card-foreground">Your submitted resume</h2>
            <div
              class="flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-card-foreground"
            >
              <FileText class="h-4 w-4 text-muted-foreground" />
              No resume on file
            </div>
          </div>
        </template>
      </div>
    </Motion>
  </AnimatePresence>
</template>
