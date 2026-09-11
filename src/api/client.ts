import type { apiMethod, requestArg } from '@/shared/types'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

async function request<T>({ endpoint, method = 'GET', body, version = 'V1' }: requestArg<T>) {
  const token = localStorage.getItem('token')

  try {
    const res = await fetch(`${BASE_URL}/${version}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...(body && { body: JSON.stringify(body) }),
    })

    if (!res.ok) {
      const errorBody = await res.json().catch(() => null)
      throw new Error(errorBody?.message || `Request failed: ${res.status}`)
    }

    return res.json()
  } catch (error) {
    console.log(`Error occurred: ${(error as Error).message}`)

    throw new Error(`Error occurred: ${(error as Error).message}`)
  }
}

export default {
  get: (endpoint: string, version?: string) => request({ endpoint, version }),
  post: <T>(endpoint: string, body: T, version?: string) =>
    request({ endpoint, body, version, method: 'POST' }),
  put: <T>(endpoint: string, body: T, version?: string) =>
    request({ endpoint, body, version, method: 'PUT' }),
  delete: (endpoint: string, version?: string) => request({ endpoint, version, method: 'DELETE' }),
}
