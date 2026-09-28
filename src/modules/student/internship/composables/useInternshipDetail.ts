import { mockStudentInternships } from '@/data/internship'

export const useInternshipDetail = (id: number) => {
  const internship = mockStudentInternships.find((val) => val.id === id)!

  return { internship }
}
