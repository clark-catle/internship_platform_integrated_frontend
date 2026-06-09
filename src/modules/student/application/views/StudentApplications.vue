<script setup lang="ts">
import { applicationTabs } from '@/data/student'
import { AnimatePresence } from 'motion-v'
import { ref } from 'vue'
import type { applicationTab } from '../type'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { FileText } from '@lucide/vue'
import { useApplication } from '../composables/useApplications'

const { loading, activeTab, changeTab } = useApplication()

const tabs = applicationTabs
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="font-poppins font-bold text-2xl sm:text-3xl text-foreground">My Applications</h1>
      <p class="text-muted-foreground mt-1">Track the status of all your internship applications</p>
    </div>

    <div class="flex gap-2 mb-6 flex-wrap">
      <!-- {tabs.map((tab) => {
              const count = tab === "all" ? applications.length : applications.filter((a) => a.status === tab).length;
              return (
                <button key={tab} @click="setActiveTab"
                  class=px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "gradient-primary text-white shadow-sm"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}>
                  {tab.replace("_", " ").replace(/^\w/, (c) => c.toUpperCase())} ({count})
                </button>
              );
            })}-->

      <button
        v-for="tab in tabs"
        :key="tab"
        @click="changeTab(tab)"
        class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
        :class="[
          activeTab === tab
            ? 'gradient-primary text-white shadow-sm'
            : 'bg-card border border-border text-muted-foreground hover:text-foreground',
        ]"
      >
        {{ tab.replace('_', ' ').replace(/^\w/, (c) => c.toUpperCase()) }} ({{ count }})
      </button>
    </div>

    <div v-if="loading" class="space-y-4">
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

    <!-- <div v-else>
      <EmptyStateBase
        v-if="filtered.length === 0"
        :icon="FileText"
        title="No applications yet"
        description="Start applying to internships and track your progress here."
      /> -->

    <!-- <div v-else class="space-y-4">
              <AnimatePresence>
                {filtered.map((app, i) => (
                  <motion.div key={app.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    class="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
                    <div class="flex items-center gap-4 p-5 cursor-pointer hover:bg-muted/30 transition-colors"
                      onClick={() => setExpanded(expanded === app.id ? null : app.id)}>
                      <div class="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
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
    </div>-->
  </div>
</template>
