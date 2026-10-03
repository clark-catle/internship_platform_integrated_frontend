import type { applicationProgress, applicationStatus } from '@/shared/types'

export type applicationActionButtonProps = {
  status: applicationStatus
  progress: applicationProgress
}

export type actionbutton = 'nextStep' | 'accepted' | 'rejected' | 'revertReject'
