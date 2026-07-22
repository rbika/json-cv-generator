'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Container } from '@/components/container'
import { CVBasic } from '@/components/cv-basic'
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
    <Container className="mt-5">
      <CVBasic />
    </Container>
  )
}

export default CVPage
