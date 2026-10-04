import type { Student } from '@/shared/types'
import { mockCourses } from './course'

export const mockStudents: Student[] = [
  {
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
    ],
  },
  {
    id: 2,
    name: { first_name: 'Aria', last_name: 'Chen' },
    school: 'De La Salle University',
    cellphone_number: '09171112222',
    course: mockCourses[1]!,
    location: { region: 'NCR', city: 'Manila' },
    student_skill: [
      { id: 1, name: 'Laravel' },
      { id: 10, name: 'SQL' },
    ],
  },
  {
    id: 3,
    name: { first_name: 'Marcus', last_name: 'Rivera' },
    school: 'University of Santo Tomas',
    cellphone_number: '09173334444',
    course: mockCourses[2]!,
    location: { region: 'NCR', city: 'Quezon City' },
    student_skill: [
      { id: 1, name: 'Laravel' },
      { id: 11, name: 'PostgreSQL' },
    ],
  },
  {
    id: 4,
    name: { first_name: 'Priya', last_name: 'Santos' },
    school: 'Laguna State Polytechnic University',
    cellphone_number: '09175556666',
    course: mockCourses[3]!,
    location: { region: 'Calabarzon', city: 'Santa Cruz' },
    student_skill: [{ id: 12, name: 'Communication' }],
  },
  {
    id: 5,
    name: { first_name: 'Julian', last_name: 'Reyes' },
    school: 'Mapúa University',
    cellphone_number: '09177778888',
    course: mockCourses[4]!,
    location: { region: 'NCR', city: 'Makati City' },
    student_skill: [
      { id: 3, name: 'Vue.js' },
      { id: 5, name: 'JavaScript' },
    ],
  },
]
