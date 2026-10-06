<script setup lang="ts">
import { FileText, MapPin, Phone, School, Users } from '@lucide/vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { useManageStudents } from '../composables/useManageStudents'
import StudentModal from '../components/StudentModal.vue'
import SkillChip from '@/shared/components/SkillChip.vue'
import UserAccountInfo from '../components/UserAccountInfo.vue'
import { mockUserStudent } from '@/data/user.ts'
import StudentSearch from '../components/StudentSearch.vue'

const { students, search, viewingId, viewingInfo } = useManageStudents()
</script>

<template>
  <div class="space-y-6 main-wrapper">
    <StudentSearch v-model:search="search" />

    <EmptyStateBase v-if="students.length === 0" :icon="Users" title="No students yet" />

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      <button
        v-for="s in students"
        :key="s.id"
        type="button"
        class="card-hover flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-left"
        @click="viewingId = s.id"
      >
        <img
          :src="s.name.first_name"
          :alt="s.name.first_name"
          class="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <div class="min-w-0">
          <h3 class="truncate text-sm font-semibold text-card-foreground">
            {{ s.name.first_name }} {{ s.name.last_name }}
          </h3>
          <p class="truncate text-xs text-muted-foreground">{{ s.course.name }}</p>
        </div>
      </button>
    </div>

    <StudentModal
      v-if="viewingId !== null"
      :title="viewingInfo ? `${viewingInfo.name.first_name} ${viewingInfo.name.last_name}` : ''"
      @close="viewingId = null"
    >
      <div v-if="viewingInfo" class="space-y-4">
        <div class="flex items-start gap-4">
          <img
            :src="viewingInfo.name.first_name"
            :alt="viewingInfo.name.first_name"
            class="h-16 w-16 shrink-0 rounded-full object-cover"
          />
          <div>
            <h4 class="text-base font-semibold text-card-foreground">
              {{ viewingInfo.name.first_name }} {{ viewingInfo.name.last_name }}
            </h4>
            <p class="text-sm text-muted-foreground">{{ viewingInfo.course.name }}</p>
          </div>
        </div>

        <dl class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          <div>
            <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              School
            </dt>
            <dd class="mt-0.5 flex items-center gap-1.5 text-sm text-card-foreground">
              <School class="h-3.5 w-3.5 text-muted-foreground" />
              {{ viewingInfo.school }}
            </dd>
          </div>
          <div>
            <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Cellphone
            </dt>
            <dd class="mt-0.5 flex items-center gap-1.5 text-sm text-card-foreground">
              <Phone class="h-3.5 w-3.5 text-muted-foreground" />
              {{ viewingInfo.cellphone_number }}
            </dd>
          </div>
          <div>
            <dt class="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Location
            </dt>
            <dd class="mt-0.5 flex items-center gap-1.5 text-sm text-card-foreground">
              <MapPin class="h-3.5 w-3.5 text-muted-foreground" />
              {{ viewingInfo.location.city }}, {{ viewingInfo.location.region }}
            </dd>
          </div>
        </dl>

        <div>
          <dt class="mb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Skills
          </dt>
          <div class="flex flex-wrap gap-2">
            <SkillChip v-for="sk in viewingInfo.student_skill" :key="sk.id">
              {{ sk.name }}
            </SkillChip>
          </div>
        </div>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
        >
          <FileText class="h-4 w-4" />
          View resume — resume.pdf
        </a>

        <UserAccountInfo :account="mockUserStudent" />
      </div>
    </StudentModal>
  </div>
</template>
