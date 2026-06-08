import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

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
  const router = useRoute()

  // based on the name inside the /route/index.ts
  const currentUrlName = computed(() => router.name)

  const toggleCollapsed = (val: boolean) => (collapsed.value = val)

  return { collapsed, toggleCollapsed, currentUrlName }
}
