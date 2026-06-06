import { ref, watch } from 'vue'

const saved = localStorage.getItem('theme')
const prefer = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = ref(saved ? saved === 'dark' : prefer)

export function useTheme() {
  const toggleTheme = () => (isDark.value = !isDark.value)

  const applyTheme = (val: boolean) => {
    if (val) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  watch(isDark, applyTheme, { immediate: true })

  return { isDark, toggleTheme }
}
