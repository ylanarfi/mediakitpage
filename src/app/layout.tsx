import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ja2 | MediaKit',
  description: 'Professional gaming and streaming media kit for JA2',
  icons: {
    icon: [
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png' },
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
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}