import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SonnaP — Agentic Software Company',
  description:
    'SonnaP builds intelligent software solutions powered by AI agents. Custom development, AI integration, and modern web applications.',
  keywords: ['software development', 'AI agents', 'web development', 'API development', 'SonnaP'],
  openGraph: {
    title: 'SonnaP — Agentic Software Company',
    description: 'Intelligent software solutions powered by AI agents.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
