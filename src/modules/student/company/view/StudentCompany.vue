<script setup lang="ts">
import { useCompany } from '@/modules/admin/company/composables/useCompany'
import CompanyListBase from '@/shared/components/CompanyListBase.vue'

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
