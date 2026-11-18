import { ApiError } from '@/lib/api-client'
import type { ErrorResponse } from '@/shared/types'

/**
 * turns any caught error into something safe to show in a form,
 * `F` is the form's field names so `fieldErrors` is typed per field
 */
export const renderError = <F extends string = string>(e: unknown) => {
  if (e instanceof ApiError && e.isValidation) {
    return { message: null, fieldErrors: e.errors as ErrorResponse<F>['errors'] }
  }

  // 4xx messages are meant for the user, e.g. "Invalid credentials"
  if (e instanceof ApiError && e.status < 500) {
    return { message: e.message, fieldErrors: {} }
  }

  // 5xx / network errors can carry internals (sql, stack traces), never show them
  console.error(e)
  return { message: 'Something went wrong. Please try again.', fieldErrors: {} }
}
