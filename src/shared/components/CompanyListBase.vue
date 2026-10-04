<script setup lang="ts">
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import { BadgeCheck, Building2, MapPin } from '@lucide/vue'
import type { company } from '../types'
import SearchCompany from './SearchCompany.vue'
import { roleFromUrl } from '@/utils/roleFromUrl.ts'

const search = defineModel<string>('search', { required: true })
const isVerified = defineModel<boolean>('isVerified', { required: true })

defineEmits<{
  toggleIsVerified: []
}>()

defineProps<{
  companies: company[]
}>()

const role = roleFromUrl()

const linkName =
  role === 'admin' ? 'adminManageCompanyDetail' : role === 'student' ? 'studentCompanyDetail' : ''
</script>

<template>
  <div class="space-y-6 main-wrapper">
    <SearchCompany
      v-model:search-model="search"
      v-model:isVerified="isVerified"
      @toggleIsVerified="$emit('toggleIsVerified')"
    />

    <EmptyStateBase
      v-if="companies.length === 0"
      :icon="Building2"
      title="No companies found"
      description="Try a different search term."
    />
    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        v-for="c in companies"
        :key="c.id"
        :to="{ name: linkName, params: { id: c.id } }"
        class="card-hover flex flex-col rounded-2xl border border-border bg-card p-5"
      >
        <div class="flex items-start gap-4">
          <img
            :src="c.logo_url"
            :alt="c.company_name"
            class="h-11 w-11 shrink-0 rounded-xl object-cover"
          />
          <div class="min-w-0">
            <div class="flex items-center gap-1.5">
              <h3 class="truncate text-sm font-semibold text-card-foreground">
                {{ c.company_name }}
              </h3>
              <BadgeCheck v-if="c.is_verified" class="h-4 w-4 shrink-0 text-primary" />
            </div>
            <p class="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin class="h-3 w-3" />
              {{ c.location.city }}, {{ c.location.region }}
            </p>
          </div>
        </div>
        <p class="mt-3 line-clamp-3 text-sm text-muted-foreground">{{ c.description }}</p>
      </RouterLink>
    </div>
  </div>
</template>
