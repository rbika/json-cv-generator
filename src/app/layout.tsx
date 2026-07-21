import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/utils/cn'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="my-12 pt-px font-sans">{children}</main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
