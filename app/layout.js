'use client'

import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import { AuthContextProvider,  } from '@/components/AuthContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <AuthContextProvider >
        <body className={`${inter.variable} font-sans`}>{children}</body>
      </AuthContextProvider>
    </html>
  )
}
