import Link from 'next/link'

import { RocketIcon } from 'lucide-react'

import { Container } from '@/components/container'
import { paths } from '@/utils/paths'

const Header = () => {
  return (
    <nav className="bg-background fixed top-0 right-0 left-0 z-20 h-12 w-full border-b">
      <Container className="flex h-full items-center">
        <Link href={paths.home()} className="flex items-center gap-2">
          <RocketIcon className="size-6" />
          <h1 className="text-xl font-bold">Nextjs Starter</h1>
        </Link>
      </Container>
    </nav>
  )
}

export { Header }
