import type { applicationStatus, internshipDurationUnit } from '@/shared/types'

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-PH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  const units: [number, string][] = [
    [60, 'second'],
    [60, 'minute'],
    [24, 'hour'],
    [7, 'day'],
    [4.345, 'week'],
    [12, 'month'],
    [Number.POSITIVE_INFINITY, 'year'],
  ]
  let value = seconds
  for (const [amount, unit] of units) {
    if (value < amount) {
      const rounded = Math.floor(value)
      return rounded <= 1
        ? `${unit === 'second' ? 'just now' : `1 ${unit} ago`}`
        : `${rounded} ${unit}s ago`
    }
    value /= amount
  }
  return formatDate(iso)
}

export function durationLabel(duration: number, unit: internshipDurationUnit): string {
  const label = unit === 'hr' ? 'hour' : unit
  return `${duration} ${label}${duration === 1 ? '' : 's'}`
}

export function initials(first: string, last: string): string {
  return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
}

export const statusStyles: Record<applicationStatus, string> = {
  pending: 'badge-warning',
  'in review': 'badge-info',
  accepted: 'badge-success',
  rejected: 'badge-danger',
}

export const setupLabels: Record<string, string> = {
  'on site': 'On-site',
  hybrid: 'Hybrid',
  remote: 'Remote',
}

export const allowanceLabels: Record<string, string> = {
  non: 'No allowance',
  provided: 'Allowance provided',
  discuss: 'Allowance negotiable',
}
