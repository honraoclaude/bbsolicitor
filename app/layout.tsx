import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ChatProvider } from '@/lib/chat-context'
import { ChatButton } from '@/components/ai/chat-button'
import { ChatPanel } from '@/components/ai/chat-panel'
import { BritonJsonLd, LocalBusinessJsonLd } from '@/components/seo/json-ld'
import './globals.css'

export const metadata: Metadata = {
  title: { template: '%s | Briton Solicitors', default: 'Briton Solicitors — London Law Firm' },
  description: 'Expert legal advice in immigration, family, personal injury, and more. Three offices across East London.',
  metadataBase: new URL('https://britonsolicitors.co.uk'),
  openGraph: {
    siteName: 'Briton Solicitors',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz@9..144&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-fraunces: 'Fraunces', serif;
            --font-inter: 'Inter', sans-serif;
          }
        `}</style>
        <BritonJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className="font-sans bg-bg-base text-text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ChatProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <ChatButton />
            <ChatPanel />
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
