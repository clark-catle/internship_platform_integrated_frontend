import type { notification, notificationDataType, notificationIconType } from '@/shared/types'
import { Briefcase, CheckCircle, XCircle } from '@lucide/vue'

export const mockStudentNotifications: notification[] = [
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

export const mockCompanyNotifications: notification[] = [
  {
    id: 1,
    data: {
      type: 'success',
      application_id: 301,
      title: 'New application received',
      message: 'Aria Chen applied to your Backend Developer Intern (Laravel) posting.',
    },
    read_at: null,
    created_at: '2026-09-18T09:00:00+08:00',
  },
  {
    id: 2,
    data: {
      type: 'success',
      application_id: 302,
      title: 'New application received',
      message: 'Marcus Rivera applied to your Backend Developer Intern (Laravel) posting.',
    },
    read_at: null,
    created_at: '2026-09-10T11:30:00+08:00',
  },
  {
    id: 3,
    data: {
      type: 'info',
      application_id: 303,
      title: 'Interview stage reached',
      message:
        'Bea Villanueva was moved to the interview stage for Backend Developer Intern (Laravel).',
    },
    read_at: '2026-09-03T08:00:00+08:00',
    created_at: '2026-09-02T14:20:00+08:00',
  },
  {
    id: 4,
    data: {
      type: 'warning',
      application_id: 304,
      title: 'Decision needed',
      message:
        'Priya Santos is ready for a decision on the QA / Software Testing Intern application.',
    },
    read_at: null,
    created_at: '2026-08-21T09:00:00+08:00',
  },
  {
    id: 5,
    data: {
      type: 'success',
      application_id: 305,
      title: 'You accepted an applicant',
      message: 'Julian Reyes was accepted for the QA / Software Testing Intern role.',
    },
    read_at: '2026-08-01T10:30:00+08:00',
    created_at: '2026-08-01T10:15:00+08:00',
  },
  {
    id: 6,
    data: {
      type: 'warning',
      application_id: 0,
      title: 'Posting removed by admin',
      message:
        'Your Data Entry Intern posting was force-deleted by an administrator. All linked applications were automatically rejected.',
    },
    read_at: '2026-07-15T10:00:00+08:00',
    created_at: '2026-07-15T09:30:00+08:00',
  },
  {
    id: 7,
    data: {
      type: 'info',
      application_id: 0,
      title: 'Complete your company profile',
      message: 'Add a logo and description so students can recognize your postings.',
    },
    read_at: '2026-06-01T08:00:00+08:00',
    created_at: '2026-06-01T07:45:00+08:00',
  },
  {
    id: 8,
    data: {
      type: 'info',
      application_id: 306,
      title: 'Applicant rejected',
      message: 'You rejected Priya Santos for the Backend Developer Intern (Laravel) role.',
    },
    read_at: '2026-07-25T13:30:00+08:00',
    created_at: '2026-07-25T13:20:00+08:00',
  },
]

export const mockAdminNotifications: notification[] = [
  {
    id: 1,
    data: {
      type: 'success',
      application_id: 0,
      title: 'New company registered',
      message: 'Paperlane Media created a company account and is awaiting review.',
    },
    read_at: null,
    created_at: '2026-09-20T09:00:00+08:00',
  },
  {
    id: 2,
    data: {
      type: 'warning',
      application_id: 0,
      title: 'Posting flagged for review',
      message:
        'A student flagged the "Social Media Intern" posting from Paperlane Media as suspicious.',
    },
    read_at: null,
    created_at: '2026-07-09T15:00:00+08:00',
  },
  {
    id: 3,
    data: {
      type: 'warning',
      application_id: 0,
      title: 'Posting force-deleted',
      message:
        'You force-deleted the "Social Media Intern" posting. 1 linked application was auto-rejected.',
    },
    read_at: '2026-07-10T09:10:00+08:00',
    created_at: '2026-07-10T09:00:00+08:00',
  },
  {
    id: 4,
    data: {
      type: 'info',
      application_id: 0,
      title: 'Admin token redeemed',
      message: 'Token ADM-7F2K-9QRT-3XLM was used to register a new admin account.',
    },
    read_at: '2026-06-08T08:00:00+08:00',
    created_at: '2026-06-08T07:45:00+08:00',
  },
  {
    id: 5,
    data: {
      type: 'info',
      application_id: 0,
      title: 'Account blocked',
      message: 'Vantage Data Labs was blocked pending a billing dispute review.',
    },
    read_at: '2026-08-05T10:00:00+08:00',
    created_at: '2026-08-05T09:40:00+08:00',
  },
  {
    id: 6,
    data: {
      type: 'info',
      application_id: 0,
      title: 'Weekly platform summary',
      message: '8 new applications and 2 new company registrations this week.',
    },
    read_at: '2026-09-01T08:00:00+08:00',
    created_at: '2026-09-01T07:00:00+08:00',
  },
]
