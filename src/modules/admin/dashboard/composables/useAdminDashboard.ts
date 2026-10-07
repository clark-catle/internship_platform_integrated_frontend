import { mockApplication } from '@/data/applications'
import { mockCompanies } from '@/data/companies'
import { mockStudentInternships } from '@/data/internship'
import { mockAdminNotifications } from '@/data/notification'
import { mockStudentAccounts, mockUserAccounts } from '@/data/user'
import { Briefcase, Building2, ClipboardList, ShieldAlert, Users } from '@lucide/vue'

export const useAdminDashboard = () => {
  const applications = mockApplication
  const internships = mockStudentInternships
  const users = mockUserAccounts
  const companies = mockCompanies
  const students = mockStudentAccounts
  const notifications = mockAdminNotifications

  const pendingCount = applications.filter(
    (a) => a.status === 'pending' || a.status === 'in review',
  ).length

  const removedCount = internships.filter((i) => !!i.deleted_at).length

  const statCards = [
    {
      label: 'Total accounts',
      value: users.length,
      icon: Users,
      tone: 'bg-accent text-accent-foreground',
    },
    {
      label: 'Companies',
      value: companies.length,
      icon: Building2,
      tone: 'badge-primary',
    },
    { label: 'Students', value: students.length, icon: Users, tone: 'badge-info' },
    {
      label: 'Active postings',
      value: internships.filter((val) => !val.deleted_at && !val.admin_deleted_at).length,
      icon: Briefcase,
      tone: 'badge-success',
    },
    {
      label: 'Applications in flight',
      value: pendingCount,
      icon: ClipboardList,
      tone: 'badge-warning',
    },
    {
      label: 'Removed postings',
      value: removedCount,
      icon: ShieldAlert,
      tone: 'badge-danger',
    },
  ]

  const recentApplications = applications
    .sort((a, b) => new Date(b.applied_at).getTime() - new Date(a.applied_at).getTime())
    .slice(0, 5)

  const recentNotifications = notifications.slice(0, 4)

  return { statCards, recentApplications, recentNotifications }
}
