'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Container } from '@/components/container'
import { useCV } from '@/utils/cv-store'
import { paths } from '@/utils/paths'

function CVPage() {
  const router = useRouter()
  const data = useCV()

  useEffect(() => {
    if (!data) {
      router.replace(paths.home())
    }
  }, [])

  if (!data) return null

  return (
    <Container>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  )
}

export default CVPage
