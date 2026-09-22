import type { UserStudent } from '@/modules/student/profile/type'
import type { User } from '@/shared/types'
import { mockStudent } from './student'

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
