import type { application } from '@/shared/types'
import { mockInternships } from './internship'

const internshipById = (id: number) => mockInternships.find((i) => i.id === id)

// Applications belonging to the logged-in mock student (id: 1).
// `student` is intentionally omitted here — per the API shape, a student
// viewing their own applications never receives their own StudentInfo back.
export const mockApplications: application[] = [
  {
    id: 101,
    status: 'in review',
    progress: 'interview',
    applied_at: '2026-08-20T09:15:00+08:00',
    internship: internshipById(1),
  },
  {
    id: 102,
    status: 'pending',
    progress: 'applied',
    applied_at: '2026-09-05T14:02:00+08:00',
    internship: internshipById(5),
  },
  {
    id: 103,
    status: 'accepted',
    progress: 'decision',
    applied_at: '2026-07-30T10:30:00+08:00',
    internship: internshipById(4),
  },
  {
    id: 104,
    status: 'rejected',
    progress: 'decision',
    applied_at: '2026-07-10T08:45:00+08:00',
    internship: internshipById(3),
  },
  {
    id: 105,
    status: 'in review',
    progress: 'applied',
    applied_at: '2026-09-10T16:20:00+08:00',
    internship: internshipById(2),
  },
]
