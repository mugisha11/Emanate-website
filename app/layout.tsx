import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import dynamic from 'next/dynamic'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "EMANATE - Evidences Matter | Research & Advocacy Institute",
    template: "%s | EMANATE",
  },
  description:
    "Harnessing evidence for sustainable family & population solutions. EMANATE is a research and advocacy institute focused on evidence-based decision making.",
  generator: "v0.app",
  keywords: ["research", "advocacy", "evidence-based", "population", "family", "sustainable solutions"],
  authors: [{ name: "EMANATE", url: "https://emanate.org" }],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "EMANATE - Evidences Matter",
    description:
      "Harnessing evidence for sustainable family & population solutions. EMANATE is a research and advocacy institute focused on evidence-based decision making.",
    siteName: "EMANATE",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EMANATE logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMANATE - Evidences Matter",
    description:
      "Harnessing evidence for sustainable family & population solutions. EMANATE is a research and advocacy institute focused on evidence-based decision making.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://emanate.org/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="canonical" href="https://emanate.org/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EMANATE",
              url: "https://emanate.org/",
              logo: "https://emanate.org/logo.jpg",
              sameAs: ["https://twitter.com/emanateresearch", "https://www.linkedin.com/company/emanate"]
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        {/* Client-only floating AI assistant button */}
        <Suspense fallback={null}>
          {/** Dynamically import to avoid server-side rendering issues */}
          <DynamicAIFloating />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

// Dynamically load the client-only floating component
const DynamicAIFloating = dynamic(() => import('../components/ai-floating').then(m => m.AIFloating), { ssr: false })
