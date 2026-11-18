import { reactive, ref } from 'vue'
import type { SigninError, signInForm, SignupError, signUpForm } from '../types'
import type { RegisterValidRole, userRole } from '@/shared/types'
import { useRouter } from 'vue-router'
import { auth } from '@/api/authentication'
import { renderError } from '@/utils/renderError'

export const useSignIn = () => {
  const form = reactive<signInForm>({
    email: '',
    password: '',
  })
  const loading = ref(false)
  const router = useRouter()
  const error = ref<string | null>(null)
  const fieldErrors = ref<SigninError>({})

  const signIn = async () => {
    loading.value = true
    error.value = null
    fieldErrors.value = {}

    try {
      const res = await auth.login(form.email, form.password)

      localStorage.setItem('token', res.token)
      localStorage.setItem('user', JSON.stringify(res.user))

      await router.replace({ name: `${res.user.role}Dashboard` })
    } catch (e) {
      const parsed = renderError<keyof signInForm>(e)
      error.value = parsed.message
      fieldErrors.value = parsed.fieldErrors
    } finally {
      loading.value = false
    }
  }

  return { form, signIn, loading, error, fieldErrors }
}

export const useSignUp = () => {
  const form = reactive<{ acc: signUpForm; role?: RegisterValidRole }>({
    acc: { email: '', password: '', confirm_password: '' },
    role: undefined,
  })
  const step = ref<number>(1)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const router = useRouter()
  const fieldErrors = ref<SignupError>({})

  const changeRole = (value: RegisterValidRole) => {
    step.value = 2
    form.role = value
  }

  const toggleLoading = () => (loading.value = !loading.value)

  const signUp = async () => {
    if (!form.role) return

    toggleLoading()

    try {
      const res = await auth.register(
        form.acc.email,
        form.acc.password,
        form.acc.confirm_password,
        form.role,
      )

      console.log(res.message) // message response

      await router.replace({ name: 'landingPage' })
    } catch (e) {
      const parsed = renderError<keyof signUpForm>(e)
      error.value = parsed.message
      fieldErrors.value = parsed.fieldErrors
    } finally {
      loading.value = false
    }
  }

  return { form, loading, step, changeRole, signUp, error, fieldErrors }
}
