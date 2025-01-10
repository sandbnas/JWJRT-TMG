'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans text-brown">
        <Navigation />
        <main className="pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

