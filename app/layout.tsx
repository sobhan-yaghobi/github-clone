import { Roboto } from "next/font/google"
import { ThemeProvider } from "next-themes"

import type { Metadata } from "next"

import "./globals.css"

const inter = Roboto({ weight: ["100", "300", "400", "500", "900"], subsets: ["latin"] })

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
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
