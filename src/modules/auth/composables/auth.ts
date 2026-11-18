import { reactive, ref } from 'vue'
import type { signInForm, signUpForm } from '../types'
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

  const fieldErrors = ref<Partial<Record<keyof signInForm, string[]>>>({})

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
