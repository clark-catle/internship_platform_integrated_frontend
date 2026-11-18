<script lang="ts" setup>
defineProps<{ error: string[] | undefined }>()
</script>

<template>
  <div v-if="error">
    <p v-for="err in error" :key="err" class="text-xs text-destructive">
      {{ err }}
    </p>
  </div>
</template>
