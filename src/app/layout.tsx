import { EdgeStoreProvider } from '@/lib/edgestore'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Join the Logo Competition at OUSL!',
  description: 'Join the Logo Competition at OUSL! Showcase your creativity and design skills by creating a unique and innovative logo. The winning design will become a part of our visual identity. Don’t miss this chance to leave your mark on OUSL and win exciting prizes!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  )
}
