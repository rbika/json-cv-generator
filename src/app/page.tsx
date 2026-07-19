import Link from 'next/link'

import { Container } from '@/components/container'

const HomePage = () => {
  return (
    <Container className="mt-5">
      <p className="text-muted-foreground mt-3 text-base leading-relaxed">
        An opinionated starter template for building full-stack Next.js apps.
        <br />
        For more information, please visit the{' '}
        <Link
          href="https://github.com/rbika/nextjs-starter"
          className="text-foreground hover:text-primary hover:underline"
        >
          Github repository
        </Link>
        .
      </p>
    </Container>
  )
}

export default HomePage
