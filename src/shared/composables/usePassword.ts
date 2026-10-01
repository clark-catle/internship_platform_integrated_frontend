import { ref } from 'vue'
import { reactive } from 'vue'

export const usePassword = () => {
  const form = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const passwordNotMatch = ref(false)

  const clearForm = () => {
    form.oldPassword = ''
    form.newPassword = ''
    form.confirmPassword = ''
  }

  return { form, passwordNotMatch, clearForm }
}
