import type { apiMethod, ApiResponse, requestArg } from '@/shared/types'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

/**
 * the generic type `T` is the payload/body type and the `R` is the response
 * @param param0
 * @returns
 */
export const request = async <T = unknown, R = unknown>({
  endpoint,
  body,
  version = 'v1',
  options = {},
}: requestArg<T>): Promise<ApiResponse<R>> => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${BASE_URL}/${version}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  })

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null)
    throw new Error(errorBody?.message || `Request failed: ${res.status}`)
  }

  return res.json()
}
