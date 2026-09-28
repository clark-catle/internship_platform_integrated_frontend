import type {
  internshipCategory,
  internshipSetup,
  landingFeaturedSection,
  whyFeature,
  whySectionColor,
} from '@/shared/types'
import { Briefcase, Globe, Heart, Shield, TrendingUp, Users, Zap } from '@lucide/vue'

export const loginAnalyticItem = [
  ['50K+', 'Students'],
  ['12K+', 'Internships'],
  ['94%', 'Placed'],
  ['3.5K+', 'Companies'],
]

export const landingFeaturesItem: landingFeaturedSection[] = [
  {
    id: '1',
    company: 'Google',
    role: 'Frontend Development',
    type: 'hybrid',
    category: 'technology',
    skills: ['React', 'TypeScript'],
    location: 'Mountain View, CA',
    duration: 3,
    durationUnit: 'month',
    allowance: 'non',
    isFeatured: true,
  },
  {
    id: '2',
    company: 'Figma',
    role: 'Product Design Intern',
    type: 'remote',
    category: 'design',
    skills: ['Figma', 'UX Research'],
    location: 'San Francisco, CA',
    duration: 3,
    durationUnit: 'month',
    allowance: 'discuss',
    isFeatured: true,
  },
  {
    id: '3',
    company: 'Netflix',
    role: 'Data Science Intern',
    type: 'on site',
    category: 'data science',
    skills: ['Python', 'SQL'],
    location: 'Los Gatos, CA',
    duration: 6,
    durationUnit: 'month',
    allowance: 'provided',
    isFeatured: true,
  },
]

export const footerLists = [
  {
    title: 'For Students',
    links: ['Browse Internships', 'My Applications', 'Student Profile', 'Resources'],
  },
  {
    title: 'For Companies',
    links: ['Post Internship', 'Manage Applicants', 'Analytics', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Blog', 'Careers', 'Contact'],
  },
]

export const footerItems = ['Privacy', 'Terms', 'Cookies']

export const internshipCartTypeColors: Record<internshipSetup, string> = {
  remote: 'badge-success',
  'on site': 'badge-info',
  hybrid: 'badge-warning',
}

export const internshipCartCategoryColors: Record<internshipCategory, string> = {
  technology: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  design: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  marketing: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  finance: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  'data science': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
}

export const landingStatSection = [
  { value: '50K+', label: 'Active Students', icon: Users },
  { value: '12K+', label: 'Internships Posted', icon: Briefcase },
  { value: '3.5K+', label: 'Partner Companies', icon: Globe },
  { value: '94%', label: 'Placement Rate', icon: TrendingUp },
]

export const testimonialsSectionItems = [
  {
    name: 'Aria Chen',
    role: 'CS Student, MIT',
    text: 'I found my dream internship at Google within 2 weeks of signing up. The matching was incredibly accurate!',
    avatar: 'AC',
    company: 'Google',
  },
  {
    name: 'Marcus Rivera',
    role: 'Business Student, NYU',
    text: 'InternMatch made the whole application process so much less overwhelming. The status tracking is a game changer.',
    avatar: 'MR',
    company: 'Deloitte',
  },
  {
    name: 'Priya Sharma',
    role: 'Design Student, RISD',
    text: 'As a designer, I was impressed by the UX and the quality of design internships available.',
    avatar: 'PS',
    company: 'Figma',
  },
]

export const whyColorSection: Record<whySectionColor, string> = {
  indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  green: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
  rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
}

export const whyFeatureSection: whyFeature[] = [
  {
    icon: Zap,
    title: 'AI-Powered Matching',
    desc: 'Smart algorithms match you with internships that fit your skills and goals.',
    color: 'indigo',
  },
  {
    icon: Shield,
    title: 'Verified Companies',
    desc: 'All companies are verified to ensure you apply to legitimate opportunities.',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Student-First Design',
    desc: 'Built with students in mind — intuitive, fast, and stress-free.',
    color: 'rose',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    desc: 'Real-time application tracking with status updates and interview scheduling.',
    color: 'amber',
  },
]
