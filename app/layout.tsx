import { Roboto } from "next/font/google"
import { ThemeProvider } from "next-themes"

import type { Metadata } from "next"

import Header from "@/components/modules/Header"

import "./globals.css"

const inter = Roboto({ weight: ["100", "300", "400", "500", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "github clone",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
