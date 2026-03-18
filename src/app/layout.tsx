import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bunnies Cookies 🐰 — Handmade with love and butter',
  description:
    'Galletitas artesanales con forma de conejito, horneadas con amor. Delivery en Quilpué y Villa Alemana.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.className} antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
