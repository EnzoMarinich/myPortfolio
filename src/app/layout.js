
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './useContext/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio Enzo Marinich',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
