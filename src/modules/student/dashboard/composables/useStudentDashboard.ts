import { useNotif } from '@/shared/composables/useNotif'
import { useApplication } from '../../application/composables/useApplications'
import { useStudentProfile } from '../../profile/composables/useStudentProfile'
import { computed } from 'vue'
import { CheckCircle2, ClipboardList, Clock, XCircle } from '@lucide/vue'

export const useStudentDashboard = () => {
  const { user } = useStudentProfile()
  const { applications } = useApplication()
  const { notifications, markAsRead } = useNotif()

  const counts = computed(() => {
    const apps = applications.value

    return {
      total: apps.length,
      pending: apps.filter((a) => a.status === 'pending').length,
      inReview: apps.filter((a) => a.status === 'in review').length,
      accepted: apps.filter((a) => a.status === 'accepted').length,
      rejected: apps.filter((a) => a.status === 'rejected').length,
    }
  })

  const statCards = computed(() => [
    {
      label: 'Total applications',
      value: counts.value.total,
      icon: ClipboardList,
      tone: 'bg-accent text-accent-foreground',
    },
    { label: 'In review', value: counts.value.inReview, icon: Clock, tone: 'badge-info' },
    { label: 'Accepted', value: counts.value.accepted, icon: CheckCircle2, tone: 'badge-success' },
    { label: 'Rejected', value: counts.value.rejected, icon: XCircle, tone: 'badge-danger' },
  ])

  const recentApplications = computed(() =>
    applications.value
      .sort((a, b) => new Date(b.applied_at).getTime() - new Date(a.applied_at).getTime())
      .slice(0, 4),
  )

  const recentNotifications = computed(() => notifications.value.slice(0, 4))

  // Profile completeness — a simple checklist over the fields the spec
  // treats as "required when adding" plus the optional resume/skills.
  const completeness = computed(() => {
    const p = user.student_info

    const checks = [
      !!p.name.first_name && !!p.name.last_name,
      !!p.course?.name,
      !!p.school,
      !!p.location.region && !!p.location.city,
      !!p.cellphone_number,
      p.student_skill.length > 0,
    ]

    const done = checks.filter(Boolean).length
    return { done, total: checks.length, percent: Math.round((done / checks.length) * 100) }
  })

  return {
    student: user.student_info,
    statCards,
    recentApplications,
    recentNotifications,
    markAsRead,
    completeness,
  }
}
