import { internshipCompany, mockStudentInternships } from '@/data/internship'
import { useRoute } from 'vue-router'

export const useInternshipDetail = () => {
  const route = useRoute()
  const internship = mockStudentInternships.find((val) => val.id === Number(route.params.id))
  const company = internshipCompany(internship?.companyId)

  return { internship, company }
}
