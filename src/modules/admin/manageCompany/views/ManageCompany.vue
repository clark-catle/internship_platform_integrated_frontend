<script setup lang="ts">
import CompanyListBase from '@/shared/components/CompanyListBase.vue'
import { useCompany } from '../composables/useManageCompany'

const { companies, isVerified, search } = useCompany()
</script>

<template>
  <CompanyListBase
    v-model:search="search"
    v-model:is-verified="isVerified"
    :companies="companies"
    @toggle-is-verified="isVerified = !isVerified"
  />
</template>
