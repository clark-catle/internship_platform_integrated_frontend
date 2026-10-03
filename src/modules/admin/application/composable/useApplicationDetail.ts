import { mockApplication } from '@/data/applications'
import { onMounted, ref } from 'vue'

export const useApplicationDetail = (id: number) => {
  const application = ref(mockApplication.find((val) => val.id === id))

  // update the application into in review
  onMounted(() => {
    if (!application.value) return

    application.value.status = 'in review'
  })

  return { application }
}
