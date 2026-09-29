import { mockCompanyInternships } from '@/data/internship'
import type { internship } from '@/shared/types'
import { computed, onMounted, reactive, ref, watch } from 'vue'

export const useInternship = () => {
  const mainData = mockCompanyInternships
  const internships = ref(mainData)
  const tab = ref<'active' | 'deleted'>('active')
  const viewingId = ref<number | null>(null)
  const formOpen = ref(false)
  const editingInternship = ref<internship | null>(null)
  const deleteTargetId = ref<number | null>(null)

  const viewingInternship = computed(() =>
    viewingId.value ? internships.value.find((val) => val.id === viewingId.value) : null,
  )

  const closeView = () => (viewingId.value = null)

  const openAddForm = () => {
    editingInternship.value = null
    formOpen.value = true
  }

  const openEditForm = (id: number) => {
    editingInternship.value = internships.value.find((val) => val.id === id)!
    viewingId.value = null
    formOpen.value = true
  }

  const closeForm = () => {
    formOpen.value = false
  }

  const handleFormSubmit = (newInternship: internship) => {
    if (editingInternship.value) {
      internships.value = internships.value.map((val) =>
        val.id === editingInternship.value?.id ? editingInternship.value : val,
      )
    } else {
      internships.value.push(newInternship)
    }
    formOpen.value = false
  }

  const activeIntenrship = (isActive: boolean) =>
    mainData.filter((val) => (isActive ? !val.deleted_at : val.deleted_at)).length

  const requestDelete = (id: number) => {
    viewingId.value = null
    deleteTargetId.value = id
  }

  const confirmDelete = () => {
    if (deleteTargetId.value !== null) {
    }
    deleteTargetId.value = null
  }

  const handleRestore = (id: number) => {
    internships.value = internships.value.map((val) =>
      val.id === deleteTargetId.value ? { ...val, deleted_at: null } : val,
    )
    viewingId.value = null
  }

  const filter = () =>
    (internships.value = mainData.filter((val) =>
      tab.value === 'active' ? !val.deleted_at : val.deleted_at,
    ))

  watch(tab, filter)

  onMounted(filter)

  return {
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
  }
}
