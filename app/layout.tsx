import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BRAND_NAME, BRAND_URL } from './config'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

const description = 'A place to talk ideas for building a utopian future.'
export const metadata: Metadata = {
  title: {
    default: `Home | ${BRAND_NAME}`,
    template: `%s | ${BRAND_NAME}`
  },
  description,
  metadataBase: new URL(BRAND_URL),
  openGraph: {
    title: `Home | ${BRAND_NAME}`,
    description,
    url: BRAND_URL,
    siteName: `${BRAND_NAME}`,
    images: [
      {
        url: '/images/og.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en-US',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />

      <body className={inter.className}>{children}</body>
    </html>
  )
}
