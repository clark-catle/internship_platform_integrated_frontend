<script setup lang="ts">
import InternshipDetailBase from '@/shared/components/InternshipDetailBase.vue'
import { useInternshipDetail } from '../composables/useInternshipDetail'

const { internship, company } = useInternshipDetail()
</script>

<template>
  <InternshipDetailBase :internship="internship" :company="company" />
</template>
