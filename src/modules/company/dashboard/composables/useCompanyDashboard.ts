import { useNotif } from '@/shared/composables/useNotif'
import { useApplication } from '../../application/composable/useApplication'
import { useInternship } from '../../internship/composables/useInternship'
import { useCompanyProfile } from '../../profile/composables/useCompanyProfile'
import { computed } from 'vue'
import { Briefcase, ClipboardList, Clock, UserCheck } from '@lucide/vue'

export const useCompanyDashboard = () => {
  const { user } = useCompanyProfile()
  const { applications } = useApplication()
  const { internships, activeIntenrship } = useInternship()
  const { notifications, removeNotification } = useNotif()

  const pendingReview = computed(
    () =>
      applications.value.filter((a) => a.status === 'pending' || a.status === 'in review').length,
  )
  const decisionReady = computed(
    () =>
      applications.value.filter((a) => a.status === 'in review' && a.progress === 'decision')
        .length,
  )

  const statCards = computed(() => [
    {
      label: 'Active postings',
      value: activeIntenrship(true),
      icon: Briefcase,
      tone: 'bg-accent text-accent-foreground',
    },
    {
      label: 'Total applicants',
      value: applications.value.length,
      icon: ClipboardList,
      tone: 'badge-primary',
    },
    { label: 'Awaiting review', value: pendingReview.value, icon: Clock, tone: 'badge-warning' },
    {
      label: 'Ready for decision',
      value: decisionReady.value,
      icon: UserCheck,
      tone: 'badge-info',
    },
  ])

  const needsAttention = computed(() =>
    applications.value
      .filter(
        (a) => a.status === 'pending' || (a.status === 'in review' && a.progress === 'decision'),
      )
      .sort((a, b) => new Date(a.applied_at).getTime() - new Date(b.applied_at).getTime())
      .slice(0, 5),
  )

  const recentPostings = computed(() => internships.value.sort((a, b) => b.id - a.id).slice(0, 4))

  const recentNotifications = computed(() => notifications.value.slice(0, 4))

  return {
    company: user.value.company_info,
    statCards,
    needsAttention,
    recentPostings,
    removeNotification,
    recentNotifications,
  }
}
