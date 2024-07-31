import type { Metadata } from "next"
import { Sacramento, Oooh_Baby, WindSong, Yomogi } from "next/font/google"
import "./globals.css"
import StyledComponentsRegistry from "@/lib/registry"

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
  display: "swap",
})
const oooh_baby = Oooh_Baby({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-oooh-baby",
  display: "swap",
})
const windsong = WindSong({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-windsong",
  display: "swap",
})
const yomogi = Yomogi({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-yomogi",
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
      className={`${sacramento.variable} ${oooh_baby.variable} ${windsong.variable} ${yomogi.variable}`}
    >
      <body className="bg-[#fef8f0]">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
