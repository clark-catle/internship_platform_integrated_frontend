import { mockStudentCompanies } from '@/data/companies'

export const useCompanyDetail = (id: number) => {
  const company = mockStudentCompanies.find((val) => val.id === id)!

  return { company }
}
