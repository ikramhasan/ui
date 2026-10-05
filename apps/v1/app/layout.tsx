import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { META_THEME_COLORS, siteConfig } from "@/lib/config"
import { socialMetadata } from "@/lib/metadata"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/registry/ui/sonner"
import { Toaster as ToastToaster } from "@/registry/ui/toast"
import { TooltipProvider } from "@/registry/ui/tooltip"

import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["shadcn", "Base UI", "React", "Tailwind CSS", "Components"],
  authors: [{ name: "Ikram Hasan", url: siteConfig.links.github }],
  creator: "Ikram Hasan",
  ...socialMetadata({ title: siteConfig.name }),
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body className="overscroll-none bg-background">
        <ThemeProvider>
          <TooltipProvider>
            <ToastToaster>{children}</ToastToaster>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
