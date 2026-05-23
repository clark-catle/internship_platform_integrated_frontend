<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { featuredSection } from '../types'
import InternshipCard from './InternshipCard.vue'

const features: featuredSection[] = [
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
</script>

<template>
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Featured Opportunities
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-foreground">
            Hand-Picked For You
          </h2>
        </div>
        <RouterLink to="/">
          <Button variant="outline" className="rounded-xl hidden sm:flex gap-2">
            View all <ArrowRight className="w-4 h-4" /> </Button
        ></RouterLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InternshipCard v-for="feature in features" :key="feature.id" v-bind="feature" />
      </div>
    </div>
  </section>
</template>
