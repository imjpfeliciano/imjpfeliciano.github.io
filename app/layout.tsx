import { Analytics } from '@vercel/analytics/react'
import { CustomThemeProvider } from '../src/state/context/ThemeContext'
import '../styles/globals.css'

export const metadata = {
  title: 'imjpfeliciano.dev',
  description: "Welcome to Jonathan's personal page!",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CustomThemeProvider>
      <html lang="en">
        <body className='className="scroll-smooth"'>{children}</body>
        <Analytics />
      </html>
    </CustomThemeProvider>
  )
}
