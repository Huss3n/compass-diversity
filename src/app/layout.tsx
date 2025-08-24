import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SkipToContent } from '@/components/SkipToContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Compass Diversity - NDIS Provider in Victoria',
  description: 'Compass Diversity is a dedicated NDIS provider based in Victoria, committed to delivering high-quality, person-centred supports that empower individuals to live independently and achieve their goals.',
  keywords: 'NDIS provider, disability support, Victoria, personal care, community participation, respite care, life skills development',
  authors: [{ name: 'Compass Diversity' }],
  openGraph: {
    title: 'Compass Diversity - NDIS Provider in Victoria',
    description: 'Quality NDIS supports with cultural understanding and compassionate care.',
    type: 'website',
    locale: 'en_AU',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '', // Add Google Search Console verification code if needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <SkipToContent />
        <Navigation />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}