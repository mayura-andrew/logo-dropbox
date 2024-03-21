import { EdgeStoreProvider } from '@/lib/edgestore'
import './globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
}) 
  

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
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  )
}
