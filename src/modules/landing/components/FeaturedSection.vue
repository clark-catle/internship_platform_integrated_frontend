<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import InternshipCard from './InternshipCard.vue'
import { landingFeaturesItem } from '@/data/landing.ts'
import type { landingFeaturedSection } from '@/shared/types/index.ts'

const features: landingFeaturedSection[] = landingFeaturesItem
</script>

<template>
  <section className="py-20" id="feature">
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
