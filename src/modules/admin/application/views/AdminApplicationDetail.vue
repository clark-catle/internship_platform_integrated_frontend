<script setup lang="ts">
import ApplicationDetailBase from '@/shared/components/ApplicationDetailBase.vue'
import { useApplicationDetail } from '../composable/useApplicationDetail'

const { application } = useApplicationDetail()
</script>

<template>
  <ApplicationDetailBase v-model:application="application" />
</template>
