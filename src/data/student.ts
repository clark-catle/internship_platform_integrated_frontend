import type { studentNotification } from '@/modules/student/notification/type'

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
