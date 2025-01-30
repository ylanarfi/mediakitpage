import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ja2 | MediaKit',
  description: 'Professional gaming and streaming media kit for JA2',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon/favicon.svg',
        href: '/images/favicon/favicon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicon/favicon.svg',
        href: '/images/favicon/favicon.svg',
      },
    ],
    shortcut: ['/images/favicon/favicon.svg'],
    apple: [
      { url: '/images/favicon/favicon.svg' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="alternate icon" href="/images/favicon/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  )
}