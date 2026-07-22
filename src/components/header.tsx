import Link from 'next/link'

import { BracesIcon } from 'lucide-react'

import { Container } from '@/components/container'
import { GithubIcon } from '@/components/icons/github-icon'
import { paths } from '@/utils/paths'

const Header = () => {
  return (
    <nav className="bg-background fixed top-0 right-0 left-0 z-20 h-12 w-full border-b">
      <Container className="flex h-full items-center">
        <div className="flex w-full items-center justify-between gap-2">
          <Link href={paths.home()} className="flex items-center gap-2">
            <BracesIcon className="size-6" />
            <span className="text-xl font-bold">CV Generator</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/rbika/json-cv-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-5" />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export { Header }
