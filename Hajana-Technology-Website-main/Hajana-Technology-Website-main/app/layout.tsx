import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatBot } from '@/components/interactive/ChatBot'

// Fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

// Global Metadata (SEO)
export const metadata: Metadata = {
  title: 'Hajana Technologies - AI-Powered Salesforce & Cloud Solutions',
  description: 'Leading Salesforce and AI technology company transforming businesses through intelligent solutions since 2014. Expert services in Einstein AI, Lightning Web Components, and custom AI development.',
  keywords: [
    'Salesforce',
    'AI Solutions',
    'Einstein AI',
    'Lightning Web Components',
    'MuleSoft Integration',
    'Cloud Services',
    'Machine Learning',
    'CRM Automation',
    'Digital Transformation'
  ],
  authors: [{ name: 'Hajana Technologies' }],
  creator: 'Hajana Technologies',
  publisher: 'Hajana Technologies',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://hajanatechnologies.com',
    title: 'Hajana Technologies - AI-Powered Salesforce & Cloud Solutions',
    description: 'Leading Salesforce and AI technology company transforming businesses through intelligent solutions since 2014.',
    siteName: 'Hajana Technologies',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Hajana Technologies - AI-Powered Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hajana Technologies - AI-Powered Salesforce & Cloud Solutions',
    description: 'Leading Salesforce and AI technology company transforming businesses through intelligent solutions since 2014.',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://hajanatechnologies.com'),
}

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased bg-lightGrey text-gray-900`}>
        {/* Header */}
        <Header />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Optional ChatBot */}
        <ChatBot />
      </body>
    </html>
  )
}