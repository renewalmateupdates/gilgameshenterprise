import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets:  ['latin'],
  weight:   ['400', '600', '700', '800'],
  variable: '--font-syne',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['400', '500', '600'],
  variable: '--font-dm-sans',
  display:  'swap',
})

export const metadata: Metadata = {
  title: 'Gilgamesh Enterprise LLC — Building the Empire',
  description:
    'Gilgamesh Enterprise is a Wyoming LLC building ventures that tear down paywalls and gatekeeping. Home of SocialMate, RenewalMate, and more.',
  keywords: ['Gilgamesh Enterprise', 'Joshua Bostic', 'SocialMate', 'RenewalMate', 'Wyoming LLC'],
  openGraph: {
    title:       'Gilgamesh Enterprise LLC',
    description: 'Building ventures that tear down paywalls and gatekeeping.',
    url:         'https://www.gilgameshenterprise.com',
    siteName:    'Gilgamesh Enterprise',
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Gilgamesh Enterprise LLC',
    description: 'Building ventures that tear down paywalls and gatekeeping.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink text-ash font-body">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
