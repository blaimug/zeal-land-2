import { DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Zeal - Congregation Assistant App',
  description: 'Schedule Christian Life & Ministry meeting parts, Public Talk assignments, Duties, Territories, Cart Schedule, Field Service Reports and more.',
  metadataBase: new URL('https://zeal.rw'),
  openGraph: {
    title: 'Zeal - Congregation Assistant App',
    description: 'Schedule Christian Life & Ministry meeting parts, Public Talk assignments, Duties, Territories, Cart Schedule, Field Service Reports and more.',
    url: 'https://zeal.rw',
    siteName: 'Zeal',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeal - Congregation Assistant App',
    description: 'Schedule Christian Life & Ministry meeting parts, Public Talk assignments, Duties, Territories, Cart Schedule, Field Service Reports and more.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-NTTM68XK10' />
    </html>
  )
}

