import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Arqontact',
  description: 'La aplicación de contactos para arquitectos.',
  manifest: '/manifest.json',
  icons: {
    apple: 'icon-512x512.png',
  },
  themeColor: '#ffffff'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body 
        className={inter.className}
      >
        {children}
      </body>
    </html>
  )
}
