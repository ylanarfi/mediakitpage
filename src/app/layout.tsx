import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ja2 | MediaKit',
  description: 'Professional gaming and streaming media kit for JA2, featuring social media stats, gaming achievements, and content creation highlights.',
  keywords: ['ja2', 'gaming', 'streamer', 'valorant', 'media kit', 'content creator'],
  openGraph: {
    title: 'ja2 | MediaKit',
    description: 'Professional gaming and streaming media kit for JA2',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ja2 | MediaKit',
    description: 'Professional gaming and streaming media kit for JA2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  )
}