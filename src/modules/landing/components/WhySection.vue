<script setup lang="ts">
import { Heart, Shield, TrendingUp, Zap } from '@lucide/vue'
import type { whyFeature, whySectionColor } from '../types'
import { Motion } from 'motion-v'

const color: Record<whySectionColor, string> = {
  indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  green: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
  rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
}

const features: whyFeature[] = [
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
</script>

<template>
  <section class="py-20 bg-card/30" id="why">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <p class="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Why InternMatch
        </p>
        <h2 class="font-poppins font-bold text-3xl sm:text-4xl text-foreground mb-4">
          Everything You Need to Succeed
        </h2>
        <p class="text-muted-foreground max-w-xl mx-auto">
          From discovery to offer letter, we support students every step of the way.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Motion
          as="div"
          v-for="(feature, i) in features"
          :key="feature.title"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ delay: i * 0.1 }"
          :viewport="{ once: true }"
          :in-view-options="{ once: true }"
          class="bg-card rounded-2xl border border-border p-6 card-hover shadow-card flex flex-col items-center"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            :class="[color[feature.color]]"
          >
            <component :is="feature.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-semibold text-foreground mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed text-center">
            {{ feature.desc }}
          </p>
        </Motion>
      </div>
    </div>
  </section>
</template>
