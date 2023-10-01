import '../styles/globals.css';
import { CustomThemeProvider } from '../src/state/context/ThemeContext';

export const metadata = {
  title: 'imjpfeliciano.dev',
  description: 'Welcome to Jonathan\'s personal page!',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CustomThemeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </CustomThemeProvider>

  )
}
