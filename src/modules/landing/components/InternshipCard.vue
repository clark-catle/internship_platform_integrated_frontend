<script setup lang="ts">
import { Motion } from 'motion-v'
import type { internshipCategory, internshipSetup, landingFeaturedSection } from '@/shared/types'
import { ArrowRight, Bookmark, Clock, DollarSign, Heart, MapPin, Zap } from '@lucide/vue'
import ButtonBase from '@/shared/components/ButtonBase.vue'
import { internshipCartCategoryColors, internshipCartTypeColors } from '@/data/landing'

const props = defineProps<landingFeaturedSection>()

const typeColors: Record<internshipSetup, string> = internshipCartTypeColors

const categoryColors: Record<internshipCategory, string> = internshipCartCategoryColors

const logoPlaceholder = props.company?.[0]?.toUpperCase() || 'C'
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ delay: 1 * 0.05, duration: 0.3 }"
    class="group relative bg-card rounded-2xl border border-border p-5 card-hover cursor-pointer shadow-card"
  >
    <div v-if="props.isFeatured">
      <div class="absolute top-3 right-3">
        <span
          class="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full gradient-primary text-white"
        >
          <Zap class="w-3 h-3" /> Featured
        </span>
      </div>
    </div>

    <div class="flex items-start gap-3 mb-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-lg text-white shadow-md gradient-primary"
      >
        <!-- image logo for each internchip card
        <img
          :src="props.company"
          alt=""
          class="w-full h-full rounded-xl object-cover"
          v-if="props.company"
        />
        <span v-else>{{ logoPlaceholder }}</span> -->

        <span>{{ logoPlaceholder }}</span>
      </div>
      <div class="flex-1 min-w-0">
        <h3
          class="font-semibold text-foreground text-sm leading-tight mb-0.5 group-hover:text-primary transition-colors line-clamp-1"
        >
          {{ props.role }}
        </h3>
        <p class="text-muted-foreground text-xs flex items-center gap-1">
          <Building2 class="w-3 h-3" /> {{ props.company }}
        </p>
      </div>
    </div>

    <div class="flex flex-wrap gap-1.5 mb-4">
      <span
        v-if="props.type"
        class="text-xs font-medium px-2 py-0.5 rounded-full"
        :class="[typeColors[props.type] || 'badge-primary']"
      >
        {{ props.type }}
      </span>

      <span
        v-if="props.category"
        class="text-xs font-medium px-2 py-0.5 rounded-full"
        :class="[categoryColors[props.category] || 'badge-primary']"
      >
        {{ props.category }}
      </span>

      <span
        v-for="skill in props.skills?.slice(0, 2)"
        :key="skill"
        class="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
      >
        {{ skill }}
      </span>
    </div>

    <div class="space-y-1.5 mb-4">
      <div v-if="props.location" class="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin class="w-3.5 h-3.5 text-primary" /> {{ props.location }}
      </div>

      <div v-if="props.isFeatured" class="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock class="w-3.5 h-3.5 text-primary" /> {{ props.duration + props.durationUnit }}
      </div>

      <div v-if="props.allowance" class="flex items-center gap-1.5 text-xs text-muted-foreground">
        <DollarSign class="w-3.5 h-3.5 text-primary" /> {{ props.allowance }}
      </div>
    </div>

    <div class="flex items-center justify-between pt-3 border-t border-border">
      <RouterLink to="/">
        <ButtonBase
          size="sm"
          class="gradient-primary text-white border-0 rounded-lg text-xs hover:opacity-90"
        >
          Apply Now <ArrowRight class="w-3 h-3 ml-1" />
        </ButtonBase>
      </RouterLink>

      <button
        class="p-2 rounded-lg transition-all duration-200"
        :class="[
          false
            ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
            : 'text-muted-foreground hover:text-primary hover:bg-accent',
        ]"
      >
        <Heart v-if="true" class="w-4 h-4 fill-current" />
        <Bookmark v-else class="w-4 h-4" />
      </button>
    </div>
  </Motion>
</template>
