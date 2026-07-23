import type { Metadata } from 'next'
import { Geist, IBM_Plex_Sans, Inter, Lora } from 'next/font/google'

import './globals.css'

import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/utils/cn'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
})
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

const fontVariables = cn(
  inter.variable,
  geist.variable,
  ibmPlexSans.variable,
  lora.variable,
)

export const metadata: Metadata = {
  title: 'JSON CV Generator',
  description: 'Generate professional CVs from JSON files.',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('font-sans', fontVariables)}
    >
      <body className={cn('font-sans antialiased', fontVariables)}>
        <Header />
        <main className="my-12 pt-px font-sans">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
