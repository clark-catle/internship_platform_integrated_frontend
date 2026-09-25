import { mockCompanies } from '@/data/companies'

export const useCompanyDetail = (id: number) => {
  const company = mockCompanies.find((val) => val.id === id)!

  return { company }
}
