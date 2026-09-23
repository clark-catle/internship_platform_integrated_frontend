import { ref } from 'vue'

export const useEmail = () => {
  const showChangeEmail = ref(false)
  const newEmail = ref('')

  const openChangeEmail = () => {
    newEmail.value = ''
    showChangeEmail.value = true
  }

  const cancelChangeEmail = () => {
    showChangeEmail.value = false
    newEmail.value = ''
  }

  return { showChangeEmail, newEmail, openChangeEmail, cancelChangeEmail }
}
