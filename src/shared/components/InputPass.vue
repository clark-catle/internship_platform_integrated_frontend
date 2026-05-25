<script setup lang="ts">
import { Eye, EyeOff, Lock } from '@lucide/vue'
import InputBase from './InputBase.vue'
import { ref } from 'vue'

const showPass = ref(false)

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="relative">
    <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <InputBase
      placeholder="Enter your password"
      :type="showPass ? 'text' : 'password'"
      class="pl-10 pr-10 rounded-xl py-5"
      v-bind="$attrs"
      required
    />

    <button
      type="button"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      @click="showPass = !showPass"
    >
      <Eye v-if="showPass" class="w-4 h-4" />
      <EyeOff v-else class="w-4 h-4" />
    </button>
  </div>
</template>
