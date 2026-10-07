import { mockAdminTokens } from '@/data/token'
import type { AdminToken } from '@/shared/types'
import { ref } from 'vue'

export const useToken = () => {
  const tokens = ref(mockAdminTokens)
  const deleteId = ref<number | null>(null)

  const copyToken = (token: string) => {
    navigator.clipboard.writeText(token)
  }

  const createNewToken = () => {
    const lastToken = tokens.value[tokens.value.length - 1]!
    const segment = () => Math.random().toString(36).slice(2, 6).toUpperCase().padEnd(4, 'X')

    const token = `ADM-${segment()}-${segment()}-${segment()}`

    const newToken: AdminToken = {
      id: lastToken?.id + 1,
      token: token,
      expiresAt: new Date(new Date().setHours(1)).toISOString(),
      usedAt: null,
    }

    return tokens.value.push(newToken)
  }

  const removeToken = (id: number) => {
    tokens.value = tokens.value.filter((val) => val.id !== id)

    deleteId.value = null
  }

  return { tokens, deleteId, copyToken, createNewToken, removeToken }
}
