import { mockInternships } from '@/data/internship'

export const useInternshipDetail = (id: number) => {
  const internship = mockInternships.find((val) => val.id === id)!

  return { internship }
}
