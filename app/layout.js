import { Inter } from 'next/font/google'

import './style/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Gig Limited',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-bgColor ${inter.className}`}>{children}</body>
    </html>
  )
}
