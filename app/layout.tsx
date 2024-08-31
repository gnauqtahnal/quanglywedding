import './globals.css'
import HomeLoading from './loading'
import { dosis } from '@/ui/fonts'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Quang and Ly's wedding",
  description: 'Wedding invitation',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={clsx(
        'bg-wed2 text-center text-lg md:text-xl',
        dosis.className,
      )}
    >
      <Suspense fallback={<HomeLoading />}>
        <body>{children}</body>
      </Suspense>
    </html>
  )
}
