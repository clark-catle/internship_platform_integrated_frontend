import { onMounted, reactive, ref } from 'vue'
import type { ProfileSection, UserStudent } from '../type'
import { mockUserStudent } from '@/data/user'
import { mockSkills } from '@/data/skill'
import { mockCourses } from '@/data/course'

export const useProfile = () => {
  const user = reactive<UserStudent>(mockUserStudent)
  const loading = ref(true)
  const saving = ref(false)
  const activeSection = ref<ProfileSection>('basic')

  /**
   * removes the skill base on the `$id` that was passed
   * @param id
   * @returns
   */
  const removeSkill = (id: number) =>
    (user.student_info.student_skill = user.student_info.student_skill.filter(
      (val) => val.id !== id,
    ))

  /**
   * adding the skill base on the passed id, selected skill was save in mock skill
   * @param id
   */
  const addSkill = (id: number) => {
    if (user.student_info.student_skill.some((val) => val.id === id)) return

    user.student_info.student_skill.push(mockSkills.find((v) => v.id === id)!)
  }

  const addCourse = (id: number) => {
    if (user.student_info.course.id === id) return

    user.student_info.course = mockCourses.find((v) => v.id === id)!

    console.log(user)
  }

  /**
   * will pass a request in backedn where it will send an email in the user's current
   * email for verification, after the verification, it will change the user's email
   * @param email
   */
  const changeEmail = (email: string) => {
    console.log('new email ' + email)
  }

  /**
   * to virtualize the loading
   */
  onMounted(async () => {
    setTimeout(() => (loading.value = false), 1000)
  })

  return { user, loading, saving, activeSection, addSkill, removeSkill, addCourse, changeEmail }
}
