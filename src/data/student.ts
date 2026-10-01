import type { Student } from '@/shared/types'
import { mockCourses } from './course'

export const mockStudent: Student = {
  id: 1,
  name: { first_name: 'John', last_name: 'Doe' },
  school: 'Cebu City Kalayaan College',
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
