import type { internship } from '@/shared/types'
import { mockCompanies } from './companies'

const byId = (id: number) => mockCompanies.find((c) => c.id === id)

export const mockInternships: internship[] = [
  {
    id: 1,
    title: 'Backend Developer Intern (Laravel)',
    description:
      'Work alongside our engineering team building and maintaining APIs for our internal trucking management system. You will help design database schemas, write endpoints, and fix bugs in a real production codebase.',
    requirements:
      'Comfortable with PHP fundamentals and basic SQL. Familiarity with Laravel is a plus but not required — we will teach you our conventions.',
    location: { region: 'NCR', city: 'Pasig City' },
    setup: 'hybrid',
    allowance: 'provided',
    duration: 6,
    duration_unit: 'month',
    internship_skill: [
      { id: 1, name: 'Laravel' },
      { id: 4, name: 'PHP' },
      { id: 11, name: 'PostgreSQL' },
    ],
    company: byId(1),
    deleted_at: null,
  },
  {
    id: 2,
    title: 'Frontend Developer Intern (React)',
    description:
      'Join our small product team building internal dashboards used by our operations staff. You will ship real features to production every sprint.',
    requirements: 'Basic React and JavaScript. Portfolio or class projects welcome.',
    location: {
      region: 'Calabarzon',
      city: 'Santa Rosa',
    },
    setup: 'remote',
    allowance: 'discuss',
    duration: 3,
    duration_unit: 'month',
    internship_skill: [
      { id: 2, name: 'React' },
      { id: 5, name: 'JavaScript' },
      { id: 17, name: 'Tailwind CSS' },
    ],
    company: byId(2),
    deleted_at: null,
  },
  {
    id: 3,
    title: 'UI/UX Design Intern',
    description:
      'Support our design team on client branding and product design work — wireframes, mockups, and design system components in Figma.',
    requirements: 'A portfolio (even school projects) showing your design process.',
    location: { region: 'NCR', city: 'Makati City' },
    setup: 'on site',
    allowance: 'non',
    duration: 4,
    duration_unit: 'month',
    internship_skill: [
      { id: 7, name: 'Figma' },
      { id: 8, name: 'UI/UX Design' },
    ],
    company: byId(3),
    deleted_at: null,
  },
  {
    id: 4,
    title: 'Data Analyst Intern',
    description:
      'Help our analysts clean and explore retail transaction data, build simple dashboards, and present weekly findings to the team.',
    requirements: 'Basic SQL and spreadsheet skills. Python is a plus.',
    location: { region: 'Central Visayas', city: 'Cebu City' },
    setup: 'hybrid',
    allowance: 'provided',
    duration: 5,
    duration_unit: 'month',
    internship_skill: [
      { id: 9, name: 'Python' },
      { id: 10, name: 'SQL' },
      { id: 14, name: 'Data Analysis' },
    ],
    company: byId(4),
    deleted_at: null,
  },
  {
    id: 5,
    title: 'Full-Stack Developer Intern',
    description:
      'Build features end-to-end across our dispatch and tracking system — from database migrations to the UI operators use every day.',
    requirements: 'Any exposure to a backend framework and a JS framework. Git basics required.',
    location: { region: 'Calabarzon', city: 'Tanauan City' },
    setup: 'on site',
    allowance: 'provided',
    duration: 6,
    duration_unit: 'month',
    internship_skill: [
      { id: 1, name: 'Laravel' },
      { id: 3, name: 'Vue.js' },
      { id: 15, name: 'Git & GitHub' },
      { id: 16, name: 'REST APIs' },
    ],
    company: byId(5),
    deleted_at: null,
  },
  {
    id: 6,
    title: 'Content Writing Intern',
    description:
      'Write and edit articles for our digital publication, assist with light social media scheduling, and pitch story ideas in our weekly editorial meeting.',
    requirements: 'Strong written English. Writing samples required.',
    location: { region: 'NCR', city: 'Quezon City' },
    setup: 'remote',
    allowance: 'non',
    duration: 3,
    duration_unit: 'month',
    internship_skill: [
      { id: 18, name: 'Content Writing' },
      { id: 12, name: 'Communication' },
    ],
    company: byId(6),
    deleted_at: null,
  },
  {
    id: 7,
    title: 'QA / Software Testing Intern',
    description:
      'Test new features before release, write bug reports, and help build out our test-case checklist for the dispatch platform.',
    requirements: 'Detail-oriented, comfortable following structured test scripts.',
    location: { region: 'NCR', city: 'Pasig City' },
    setup: 'hybrid',
    allowance: 'discuss',
    duration: 40,
    duration_unit: 'day',
    internship_skill: [
      { id: 12, name: 'Communication' },
      { id: 13, name: 'Project Management' },
    ],
    company: byId(1),
    deleted_at: null,
  },
]
