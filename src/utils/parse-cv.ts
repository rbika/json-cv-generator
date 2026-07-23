import { z } from 'zod'

import { cvSchema, type CV } from '@/types/cv'

type ParseCVResult =
  | { success: true; data: CV }
  | { success: false; error: string }

function formatZodError(error: z.ZodError): string {
  const firstIssue = error.issues[0]
  if (!firstIssue) return 'Invalid CV data. Please check the template.'

  const path = firstIssue.path.join('.')
  const location = path ? ` at "${path}"` : ''
  return `Invalid CV data${location}: ${firstIssue.message}`
}

function parseCV(content: string): ParseCVResult {
  let json: unknown

  try {
    json = JSON.parse(content)
  } catch {
    return { success: false, error: 'Invalid JSON file. Please try again.' }
  }

  const result = cvSchema.safeParse(json)
  if (!result.success) {
    return { success: false, error: formatZodError(result.error) }
  }

  return { success: true, data: result.data }
}

export { parseCV }
export type { ParseCVResult }
