export type internshipSetup = 'on site' | 'hybrid' | 'remote'

export type internshipDurationUnit = 'hr' | 'day' | 'month'

export type internshipDuration = {
  duration: number
  durationUnit: internshipDurationUnit
}

export type internshipAllowance = 'non' | 'provided' | 'discuss'

export type internshipCategory = 'technology' | 'design' | 'marketing' | 'finance' | 'data science'

export type buttonBase = {
  variant?: 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'lg' | 'icon'
}
