import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import EmberField from '@/components/EmberField'
import './globals.css'

const outfit = Outfit({
  subsets:  ['latin'],
  weight:   ['400', '600', '700', '800', '900'],
  variable: '--font-outfit',
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
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink text-ash font-body">
        <EmberField />
        <div className="relative flex flex-col min-h-full" style={{ zIndex: 1 }}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
