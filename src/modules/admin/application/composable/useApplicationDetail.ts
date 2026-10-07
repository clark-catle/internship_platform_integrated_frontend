import { mockApplication } from '@/data/applications'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export const useApplicationDetail = () => {
  const route = useRoute()
  const application = ref(mockApplication.find((val) => val.id === Number(route.params.id)))

  onMounted(() => {
    if (!application.value) return

    if (application.value.status === 'accepted') return

    if (application.value.status === 'pending') application.value.status = 'in review'
  })

  return { application }
}
