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
  id: 3,
  email: 'student@mock.com',
  status: 'active',
  role: 'student',
  company_info: mockCompanyUser,
}

export const mockCompanyAccounts: User[] = [
  { id: 4, email: 'hr@opalus.example.com', status: 'active', role: 'company' },
  { id: 5, email: 'people@northwind.example.com', status: 'active', role: 'company' },
  { id: 6, email: 'hello@brightleaf.example.com', status: 'active', role: 'company' },
  { id: 7, email: 'careers@vantagedata.example.com', status: 'block', role: 'company' },
  { id: 8, email: 'jobs@paperlane.example.com', status: 'active', role: 'company' },
]

export const mockStudentAccounts: User[] = [
  { id: 201, email: 'clark.catle@student.example.edu', status: 'active', role: 'student' },
  { id: 202, email: 'aria.chen@student.example.edu', status: 'active', role: 'student' },
  { id: 203, email: 'marcus.rivera@student.example.edu', status: 'active', role: 'student' },
  { id: 204, email: 'priya.santos@student.example.edu', status: 'block', role: 'student' },
  { id: 205, email: 'julian.reyes@student.example.edu', status: 'active', role: 'student' },
]

export const mockUserAccounts: User[] = [
  mockUserAdmin,
  ...mockCompanyAccounts,
  ...mockStudentAccounts,
]
