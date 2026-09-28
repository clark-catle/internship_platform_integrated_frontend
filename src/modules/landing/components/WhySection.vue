<script setup lang="ts">
import { Motion } from 'motion-v'
import { whyColorSection, whyFeatureSection } from '@/data/landing'
import type { whyFeature, whySectionColor } from '@/shared/types'

const color: Record<whySectionColor, string> = whyColorSection

const features: whyFeature[] = whyFeatureSection
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
