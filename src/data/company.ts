import type { company } from '@/shared/types'

export const mockCompanyUser: company = {
  id: 1,
  company_name: 'Opalus Technologies',
  description:
    'A software consultancy building backend systems and full-stack platforms for logistics and enterprise clients across the Philippines. Our interns work directly with senior engineers on real production code, not busywork.',
  website: 'https://opalus.example.com',
  is_verified: true,
  location: { region: 'NCR', city: 'Pasig City' },
  logo_url: 'https://api.dicebear.com/9.x/initials/svg?seed=Opalus&backgroundType=gradientLinear',
}
