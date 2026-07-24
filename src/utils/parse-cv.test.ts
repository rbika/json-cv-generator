import fs from 'node:fs'
import path from 'node:path'

import { describe, expect, it } from 'vitest'

import { parseCV } from '@/utils/parse-cv'

describe('parseCV', () => {
  it('parses a minimal valid CV', () => {
    const input = {
      basicInfo: {
        name: 'Jane Doe',
        jobTitle: 'Engineer',
        email: 'jane@example.com',
      },
      experience: {
        sectionTitle: 'Experience',
        data: [
          {
            company: 'Acme',
            position: 'Developer',
            timePeriod: '2020 - Present',
          },
        ],
      },
    }

    const result = parseCV(JSON.stringify(input))

    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data).toEqual(input)
    }
  })

  it('parses the full CV template', () => {
    const templatePath = path.join(process.cwd(), 'public', 'cv-template.json')
    const content = fs.readFileSync(templatePath, 'utf-8')

    const result = parseCV(content)

    expect(result.success).toBe(true)
  })

  it('returns an error for invalid JSON', () => {
    const result = parseCV('{ not json')

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('Invalid JSON file. Please try again.')
    }
  })

  it('returns an error with path for schema violations', () => {
    const input = {
      basicInfo: {
        name: 'Jane Doe',
        jobTitle: 'Engineer',
      },
      experience: {
        sectionTitle: 'Experience',
        data: [
          {
            company: 'Acme',
            position: 'Developer',
            timePeriod: '2020 - Present',
          },
        ],
      },
    }

    const result = parseCV(JSON.stringify(input))

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toContain('basicInfo.email')
    }
  })

  it('returns an error for root schema violations', () => {
    const result = parseCV('null')

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.length).toBeGreaterThan(0)
    }
  })
})
