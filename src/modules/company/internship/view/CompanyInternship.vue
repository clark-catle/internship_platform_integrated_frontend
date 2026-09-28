<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useInternship } from '../composables/useInternship'

const router = useRouter()
const { internship } = useInternship()
// const store = useCompanyInternshipsStore()
// const applications = useCompanyApplicationsStore()
// const toast = useToastStore()

const tab = ref<'active' | 'deleted'>('active')
const list = computed(() => (tab.value === 'active' ? store.active : store.deleted))

function applicantCount(internshipId: number) {
  return applications.byInternship(internshipId).length
}

// View modal
const viewingId = ref<number | null>(null)
const viewingInternship = computed<Internship | null>(() =>
  viewingId.value !== null ? (store.getById(viewingId.value) ?? null) : null,
)

function openView(id: number) {
  viewingId.value = id
}
function closeView() {
  viewingId.value = null
}

// Add/Edit modal
const formOpen = ref(false)
const editingInternship = ref<Internship | null>(null)

function openAddForm() {
  editingInternship.value = null
  formOpen.value = true
}
function openEditForm(id: number) {
  editingInternship.value = store.getById(id) ?? null
  viewingId.value = null
  formOpen.value = true
}
function closeForm() {
  formOpen.value = false
}
function handleFormSubmit(payload: InternshipFormInput) {
  if (editingInternship.value) {
    store.update(editingInternship.value.id, payload)
    toast.success('Internship updated.')
  } else {
    store.create(payload)
    toast.success('Internship posted.')
  }
  formOpen.value = false
}

// Delete confirm
const deleteTargetId = ref<number | null>(null)
function requestDelete(id: number) {
  viewingId.value = null
  deleteTargetId.value = id
}
function confirmDelete() {
  if (deleteTargetId.value !== null) {
    store.softDelete(deleteTargetId.value)
    toast.success('Internship moved to deleted.')
  }
  deleteTargetId.value = null
}

function handleRestore(id: number) {
  store.restore(id)
  viewingId.value = null
  toast.success('Internship restored.')
}

function goToApplications(internshipId: number) {
  viewingId.value = null
  router.push({ name: 'company-applications', query: { internship: String(internshipId) } })
}
</script>

<template>
  <div class="space-y-6">
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
          Active ({{ store.active.length }})
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
          Deleted ({{ store.deleted.length }})
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

    <EmptyState
      v-if="list.length === 0"
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
          Add internship
        </button>
      </template>
    </EmptyState>

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="i in list"
        :key="i.id"
        type="button"
        class="card-hover flex flex-col rounded-2xl border border-border bg-card p-5 text-left"
        @click="openView(i.id)"
      >
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-sm font-semibold text-card-foreground">{{ i.title }}</h3>
          <span
            v-if="i.deleted_at"
            class="shrink-0 badge-danger rounded-full px-2 py-0.5 text-[11px] font-medium"
          >
            {{ i.deleted_by === 'admin' ? 'Removed by admin' : 'Deleted' }}
          </span>
        </div>
        <p class="mt-1 text-xs text-muted-foreground">{{ i.city }}, {{ i.region }}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <span class="badge-primary rounded-full px-2 py-0.5 text-[11px] font-medium capitalize">{{
            setupLabels[i.setup]
          }}</span>
          <span
            class="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
          >
            {{ durationLabel(i.duration, i.duration_unit) }}
          </span>
        </div>
        <p class="mt-4 text-xs font-medium text-muted-foreground">
          {{ applicantCount(i.id) }} applicant{{ applicantCount(i.id) === 1 ? '' : 's' }}
        </p>
      </button>
    </div>

    <InternshipViewModal
      :open="viewingId !== null"
      :internship="viewingInternship"
      @close="closeView"
      @view-applications="goToApplications"
      @edit="openEditForm"
      @request-delete="requestDelete"
      @restore="handleRestore"
    />

    <InternshipFormModal
      :open="formOpen"
      :internship="editingInternship"
      @close="closeForm"
      @submit="handleFormSubmit"
    />

    <ConfirmDialog
      :open="deleteTargetId !== null"
      title="Delete this internship?"
      description="It will be removed from your active postings. You can restore it later from the Deleted tab."
      confirm-label="Delete"
      danger
      @confirm="confirmDelete"
      @cancel="deleteTargetId = null"
    />
  </div>
</template>
