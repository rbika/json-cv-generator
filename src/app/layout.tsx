import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/utils/common'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Nextjs Starter',
  description: 'Nextjs Starter Project',
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
      </body>
    </html>
  )
}

export default RootLayout
