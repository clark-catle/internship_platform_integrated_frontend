import type { internshipAllowance, internshipDuration, internshipSetup } from '@/shared/types'

export type filterGroupProp = {
  label: filterTypeKey
  options: string[]
  value: string
}

export type filtersType = {
  setup: 'all' | internshipSetup
  allowance: 'all' | internshipAllowance
}

export type filterTypeKey = keyof filtersType
