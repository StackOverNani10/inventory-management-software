import { Inter } from 'next/font/google'
import '../styles/main.scss'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SaaS Inventory Management Software',
  description: 'A SaaS inventory management software for small businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {children}
      </body>
    </html>
  )
}
