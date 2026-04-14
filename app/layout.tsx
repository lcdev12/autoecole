import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { seoConfig, siteConfig } from '@/lib/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: [
    'auto-ecole',
    'permis de conduire',
    'permis B',
    'code de la route',
    'conduite accompagnee',
    'AAC',
    siteConfig.city,
  ],
  openGraph: {
    title: seoConfig.ogTitle,
    description: seoConfig.ogDescription,
    type: 'website',
    locale: 'fr_FR',
    url: seoConfig.url,
    siteName: siteConfig.businessName,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
