import { mockCourses } from '@/data/course'
import type { Course } from '@/shared/types'
import { ref, watch } from 'vue'

export const useCourse = () => {
  const searchCourse = ref('')
  const courseResult = ref<Course[]>(mockCourses)
  const showCourseChoices = ref(false)

  const search = () => {
    courseResult.value = mockCourses.filter((v) =>
      v.name.toLocaleLowerCase().includes(searchCourse.value.toLowerCase()),
    )
  }

  watch(searchCourse, search)

  return { searchCourse, courseResult, showCourseChoices }
}
