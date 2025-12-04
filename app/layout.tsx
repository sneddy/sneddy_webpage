import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anuar Aimoldin - AI Researcher & ML Engineer",
  description:
    "AI Researcher and Machine Learning Engineer with expertise in computer vision, medical imaging, and competitive machine learning. Kaggle Competitions Master ranked #14 globally.",
  keywords:
    "AI researcher, machine learning engineer, computer vision, medical imaging, Kaggle, data science, artificial intelligence",
  authors: [{ name: "Anuar Aimoldin" }],
  creator: "Anuar Aimoldin",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimoldin.com",
    title: "Anuar Aimoldin - AI Researcher & ML Engineer",
    description:
      "AI Researcher and Machine Learning Engineer with expertise in computer vision, medical imaging, and competitive machine learning.",
    siteName: "Anuar Aimoldin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuar Aimoldin - AI Researcher & ML Engineer",
    description:
      "AI Researcher and Machine Learning Engineer with expertise in computer vision, medical imaging, and competitive machine learning.",
    creator: "@sneddy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: hsl(222.2 84% 4.9%);
                color: hsl(210 40% 98%);
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
