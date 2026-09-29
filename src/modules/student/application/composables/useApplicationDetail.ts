import { mockApplication } from '@/data/applications'

export const useApplicationDetail = (id: number) => {
  const application = mockApplication.find((val) => val.id === id)

  return { application }
}
