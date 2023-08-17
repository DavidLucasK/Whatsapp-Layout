import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whatsapp',
  description: 'Whatsapp Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* add this */}
      <head>
        <link rel='icon' href='./favicon4.ico'/>
      </head>

      <body className='bg-[#161e24] text-zinc-50 '>{children}</body>
    </html>
  )
}
