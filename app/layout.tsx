import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gilgamesh Enterprise LLC — Building the Empire',
  description: 'Gilgamesh Enterprise is a Wyoming LLC building ventures that tear down paywalls and gatekeeping. Home of SocialMate, RenewalMate, and Hearthforge.',
  keywords: ['Gilgamesh Enterprise', 'Joshua Bostic', 'SocialMate', 'RenewalMate', 'Hearthforge', 'Wyoming LLC'],
  openGraph: {
    title: 'Gilgamesh Enterprise LLC',
    description: 'Building ventures that tear down paywalls and gatekeeping.',
    url: 'https://www.gilgameshenterprise.com',
    siteName: 'Gilgamesh Enterprise',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilgamesh Enterprise LLC',
    description: 'Building ventures that tear down paywalls and gatekeeping.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f0f0f0]">
        {children}
      </body>
    </html>
  )
}
