<script setup lang="ts">
import NavbarLayoutBase from '@/shared/components/NavbarLayoutBase.vue'
import SidebarBase from '@/shared/components/SidebarBase.vue'
</script>

<template>
  <NavbarLayoutBase>
    <template #nav><SidebarBase role="student" /></template>
  </NavbarLayoutBase>
</template>
