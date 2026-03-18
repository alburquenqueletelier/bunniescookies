'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

function formatPrice(price: number) {
  return '$' + price.toLocaleString('es-CL')
}

export default function Products() {
  const { addItem } = useCart()

  return (
    <section id="productos" className="py-20 px-4 bg-[#FFF0F6]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#7C3527]">Nuestros Packs 🐰</h2>
          <p className="mt-2 text-[#A0522D] text-base">
            Elige tu pack favorito — lo que tienen de lindas, lo tienen de deliciosas 🍪
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-[#7C3527] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="bg-[#FCE7F3] p-6 flex items-center justify-center h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain w-36 h-36 mix-blend-multiply"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="font-black text-[#7C3527] text-lg leading-tight">{product.name}</h3>
                  <p className="text-sm text-[#A0522D]">{product.cookies} galletitas artesanales</p>
                </div>

                <p className="text-2xl font-black text-[#7C3527] mt-auto">
                  {formatPrice(product.price)}
                </p>

                <button
                  onClick={() => addItem(product)}
                  className="w-full bg-[#F9A8D4] hover:bg-pink-300 active:scale-95 text-[#7C3527] font-bold py-2.5 rounded-2xl transition-all cursor-pointer text-sm"
                >
                  Agregar al pedido 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
