'use client'

import { useRef } from 'react'

import { toast } from 'sonner'

import { saveCV } from '@/utils/cv-store'
import { Button } from './ui/button'
import { Field, FieldLabel } from './ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const fontItems = [
  { label: 'Inter', value: 'inter' },
  { label: 'Geist', value: 'geist' },
  { label: 'IBM Plex Sans', value: 'ibm-plex-sans' },
  { label: 'Lora', value: 'lora' },
] as const

type FontValue = (typeof fontItems)[number]['value']

const fontValues = new Set<string>(fontItems.map((item) => item.value))

type CVActionsProps = {
  font: FontValue
  onFontChange: (font: FontValue) => void
}

function CVActions({ font, onFontChange }: CVActionsProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    const fileContent = await file.text()

    try {
      const data = JSON.parse(fileContent)
      saveCV(data)
    } catch {
      toast.error('Invalid JSON file. Please try again.')
    }
  }

  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <Field className="w-48">
          <FieldLabel>Font</FieldLabel>
          <Select
            items={[...fontItems]}
            value={font}
            onValueChange={(value) => {
              if (value && fontValues.has(value)) {
                onFontChange(value as FontValue)
              }
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fonts</SelectLabel>
                {fontItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </div>

      <div className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="file"
          accept="application/json"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button variant="outline" onClick={() => inputRef.current?.click()}>
          Upload new file
        </Button>
        <Button variant="outline" onClick={window.print}>
          Save as PDF
        </Button>
      </div>
    </div>
  )
}

export { CVActions }
export type { FontValue }
