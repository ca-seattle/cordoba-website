import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cordobaacademy.org'),
  title: {
    default: 'Cordoba Academy | Islamic School in Seattle, Lynnwood, Mountlake Terrace, Edmonds, Shoreline and Bothell',
    template: '%s | Cordoba Academy'
  },
  description: 'Cordoba Academy is a leading Islamic school serving Seattle, Lynnwood, Edmonds, Shoreline, Bothell and Mountlake Terrace areas. Offering K-8 education that combines academic excellence with Islamic values.',
  keywords: ['Islamic School Seattle', 'Islamic School Lynnwood', 'Islamic School Mountlake Terrace', 'Cordoba Academy', 'Muslim School Washington', 'Islamic Education Seattle', 'Private Islamic School', 'Muslim Education Washington'],
  openGraph: {
    title: 'Cordoba Academy | Islamic School in Seattle Area',
    description: 'Leading Islamic school serving Seattle, Lynnwood, Edmonds, Shoreline, Bothell & Mountlake Terrace communities with excellence in academics and Islamic education.',
    url: 'https://cordobaacademy.org',
    siteName: 'Cordoba Academy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Cordoba Academy Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cordoba Academy | Islamic School in Seattle Area',
    description: 'Leading Islamic school serving Seattle, Lynnwood, Edmonds, Shoreline, Bothell & Mountlake Terrace communities with excellence in academics and Islamic education.',
    images: ['/logo-full.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code when you have it
  },
  alternates: {
    canonical: 'https://cordobaacademy.org'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Cordoba Academy',
  description: 'Islamic School serving Seattle, Lynnwood, Edmonds, Shoreline, Bothell and Mountlake Terrace areas',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3210 200th Pl SW',
    addressLocality: 'Lynnwood',
    addressRegion: 'WA',
    postalCode: '98036',
    addressCountry: 'US'
  },
  url: 'https://cordobaacademy.org',
  telephone: '(425) 954-3687',
  areaServed: ['Seattle', 'Lynnwood', 'Mountlake Terrace', 'Edmonds', 'Shoreline', 'Bothell', 'Everett'],
  keywords: 'Islamic School, Muslim Education, Seattle Islamic School, Lynnwood Islamic School',
  eduLevels: 'Preschool, Kindergarten, Elementary and Middle School',
  faith: 'Islamic',
  foundingDate: '2015',
  teaches: ['Islamic Studies', 'Quran', 'Arabic', 'Mathematics', 'Science', 'Language Arts', 'Social Studies']
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-[72px]">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
