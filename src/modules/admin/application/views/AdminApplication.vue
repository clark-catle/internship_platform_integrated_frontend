<script setup lang="ts">
import { useApplication } from '../composable/useApplication'
import ApplicationListBase from '@/shared/components/ApplicationListBase.vue'

const { applications, activeTab } = useApplication()
</script>

<template>
  <ApplicationListBase v-model:active-tab="activeTab" v-model:applications="applications" />
</template>
