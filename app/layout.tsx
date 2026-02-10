import type React from "react"
import type { Metadata } from "next"
import { Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-display" })

export const metadata: Metadata = {
  title: {
    default: "Anuar Aimoldin — AI Researcher & Industry Leader",
    template: "%s | Anuar Aimoldin",
  },
  description:
    "AI researcher and industry leader specializing in computer vision, medical imaging, and competitive machine learning. Kaggle Competitions Master ranked #14 globally.",
  keywords:
    "AI researcher, industry leader, machine learning engineer, computer vision, medical imaging, Kaggle, data science, artificial intelligence",
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
    url: "https://anuar.best",
    title: "Anuar Aimoldin — AI Researcher & Industry Leader",
    description:
      "AI researcher and industry leader specializing in computer vision, medical imaging, and competitive machine learning.",
    siteName: "anuar.best",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuar Aimoldin — AI Researcher & Industry Leader",
    description:
      "AI researcher and industry leader specializing in computer vision, medical imaging, and competitive machine learning.",
    creator: "@sneddy",
    images: ["/twitter-image"],
  },
  metadataBase: new URL("https://anuar.best"),
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning style={{ colorScheme: "dark" }}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          html,body{background-color:#0b0f1a!important;color:#f8fafc!important;margin:0;padding:0}
          html{color-scheme:dark!important}
          *{box-sizing:border-box}
          img{opacity:1!important}
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const html = document.documentElement;
                  html.classList.add('dark');
                  html.style.colorScheme = 'dark';
                  html.style.backgroundColor = '#0b0f1a';
                  document.body.style.backgroundColor = '#0b0f1a';
                  document.body.style.color = '#f8fafc';
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" as="image" href="/images/profile-photo.jpeg" fetchPriority="high" />
      </head>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        suppressHydrationWarning
        style={{ backgroundColor: "#0b0f1a", color: "#f8fafc" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
          storageKey="theme-preference"
        >
          <Navigation />
          <main>{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
