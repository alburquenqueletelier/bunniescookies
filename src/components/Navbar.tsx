'use client'

import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { itemCount, openCart } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.jpeg"
            alt="Bunnies Cookies logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-[#7C3527] leading-none text-lg">Bunnies Cookies</p>
            <p className="text-xs text-[#A0522D]">Handmade with love & butter</p>
          </div>
        </div>

        {/* Cart button */}
        <button
          onClick={openCart}
          className="relative flex items-center gap-2 bg-[#F9A8D4] hover:bg-pink-300 text-[#7C3527] font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
        >
          <span className="text-xl">🛒</span>
          <span className="hidden sm:inline text-sm">Mi pedido</span>
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#7C3527] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
