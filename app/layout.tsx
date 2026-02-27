import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import "@/components/landing-page/styles.css"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Estúdio Dev - Design & Software | Cascavel - PR",
  description:
    "Transformamos suas ideias em realidade digital. Especialistas em desenvolvimento de sites, sistemas web, aplicativos e design exclusivo em Cascavel - PR e região.",
  keywords: [
    "desenvolvimento de sites",
    "criação de sites cascavel",
    "software cascavel",
    "aplicativos",
    "sistemas web",
    "design",
    "agência digital cascavel",
    "programador cascavel",
    "estúdio dev",
  ],
  icons: {
    icon: [{ url: "/estudiodevlogo-favicon.png", type: "image/png" }],
    apple: [{ url: "/estudiodevlogo-favicon.png" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-foreground transition-colors duration-500 antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
