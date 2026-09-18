<script lang="ts" setup>
const { cols } = defineProps<{ cols: number }>()
</script>

<template>
  <tr className="border-b border-border">
    <td v-for="col in cols" :key="col" className="px-4 py-3">
      <div className="h-4 skeleton rounded-lg" :style="{ width: 60 + `${Math.random() * 40}%` }" />
    </td>
  </tr>
</template>
