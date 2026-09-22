<script setup lang="ts">
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { useApplication } from '../composables/useApplications'
import type { applicationStatusTab } from '../type'
import { Building2, Calendar, ChevronDown, ChevronUp, FileText } from '@lucide/vue'
import { AnimatePresence, Motion } from 'motion-v'
import { formatDistanceToNow } from 'date-fns'
import TimelineTracker from '../components/TimelineTracker.vue'
import ApplicationProgressBadge from '../components/ApplicationProgressBadge.vue'
import { ref } from 'vue'

const { applications, filteredApplication, loading, activeTab, changeTab } = useApplication()

const expandedApplication = ref<number | null>(null)

const count = (val: applicationStatusTab) =>
  val === 'all'
    ? applications.value.length
    : applications.value.filter((app) => app.status === val).length

const tabs: applicationStatusTab[] = ['all', 'pending', 'in review', 'accepted', 'rejected']

/**
 * if the passed id is the id that was currently opened, it will be closed,
 * but if not, it will open another accordion
 */
const toggle = (id: number) => {
  if (expandedApplication.value === id) return (expandedApplication.value = null)

  return (expandedApplication.value = id)
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="font-poppins font-bold text-2xl sm:text-3xl text-foreground">My Applications</h1>
      <p class="text-muted-foreground mt-1">Track the status of all your internship applications</p>
    </div>

    <div class="flex gap-2 mb-6 flex-wrap">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize"
        :class="[
          activeTab === tab
            ? 'gradient-primary text-white shadow-sm'
            : 'bg-card ring ring-border text-muted-foreground hover:text-foreground',
        ]"
        @click="changeTab(tab)"
      >
        {{ tab }}
        {{ count(tab) }}
      </button>
    </div>

    <div class="grid grid-cols-1">
      <div class="space-y-4" v-if="loading">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-card rounded-2xl border border-border p-5 animate-pulse"
        >
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-xl skeleton" />
            <div class="flex-1 space-y-2">
              <div class="h-4 skeleton rounded w-1/2" />
              <div class="h-3 skeleton rounded w-1/3" />
            </div>
          </div>
        </div>
      </div>

      <EmptyStateBase
        v-else-if="applications.length === 0"
        :icon="FileText"
        title="No applications yet"
        description="Start applying to internships and track your progress here."
      />

      <div v-else class="space-y-4">
        <AnimatePresence>
          <Motion
            as="div"
            v-for="(application, i) in filteredApplication"
            :key="application.id"
            :initial="{ opacity: 0, y: 15 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: i * 0.04 }"
            class="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          >
            <div
              class="flex items-center gap-4 p-5 cursor-pointer hover:bg-muted/30 transition-colors"
              @click="toggle(application.id)"
            >
              <div
                class="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0"
              >
                {{ application.internship?.company?.company_name[0]?.toUpperCase() }}
              </div>

              <div class="flex-1 min-w-0">
                <p class="font-semibold text-foreground truncate">
                  {{ application.internship?.title }}
                </p>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="text-xs text-muted-foreground flex items-center gap-1">
                    <Building2 class="w-3 h-3" />
                    {{ application.internship?.company?.company_name }}
                  </span>

                  <span class="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar class="w-3 h-3" />
                    {{ formatDistanceToNow(new Date(application.applied_at), { addSuffix: true }) }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <ApplicationProgressBadge
                  :progress="application.progress"
                  :status="application.status"
                />

                <!-- should show of the expanded list was this -->
                <!-- {expanded === app.id ? <ChevronUp class="w-4 h-4 text-muted-foreground" /> : <ChevronDown class="w-4 h-4 text-muted-foreground" />} -->
                <ChevronUp v-if="expandedApplication" class="w-4 h-4 text-muted-foreground" />
                <ChevronDown v-else class="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <AnimatePresence>
              <Motion
                v-if="expandedApplication === application.id"
                as="div"
                :initial="{ height: 0 }"
                :animate="{ height: 'auto' }"
                :exit="{ height: 0 }"
                class="overflow-hidden border-t border-border"
              >
                <div class="p-5 space-y-4">
                  <div>
                    <p
                      class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3"
                    >
                      Application Progress
                    </p>
                    <TimelineTracker
                      :progress="application.progress"
                      :status="application.status"
                    />
                  </div>

                  <div v-if="application.internship?.description">
                    <p
                      class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      Internship Description
                    </p>
                    <p
                      class="text-sm text-muted-foreground bg-muted rounded-xl p-3 leading-relaxed"
                    >
                      {{ application.internship?.description }}
                    </p>
                  </div>

                  <div v-if="application.internship?.requirements">
                    <p
                      class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      Internship Requirements
                    </p>
                    <p
                      class="text-sm text-muted-foreground bg-amber-50 dark:bg-amber-900/10 rounded-xl p-3 border border-amber-200 dark:border-amber-800"
                    >
                      {{ application.internship?.requirements }}
                    </p>
                  </div>
                </div>
              </Motion>
            </AnimatePresence>
          </Motion>
        </AnimatePresence>
      </div>

      <!-- <div class="lg:col-span-2">
              {loading ? (
                <div class="space-y-4">
                  {Array(3).fill(0).map((_, i) => (
                    <div key={i} class="bg-card rounded-2xl border border-border p-5 animate-pulse">
                      <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-xl skeleton" />
                        <div class="flex-1 space-y-2">
                          <div class="h-4 skeleton rounded w-1/2" />
                          <div class="h-3 skeleton rounded w-1/3" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <EmptyState icon={FileText} title="No applications yet" description="Start applying to internships and track your progress here." />
              ) : (
                <div class="space-y-4">
                  <AnimatePresence>
                    {filtered.map((app, i) => (
                      <motion.div key={app.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        class="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
                        <div class="flex items-center gap-4 p-5 cursor-pointer hover:bg-muted/30 transition-colors"
                          onClick={() => setExpanded(expanded === app.id ? null : app.id)}>
                          <div class="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {app.company_name?.[0]?.toUpperCase()}
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="font-semibold text-foreground truncate">{app.internship_title}</p>
                            <div class="flex items-center gap-2 mt-0.5">
                              <span class="text-xs text-muted-foreground flex items-center gap-1">
                                <Building2 class="w-3 h-3" /> {app.company_name}
                              </span>
                              {app.created_date && (
                                <span class="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar class="w-3 h-3" /> {formatDistanceToNow(new Date(app.created_date), { addSuffix: true })}
                                </span>
                              )}
                            </div>
                          </div>
                          <div class="flex items-center gap-3">
                            <ApplicationStatusBadge status={app.status} />
                            {expanded === app.id ? <ChevronUp class="w-4 h-4 text-muted-foreground" /> : <ChevronDown class="w-4 h-4 text-muted-foreground" />}
                          </div>
                        </div>

                        <AnimatePresence>
                          {expanded === app.id && (
                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                              class="overflow-hidden border-t border-border">
                              <div class="p-5 space-y-4">
                                <div>
                                  <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Application Progress</p>
                                  <TimelineTracker status={app.status} />
                                </div>
                                {app.cover_letter && (
                                  <div>
                                    <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cover Letter</p>
                                    <p class="text-sm text-muted-foreground bg-muted rounded-xl p-3 leading-relaxed">{app.cover_letter}</p>
                                  </div>
                                )}
                                {app.notes && (
                                  <div>
                                    <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recruiter Notes</p>
                                    <p class="text-sm text-muted-foreground bg-amber-50 dark:bg-amber-900/10 rounded-xl p-3 border border-amber-200 dark:border-amber-800">{app.notes}</p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div> -->

      <!-- <div class="lg:col-span-1">
        <div class="sticky top-6">
          <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            UI Preview
          </p>
          <ApplicationsMockUI />
        </div>
      </div> -->
    </div>
  </div>
</template>
