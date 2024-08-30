import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(dateInput: string | Date): string {
  const date = new Date(dateInput)
  const now = new Date()

  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffSeconds = Math.floor(diffTime / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffDays / 365)

  if (diffYears > 0) return `${diffYears} years ago`
  if (diffMonths > 0) return `${diffMonths} months ago`
  if (diffWeeks > 0) return `${diffWeeks} weeks ago`
  if (diffDays > 0) return `${diffDays} days ago`
  if (diffHours > 0) return `${diffHours} hours ago`
  if (diffMinutes > 0) return `${diffMinutes} minutes ago`
  return `${diffSeconds} seconds ago`
}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
export const AUTHORIZE_URL = "https://github.com/login/oauth/authorize"
export const ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token"
export const GET_USER_URL = "https://api.github.com/user"
