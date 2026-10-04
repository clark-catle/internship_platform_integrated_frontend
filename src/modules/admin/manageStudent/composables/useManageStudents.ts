import { mockStudents } from '@/data/students'
import { computed, ref, watch } from 'vue'

export const useManageStudents = () => {
  const students = ref(mockStudents)
  const search = ref('')
  const viewingId = ref<number | null>(null)

  const viewingInfo = computed(() => students.value.find((val) => val.id === viewingId.value))

  watch(
    search,
    () =>
      (students.value = mockStudents.filter(
        (val) =>
          val.name.first_name.toLowerCase().includes(search.value.toLowerCase()) ||
          val.name.last_name.toLowerCase().includes(search.value.toLowerCase()) ||
          val.course.name.toLowerCase().includes(search.value.toLowerCase()) ||
          val.location.city.toLowerCase().includes(search.value.toLowerCase()) ||
          val.location.region.toLowerCase().includes(search.value.toLowerCase()) ||
          (val.student_skill.length > 0 &&
            val.student_skill.some((val) =>
              val.name.toLowerCase().includes(search.value.toLowerCase()),
            )),
      )),
  )

  return { students, search, viewingId, viewingInfo }
}
