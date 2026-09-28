import { mockStudentApplications } from '@/data/applications'

export const useApplicationDetail = (id: number) => {
  const application = mockStudentApplications.find((val) => val.id === id)

  return { application }
}
