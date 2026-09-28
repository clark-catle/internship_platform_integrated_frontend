import type { User, UserCompany, UserStudent } from '@/shared/types'
import { mockStudent } from './student'
import { mockCompanyUser } from './company'

export const mockUserAdmin: User = {
  id: 1,
  email: 'admin@mock.com',
  status: 'active',
  role: 'admin',
}

export const mockUserStudent: UserStudent = {
  id: 2,
  email: 'student@mock.com',
  status: 'active',
  role: 'student',
  student_info: mockStudent,
}

export const mockUserCompany: UserCompany = {
  id: 2,
  email: 'student@mock.com',
  status: 'active',
  role: 'student',
  company_info: mockCompanyUser,
}
