import type { application } from '@/shared/types'
import { mockInternships } from './internship'
import { mockStudent } from './student'

/**
 * check if the `studentId` hass applied to `internshipId`, will return bool if
 * student has applied to the internship or not
 * @param internshipId
 * @param studentId
 * @returns bool
 */
export const studentApplied = (internshipId: number, studentId: number) =>
  mockApplications.some((i) => i.internshipId === internshipId && i.student?.id === studentId)

// Applications belonging to the logged-in mock student (id: 1).
// `student` is intentionally omitted here — per the API shape, a student
// viewing their own applications never receives their own StudentInfo back.
export const mockApplications: application[] = [
  {
    id: 101,
    status: 'in review',
    progress: 'interview',
    applied_at: '2026-08-20T09:15:00+08:00',
    internshipId: 1,
    student: mockStudent,
  },
  {
    id: 102,
    status: 'pending',
    progress: 'applied',
    applied_at: '2026-09-05T14:02:00+08:00',
    internshipId: 5,
    student: mockStudent,
  },
  {
    id: 103,
    status: 'accepted',
    progress: 'decision',
    applied_at: '2026-07-30T10:30:00+08:00',
    internshipId: 4,
  },
  {
    id: 104,
    status: 'rejected',
    progress: 'decision',
    applied_at: '2026-07-10T08:45:00+08:00',
    internshipId: 3,
    student: mockStudent,
  },
  {
    id: 105,
    status: 'in review',
    progress: 'applied',
    applied_at: '2026-09-10T16:20:00+08:00',
    internshipId: 2,
  },
  {
    id: 106,
    status: 'in review',
    progress: 'decision',
    applied_at: '2026-09-10T16:20:00+08:00',
    internshipId: 1,
  },
]
