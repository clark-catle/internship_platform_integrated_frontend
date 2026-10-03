<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useInternship } from '../composables/useInternship.ts'
import { Briefcase, Plus } from '@lucide/vue'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import ViewInternship from '../components/ViewInternship.vue'
import NewInternshipForm from '../components/NewInternshipForm.vue'
import ConfirmDialog from '@/shared/components/ConfirmDialog.vue'
import InternshipCard from '../components/InternshipCard.vue'

const router = useRouter()
const {
  internships,
  tab,
  viewingId,
  viewingInternship,
  closeView,
  formOpen,
  editingInternship,
  openAddForm,
  openEditForm,
  closeForm,
  handleFormSubmit,
  activeIntenrship,
  deleteTargetId,
  requestDelete,
  confirmDelete,
  handleRestore,
} = useInternship()

function goToApplications(internshipId: number) {
  viewingId.value = null
  router.push({ name: 'company-applications', query: { internship: String(internshipId) } })
}
</script>

<template>
  <div class="space-y-6 max-w-6xl mx-auto">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex gap-1 rounded-xl bg-secondary p-1 w-fit">
        <button
          type="button"
          class="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          :class="
            tab === 'active'
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          "
          @click="tab = 'active'"
        >
          Active ({{ activeIntenrship(true) }})
        </button>
        <button
          type="button"
          class="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          :class="
            tab === 'deleted'
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          "
          @click="tab = 'deleted'"
        >
          Deleted ({{ activeIntenrship(false) }})
        </button>
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
        @click="openAddForm"
      >
        <Plus class="h-4 w-4" />
        Add internship
      </button>
    </div>

    <EmptyStateBase
      v-if="internships.length === 0"
      :icon="Briefcase"
      :title="tab === 'active' ? 'No active postings' : 'Nothing deleted'"
      :description="
        tab === 'active'
          ? 'Post your first internship to start receiving applications.'
          : 'Postings you delete will show up here.'
      "
    >
      <template v-if="tab === 'active'" #action>
        <button
          type="button"
          class="rounded-xl gradient-primary px-4 py-2 text-sm font-medium text-white"
          @click="openAddForm"
        >
          <!-- Add internship -->
        </button>
      </template>
    </EmptyStateBase>

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <InternshipCard v-for="internship in internships" :key="internship.id" :data="internship" />
    </div>

    <ViewInternship
      v-if="viewingId !== null && viewingInternship"
      :internship="viewingInternship"
      @close="closeView"
      @view-applications="goToApplications"
      @edit="openEditForm"
      @request-delete="requestDelete"
      @restore="handleRestore"
    />

    <NewInternshipForm
      v-if="formOpen"
      :internship="editingInternship"
      @close="closeForm"
      @submit="handleFormSubmit"
    />

    <ConfirmDialog
      v-if="deleteTargetId !== null"
      title="Delete this internship?"
      description="It will be removed from your active postings. You can restore it later from the Deleted tab."
      confirm-label="Delete"
      danger
      @confirm="confirmDelete"
      @cancel="deleteTargetId = null"
    />
  </div>
</template>
