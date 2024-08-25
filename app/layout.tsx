import './globals.css'
import { dosis } from '@/app/ui/fonts'
import type { Metadata } from 'next'

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
