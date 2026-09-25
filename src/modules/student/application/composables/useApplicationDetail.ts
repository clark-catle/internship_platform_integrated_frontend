import { mockApplications } from '@/data/applications'

export const useApplicationDetail = (id: number) => {
  const application = mockApplications.find((val) => val.id === id)

  return { application }
}
