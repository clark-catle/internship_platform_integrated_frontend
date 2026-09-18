import type {
  internship,
  internshipAllowance,
  internshipDuration,
  internshipSetup,
} from '@/shared/types'

export type filterGroupProp<T extends filterTypeKey> = {
  label: T
  options: filtersType[T][]
  value: filtersType[T]
}

export type filtersType = {
  setup: 'all' | internshipSetup
  allowance: 'all' | internshipAllowance
}

export type filterTypeKey = keyof filtersType

export type searchFilterPanelPropType = {
  filterCount: number
}

export type internshipCardPropType = {
  internship: internship
  index: number
}
