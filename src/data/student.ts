import type { applicationStatusDesign, applicationTab } from '@/modules/student/application/type'
import type { notificationIconType, studentNotification } from '@/modules/student/notification/type'
import type { applicationProgress, notificationType } from '@/shared/types'
import { AlertCircle, Bell, Briefcase, CheckCircle, Clock, Eye, Flag, XCircle } from '@lucide/vue'

export const studentNotifications: studentNotification[] = [
  {
    id: '1',
    type: 'accepted',
    message: '🎉 Congratulations! Your application to Google has been accepted.',
    isRead: false,
    created_date: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: '2',
    type: 'submitted',
    message: 'Your application to Meta for Product Design Intern is now under review.',
    isRead: false,
    created_date: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: '3',
    type: 'rejected',
    message: 'Complete your profile to get 3x more visibility to recruiters.',
    isRead: true,
    created_date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: '4',
    type: 'report',
    message: 'New internship matching your skills: Figma is hiring a Design Intern.',
    isRead: true,
    created_date: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
]

export const notificationTypeIcons: Record<notificationType | 'default', notificationIconType> = {
  submitted: {
    icon: Briefcase,
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  accepted: {
    icon: CheckCircle,
    bg: 'bg-green-100 dark:bg-green-900/30',
    color: 'text-green-600 dark:text-green-400',
  },
  rejected: {
    icon: XCircle,
    bg: 'bg-red-100 dark:bg-red-900/30',
    color: 'text-red-600 dark:text-red-400',
  },
  report: {
    icon: Flag,
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    color: 'text-orange-600 dark:text-orange-400',
  },
  default: {
    icon: Bell,
    bg: 'bg-gray-100 dark:bg-gray-800',
    color: 'text-gray-600 dark:text-gray-400',
  },
}

export const applicationTabs: applicationTab[] = [
  'all',
  'pending',
  'in_review',
  'accepted',
  'rejected',
]

export const studentApplication = [
  {
    id: 1,
    company: 'Google',
    title: 'Frontend Development Intern',
    status: 'accepted',
    date: '2 days ago',
  },
  {
    id: 2,
    company: 'Figma',
    title: 'Product Design Intern',
    status: 'in_review',
    date: '5 days ago',
  },
  {
    id: 3,
    company: 'Netflix',
    title: 'Data Science Intern',
    status: 'pending',
    date: '1 week ago',
  },
  {
    id: 4,
    company: 'Stripe',
    title: 'Software Engineering Intern',
    status: 'rejected',
    date: '2 weeks ago',
  },
]

export const studentApplicationStatus: applicationStatusDesign[] = [
  {
    label: 'accepted',
    icon: CheckCircle,
    class: 'badge-success',
    dot: 'bg-green-400',
  },
  { label: 'in_review', icon: Eye, class: 'badge-info', dot: 'bg-blue-400' },
  { label: 'pending', icon: Clock, class: 'badge-warning', dot: 'bg-amber-400' },
  { label: 'rejected', icon: AlertCircle, class: 'badge-danger', dot: 'bg-red-400' },
]

export const progress: applicationProgress[] = ['applied', 'in review', 'interview', 'decision']
