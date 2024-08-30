import { Roboto, Oswald } from "next/font/google"
import { ThemeProvider } from "next-themes"

import type { Metadata } from "next"

import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const oswald = Oswald({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "GitRetrieve",
  description:
    "Easily explore and download your GitHub repositories. Log in to start managing your code effortlessly",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${roboto.variable}`}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
