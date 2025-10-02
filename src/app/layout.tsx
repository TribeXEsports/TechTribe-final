
import type { Metadata } from 'next'
import { spaceGrotesk, ptSans } from '@/lib/fonts'
import './globals.css'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from '@/lib/utils'
import { Chatbot } from '@/components/Chatbot'
import { ToasterWrapper } from '@/components/ToasterWrapper'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techtribex.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tech TribeX - Community, Agency, & Innovation Hub',
    template: '%s | Tech TribeX',
  },
  description: 'Join Tech TribeX, a vibrant community for tech enthusiasts and a freelance agency building exceptional digital solutions. Explore our projects, events, and services.',
  openGraph: {
    title: 'Tech TribeX - Community, Agency, & Innovation Hub',
    description: 'A vibrant community for tech enthusiasts and a freelance agency building exceptional digital solutions.',
    url: siteUrl,
    siteName: 'Tech TribeX',
    images: [
      {
        url: '/og-image.png', // It's recommended to create a social share image
        width: 1200,
        height: 630,
        alt: 'Tech TribeX - Community & Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech TribeX - Community, Agency, & Innovation Hub',
    description: 'A vibrant community for tech enthusiasts and a freelance agency building exceptional digital solutions.',
    // images: ['/twitter-image.png'], // It's recommended to create a twitter share image
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
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "font-sans antialiased min-h-screen bg-background flex flex-col",
        spaceGrotesk.variable,
        ptSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Chatbot />
          <ToasterWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
