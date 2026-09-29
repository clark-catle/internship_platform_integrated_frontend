import type {
  internship,
  internshipAllowance,
  internshipDurationUnit,
  internshipSetup,
} from '@/shared/types'
import { reactive } from 'vue'

export const useForm = (defaultVal: internship | null) => {
  const form = reactive({
    title: '',
    description: '',
    requirements: '',
    region: '',
    city: '',
    setup: 'on site' as internshipSetup,
    allowance: 'non' as internshipAllowance,
    duration: 1,
    duration_unit: 'month' as internshipDurationUnit,
    skills_id: [] as number[],
    other_skills: [] as string[],
  })
}
