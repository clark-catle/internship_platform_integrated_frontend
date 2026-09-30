<script setup lang="ts">
import { Motion } from 'motion-v'
import LoadingBase from './LoadingBase.vue'
import { Camera } from '@lucide/vue'

defineProps<{ loading: boolean; name: string; email: string }>()
</script>

<template>
  <LoadingBase v-if="loading" />

  <div v-else class="max-w-4xl mx-auto main-wrapper">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-poppins font-bold text-2xl sm:text-3xl text-foreground">My Profile</h1>

        <slot name="page-sub-title" />
      </div>
      <slot name="save-action-button" />
    </div>

    <Motion
      as="div"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      class="bg-card rounded-2xl border border-border shadow-card mb-6 overflow-hidden"
    >
      <div class="h-32 gradient-hero" />
      <div class="px-6 pb-6">
        <div class="flex items-end gap-4 -mt-10">
          <div class="relative">
            <div
              class="w-20 h-20 rounded-2xl border-4 border-card gradient-primary flex items-center justify-center text-white font-bold text-2xl shadow-card"
            >
              {{ name[0]?.toUpperCase() }}
            </div>
            <button
              class="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white shadow-sm"
            >
              <Camera class="w-3.5 h-3.5" />
            </button>
          </div>
          <div class="pb-1">
            <h2 class="font-poppins font-semibold text-lg text-foreground">
              {{ name }}
            </h2>
            <p class="text-muted-foreground text-sm">{{ email }}</p>
          </div>
        </div>
      </div>
    </Motion>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <slot name="tab-section" />

      <div class="lg:col-span-3 space-y-5">
        <slot name="form-section" />
      </div>
    </div>
  </div>
</template>
