import type { internshipAllowance, internshipDuration, internshipSetup } from '@/shared/types'

export type filterGroupProp = {
  label: string
  options: string[]
  value: string
}

export type filtersType = {
  setup: 'all' | internshipSetup
  allowance: 'all' | internshipAllowance
  duration: 'all' | internshipDuration
}
