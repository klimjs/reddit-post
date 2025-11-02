import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Theme } from '@radix-ui/themes'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Reddit Post App',
  description:
    'POC covering the main functionality of allowing users to post on Reddit into a specific community.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme appearance="dark">{children}</Theme>
      </body>
    </html>
  )
}
