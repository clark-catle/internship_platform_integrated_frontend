import type { company } from '@/shared/types'

export const mockCompanies: company[] = [
  {
    id: 1,
    company_name: 'Opalus Technologies',
    description:
      'A software consultancy building backend systems and full-stack platforms for logistics and enterprise clients across the Philippines.',
    website: 'https://opalus.example.com',
    is_verified: true,
    location: { region: 'NCR', city: 'Pasig City' },
    logo_url: 'https://api.dicebear.com/9.x/initials/svg?seed=Opalus&backgroundType=gradientLinear',
  },
  {
    id: 2,
    company_name: 'Northwind Software',
    description:
      'Product studio focused on developer tools and internal dashboards. Small team, high ownership internships.',
    website: 'https://northwind.example.com',
    is_verified: true,
    location: { region: 'Calabarzon', city: 'Santa Rosa' },
    logo_url:
      'https://api.dicebear.com/9.x/initials/svg?seed=Northwind&backgroundType=gradientLinear',
  },
  {
    id: 3,
    company_name: 'Brightleaf Design Co.',
    description:
      'Design agency specializing in branding, product design, and marketing sites for startups.',
    website: 'https://brightleaf.example.com',
    is_verified: false,
    location: { region: 'NCR', city: 'Makati City' },
    logo_url:
      'https://api.dicebear.com/9.x/initials/svg?seed=Brightleaf&backgroundType=gradientLinear',
  },
  {
    id: 4,
    company_name: 'Vantage Data Labs',
    description:
      'Data analytics firm helping retail brands turn point-of-sale data into decisions. Interns work directly with analysts.',
    website: 'https://vantagedata.example.com',
    is_verified: true,
    location: { region: 'Central Visayas', city: 'Cebu City' },
    logo_url:
      'https://api.dicebear.com/9.x/initials/svg?seed=Vantage&backgroundType=gradientLinear',
  },
  {
    id: 5,
    company_name: 'Fieldstone Logistics',
    description:
      'Freight and trucking management company modernizing its dispatch and tracking systems.',
    website: 'https://fieldstone.example.com',
    is_verified: true,
    location: { region: 'Calabarzon', city: 'Tanauan City' },
    logo_url:
      'https://api.dicebear.com/9.x/initials/svg?seed=Fieldstone&backgroundType=gradientLinear',
  },
  {
    id: 6,
    company_name: 'Paperlane Media',
    description: 'Digital publication and content studio looking for writers and social interns.',
    website: 'https://paperlane.example.com',
    is_verified: false,
    location: { region: 'NCR', city: 'Quezon City' },
    logo_url:
      'https://api.dicebear.com/9.x/initials/svg?seed=Paperlane&backgroundType=gradientLinear',
  },
]
