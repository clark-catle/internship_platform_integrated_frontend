import type { notificationIconType } from '@/modules/student/notification/type'
import type { notification, notificationDataType } from '@/shared/types'
import { Briefcase, CheckCircle, XCircle } from '@lucide/vue'

export const mockNotifications: notification[] = [
  {
    id: 1,
    data: {
      type: 'success',
      application_id: 101,
      title: 'Interview scheduled',
      message:
        'Opalus Technologies moved your Backend Developer Intern application to the interview stage. Check your email for scheduling details.',
    },
    read_at: null,
    created_at: '2026-09-12T10:00:00+08:00',
  },
  {
    id: 2,
    data: {
      type: 'success',
      application_id: 103,
      title: 'Application accepted',
      message:
        'Congratulations! Vantage Data Labs accepted your application for the Data Analyst Intern role.',
    },
    read_at: null,
    created_at: '2026-07-31T09:12:00+08:00',
  },
  {
    id: 3,
    data: {
      type: 'warning',
      application_id: 104,
      title: 'Application update',
      message:
        'Brightleaf Design Co. has decided not to move forward with your UI/UX Design Intern application at this time.',
    },
    read_at: '2026-07-11T08:00:00+08:00',
    created_at: '2026-07-10T18:40:00+08:00',
  },
  {
    id: 4,
    data: {
      type: 'success',
      application_id: 105,
      title: 'Application submitted',
      message:
        'Your application for Frontend Developer Intern (React) at Northwind Software was submitted successfully.',
    },
    read_at: '2026-09-10T16:25:00+08:00',
    created_at: '2026-09-10T16:20:00+08:00',
  },
  {
    id: 5,
    data: {
      type: 'success',
      application_id: 102,
      title: 'Application submitted',
      message:
        'Your application for Full-Stack Developer Intern at Fieldstone Logistics was submitted successfully.',
    },
    read_at: '2026-09-05T14:05:00+08:00',
    created_at: '2026-09-05T14:02:00+08:00',
  },
  {
    id: 6,
    data: {
      type: 'info',
      application_id: 101,
      title: 'Complete your profile',
      message:
        'Add your resume and skills to your profile so companies can find a better match for you.',
    },
    read_at: null,
    created_at: '2026-08-15T07:30:00+08:00',
  },
  {
    id: 7,
    data: {
      type: 'info',
      application_id: 101,
      title: 'Application under review',
      message: 'Opalus Technologies started reviewing your Backend Developer Intern application.',
    },
    read_at: '2026-08-21T09:00:00+08:00',
    created_at: '2026-08-20T09:20:00+08:00',
  },
  {
    id: 8,
    data: {
      type: 'info',
      application_id: 103,
      title: 'Welcome to InternMatch',
      message: 'Browse verified companies and apply to internships that match your skills.',
    },
    read_at: '2026-06-01T08:00:00+08:00',
    created_at: '2026-06-01T07:45:00+08:00',
  },
]

export const notificationTypeIcons: Record<notificationDataType, notificationIconType> = {
  info: {
    icon: Briefcase,
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  success: {
    icon: CheckCircle,
    bg: 'bg-green-100 dark:bg-green-900/30',
    color: 'text-green-600 dark:text-green-400',
  },
  warning: {
    icon: XCircle,
    bg: 'bg-red-100 dark:bg-red-900/30',
    color: 'text-red-600 dark:text-red-400',
  },
}
