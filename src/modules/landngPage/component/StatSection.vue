<script setup lang="ts">
import { Briefcase, Globe, TrendingUp, Users } from '@lucide/vue'
import { Motion } from 'motion-v'

const stats = [
  { value: '50K+', label: 'Active Students', icon: Users },
  { value: '12K+', label: 'Internships Posted', icon: Briefcase },
  { value: '3.5K+', label: 'Partner Companies', icon: Globe },
  { value: '94%', label: 'Placement Rate', icon: TrendingUp },
]
</script>

<template>
  <section className="py-10 border-y border-border bg-card/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Motion
          v-for="(stat, i) in stats"
          :key="stat.label"
          tag="div"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ delay: i * 0.1 }"
          :in-view-options="{ once: true }"
          class="text-center"
        >
          <div class="w-12 h-12 rounded-xl bg-accent mx-auto mb-3 flex items-center justify-center">
            <component :is="stat.icon" class="w-6 h-6 text-primary" />
          </div>
          <p class="font-poppins font-bold text-3xl text-foreground">{{ stat.value }}</p>
          <p class="text-muted-foreground text-sm mt-1">{{ stat.label }}</p>
        </Motion>
      </div>
    </div>
  </section>
</template>
