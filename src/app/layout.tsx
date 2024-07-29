import type { Metadata } from "next"
import { Inter, Sacramento, Euphoria_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
})
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
  display: "swap",
})
const euphoria_script = Euphoria_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-euphoria-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Quang and Ly's wedding",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sacramento.variable} ${euphoria_script.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
