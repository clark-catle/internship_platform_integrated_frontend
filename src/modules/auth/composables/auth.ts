import { reactive, ref } from 'vue'
import type { signInForm, signUpForm } from '../types'
import type { RegisterValidRole, userRole } from '@/shared/types'
import { useRouter } from 'vue-router'

export const useSignIn = () => {
  const form = reactive<signInForm>({
    email: '',
    password: '',
  })

  const loading = ref(false)

  const router = useRouter()

  const toggleLoading = () => (loading.value = !loading.value)

  // simmulating a real api call
  const signIn = () => {
    toggleLoading()
    console.log('logging in')
    console.log()
    console.log('credentials')
    console.log('email: ' + form.email)
    console.log('password: ' + form.password)
    console.log('calling api')

    setTimeout(async () => {
      console.log('done calling api')

      toggleLoading()

      await router.replace({ name: 'studentInternship' })
    }, 2000)
  }

  return { form, signIn, loading }
}

export const useSignUp = () => {
  const form = reactive<{ acc: signUpForm; role?: RegisterValidRole }>({
    acc: { email: '', password: '', confirmPassword: '' },
    role: undefined,
  })

  const step = ref<number>(1)

  const loading = ref(false)

  const router = useRouter()

  const changeRole = (value: RegisterValidRole) => {
    step.value = 2
    form.role = value
  }

  const addAcc = async (val: signUpForm) => {
    form.acc.email = val.email
    form.acc.password = val.password
    form.acc.confirmPassword = val.confirmPassword

    signUp()
  }

  const toggleLoading = () => (loading.value = !loading.value)

  // simmulating a real api call
  const signUp = () => {
    if (!form.role) return

    toggleLoading()

    // const res = auth.register(form.acc)
  }

  return { form, loading, step, changeRole, addAcc }
}
