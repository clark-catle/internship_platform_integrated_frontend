import { ref, watch } from 'vue'

const saved = localStorage.getItem('sidebar')
const collapsed = ref(saved ? saved === 'collapsed' : false)

const changeSidebar = (val: boolean) => {
  if (val) {
    localStorage.setItem('sidebar', 'collapsed')
  } else {
    localStorage.setItem('sidebar', 'notCollapsed')
  }
}

watch(collapsed, changeSidebar, { immediate: true })

export const useCollapseSidebar = () => {
  const toggleCollapsed = (val: boolean) => (collapsed.value = val)
  const currentUrl = ref(location.pathname)

  return { collapsed, toggleCollapsed, currentUrl }
}
