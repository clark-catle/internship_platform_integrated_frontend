<script setup lang="ts">
import { testimonialsSectionItems } from '@/data/shared'
import { Star } from '@lucide/vue'
import { Motion } from 'motion-v'

const testimonials = testimonialsSectionItems
</script>

<template>
  <section class="py-20 bg-card/30" id="testimonial">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="font-poppins font-bold text-3xl sm:text-4xl text-foreground mb-4">
          Students Love InternMatch
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Motion
          as="div"
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.name"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ delay: i * 0.1 }"
          :viewport="{ once: true }"
          :inViewOptions="{ once: true }"
          class="bg-card rounded-2xl border border-border p-6 shadow-card"
        >
          <div class="flex items-center gap-1 mb-4">
            <Star v-for="num in 5" :key="{ num }" class="w-4 h-4 text-amber-400 fill-current" />
          </div>

          <p class="text-foreground text-sm leading-relaxed mb-6">"{{ testimonial.text }}"</p>

          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm"
            >
              {{ testimonial.avatar }}
            </div>
            <div>
              <p class="font-semibold text-sm text-foreground">{{ testimonial.name }}</p>
              <p class="text-xs text-muted-foreground">
                {{ testimonial.role }} → {{ testimonial.company }}
              </p>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
