import { reactive, ref } from 'vue'
import type { signInForm, signUpForm } from '../types'
import type { userRole } from '@/shared/types'

export const useSignIn = () => {
  const form = reactive<signInForm>({
    email: '',
    password: '',
  })

  const loading = ref(false)

  // simmulating a real api call
  const signIn = () => {
    toggleLoading()
    console.log('logging in')
    console.log()
    console.log('credentials')
    console.log('email: ' + form.email)
    console.log('password: ' + form.password)
    console.log('calling api')

    setTimeout(() => {
      console.log('done calling api')

      toggleLoading()
    }, 2000)
  }

  const toggleLoading = () => (loading.value = !loading.value)

  return { form, signIn, loading }
}

export const useSignUp = () => {
  const form = reactive<signUpForm>({
    email: '',
    password: '',
    confirmPassword: '',
    role: undefined,
  })

  const loading = ref(false)

  // simmulating a real api call
  const signUp = () => {
    toggleLoading()
    console.log('signing up')
    console.log()
    console.log('credentials')
    console.log('email: ' + form.email)
    console.log('password: ' + form.password)
    console.log('confirm password: ' + form.confirmPassword)
    console.log('user_role: ' + form.role)
    console.log('calling api')

    setTimeout(() => {
      console.log('done calling api')

      toggleLoading()
    }, 2000)
  }

  const changeRole = (value: userRole) => (form.role = value)

  const toggleLoading = () => (loading.value = !loading.value)

  return { form, signUp, loading, changeRole }
}
