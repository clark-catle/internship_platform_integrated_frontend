import type { AdminToken } from '@/shared/types'

export const mockAdminTokens: AdminToken[] = [
  {
    id: 1,
    token: 'ADM-7F2K-9QRT-3XLM',
    expiresAt: '2026-10-08T08:00:00+08:00',
    usedAt: '2026-06-08T08:00:00+08:00',
  },
  {
    id: 2,
    token: 'ADM-2B9C-VXPL-8KDW',
    expiresAt: '2026-10-22T10:30:00+08:00',
    usedAt: null,
  },
  {
    id: 3,
    token: 'ADM-QZ41-M7YT-LR6N',
    expiresAt: '2026-09-01T09:15:00+08:00',
    usedAt: null,
  },
]
