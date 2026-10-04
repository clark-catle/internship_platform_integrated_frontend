<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCompanyDetail } from '../composables/useCompanyDetail'
import { companyInternships } from '@/data/companies'
import CompanyDetailBase from '@/shared/components/CompanyDetailBase.vue'

const route = useRoute()
const { company } = useCompanyDetail(Number(route.params.id))

const internship = companyInternships(company?.internshipId)
</script>

<template>
  <CompanyDetailBase :company="company" :internship="internship" />
</template>
