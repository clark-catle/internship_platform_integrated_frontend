<script setup lang="ts">
import { footerItems, footerLists } from '@/data/landing'
import { Briefcase } from '@lucide/vue'

const lists = footerLists

const items = footerItems
</script>

<template>
  <footer class="border-t border-border py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-7 h-7 gradient-primary rounded-lg flex items-center justify-center">
              <Briefcase class="w-4 h-4 text-white" />
            </div>
            <span class="font-poppins font-bold text-foreground">InternMatch</span>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            Connecting students with career-defining internship opportunities.
          </p>
        </div>
        <div v-for="list in lists" :key="list.title">
          <p class="font-semibold text-foreground text-sm mb-3">{{ list.title }}</p>
          <ul class="space-y-2">
            <li v-for="link in list.links" :key="link">
              <RouterLink
                to="/"
                class="text-xs text-muted-foreground hover:text-primary transition-colors"
                >{{ link }}</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p class="text-xs text-muted-foreground">© 2026 InternMatch. All rights reserved.</p>
        <div class="flex gap-4">
          <RouterLink
            v-for="item in items"
            :key="item"
            to="/"
            class="text-xs text-muted-foreground hover:text-primary transition-colors"
            >{{ item }}</RouterLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>
