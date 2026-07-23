'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Container } from '@/components/container'
import { CVActions, type FontValue } from '@/components/cv-actions'
import { CVBasic } from '@/components/cv-basic'
import { useCV } from '@/utils/cv-store'
import { paths } from '@/utils/paths'

function CVPage() {
  const router = useRouter()
  const data = useCV()
  const [font, setFont] = useState<FontValue>('inter')

  useEffect(() => {
    if (!data) {
      router.replace(paths.home())
    }
  }, [])

  if (!data) return null

  return (
    <Container className="mt-5 flex flex-col gap-5">
      <CVActions font={font} onFontChange={setFont} />
      <CVBasic font={font} />
    </Container>
  )
}

export default CVPage
