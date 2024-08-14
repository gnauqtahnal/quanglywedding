import type { Metadata } from 'next'
import { dosis } from '@/app/ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: "Quang and Ly's wedding",
  description: 'Wedding invitation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${dosis.variable}`}
    >
      <body className={`${dosis.className}`}>{children}</body>
    </html>
  )
}
