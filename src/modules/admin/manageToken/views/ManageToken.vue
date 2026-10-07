<script setup lang="ts">
import { KeyRound, Plus } from '@lucide/vue'
import { useToken } from '../composables/useToken'
import EmptyStateBase from '@/shared/components/EmptyStateBase.vue'
import ConfirmDialog from '@/shared/components/ConfirmDialog.vue'
import TokenTable from '../component/TokenTable.vue'

const { tokens, deleteId, copyToken, createNewToken, removeToken } = useToken()
</script>

<template>
  <div class="space-y-6 main-wrapper pt-0!">
    <div class="p-5 flex justify-end">
      <button
        type="button"
        class="inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
        @click="createNewToken"
      >
        <Plus class="h-4 w-4" />
        Generate token
      </button>
    </div>

    <EmptyStateBase
      v-if="tokens.length === 0"
      :icon="KeyRound"
      title="No tokens yet"
      description="Generate a token to let a new admin register."
    />

    <TokenTable v-else :tokens="tokens" v-model:delete-id="deleteId" @copy-token="copyToken" />

    <ConfirmDialog
      v-if="deleteId"
      title="Delete this token?"
      description="This is permanent. The token can no longer be used to register an admin account."
      confirm-label="Delete"
      danger
      @confirm="removeToken(deleteId)"
      @cancel="deleteId = null"
    />
  </div>
</template>
