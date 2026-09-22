import type { Student } from '@/modules/student/profile/type'
import { mockCourses } from './course'

export const mockStudent: Student = {
  id: 1,
  name: { first_name: 'Clark', last_name: 'Catle' },
  school: 'Laguna State Polytechnic University',
  cellphone_number: '09171234567',
  course: mockCourses[0]!,
  location: { region: 'Calabarzon', city: 'Tanauan City' },
  student_skill: [
    { id: 1, name: 'Laravel' },
    { id: 4, name: 'PHP' },
    { id: 3, name: 'Vue.js' },
    { id: 2, name: 'React' },
    { id: 11, name: 'PostgreSQL' },
  ],
}
