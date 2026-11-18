import type { ErrorResponse, requestArg } from '@/shared/types'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export class ApiError<F extends string = string> extends Error {
  status: number
  errors: ErrorResponse<F>['errors']

  constructor(status: number, body: Partial<ErrorResponse<F>> | null) {
    super(body?.message || `Request failed: ${status}`)
    this.status = status
    this.errors = body?.errors ?? {}
  }

  /** 422 from the backend's validator, `errors` holds the per-field messages */
  get isValidation() {
    return this.status === 422
  }
}

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
}: requestArg<T>): Promise<R> => {
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
    throw new ApiError(res.status, errorBody)
  }

  return res.json()
}
