<script setup lang="ts">
import { useRoute } from 'vue-router'
import { companyInternships } from '@/data/companies'
import CompanyDetailBase from '@/shared/components/CompanyDetailBase.vue'
import { useCompanyManageDetail } from '../composables/useManageCompanyDetail'

const route = useRoute()
const { company, toggleVerify } = useCompanyManageDetail(Number(route.params.id))

const internship = companyInternships(company.value?.internshipId)
</script>

<template>
  <CompanyDetailBase :company="company" :internship="internship" @toggle-verify="toggleVerify" />
</template>
