'use client'

import { useCart } from '@/context/CartContext'

const WHATSAPP_NUMBER = '56934418972'

function formatPrice(price: number) {
  return '$' + price.toLocaleString('es-CL')
}

function buildWhatsAppMessage(
  items: ReturnType<typeof useCart>['items'],
  total: number
): string {
  const deliveryApplies = total >= 4000
  const lines = [
    `\u00a1Hola! Quiero hacer el siguiente pedido de Bunnies Cookies \u{1F430}\u{1F36A}`,
    '',
    `\u{1F4E6} *Mi pedido:*`,
    ...items.map(
      i =>
        `\u{1F430} ${i.product.name} x${i.quantity} \u2192 ${formatPrice(i.product.price * i.quantity)}`
    ),
    '',
    `\u{1F4B0} *Total: ${formatPrice(total)}*`,
    `\u00a1Gracias! \u{1F495}`,
  ]
  return encodeURIComponent(lines.join('\n'))
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart()

  const handleWhatsApp = () => {
    const msg = buildWhatsAppMessage(items, total)
    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${msg}`,
      '_blank'
    )
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-pink-100 bg-[#FFF0F6]">
          <div>
            <h2 className="font-black text-[#7C3527] text-xl">Mi pedido 🛒</h2>
            <p className="text-sm text-[#A0522D]">{itemCount} {itemCount === 1 ? 'pack' : 'packs'} seleccionados</p>
          </div>
          <button
            onClick={closeCart}
            className="text-[#7C3527] hover:bg-pink-100 w-9 h-9 rounded-full flex items-center justify-center text-xl transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center text-[#A0522D]/60 py-20">
              <span className="text-6xl">🐰</span>
              <p className="font-semibold">Tu pedido está vacío</p>
              <p className="text-sm">¡Agrega tus packs favoritos!</p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 bg-[#FFF8F3] rounded-2xl p-3"
              >
                <div className="text-3xl">🐰</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#7C3527] text-sm truncate">{item.product.name}</p>
                  <p className="text-xs text-[#A0522D]">{formatPrice(item.product.price)} c/u</p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, -1)}
                    className="w-7 h-7 rounded-full bg-pink-100 hover:bg-pink-200 text-[#7C3527] font-bold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    −
                  </button>
                  <span className="font-bold text-[#7C3527] w-5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, 1)}
                    className="w-7 h-7 rounded-full bg-pink-100 hover:bg-pink-200 text-[#7C3527] font-bold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div className="text-right min-w-fit">
                  <p className="font-black text-[#7C3527] text-sm">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-pink-300 hover:text-pink-500 text-xs transition-colors cursor-pointer"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-pink-100 bg-[#FFF0F6] flex flex-col gap-3">
            {/* Delivery notice */}
            {total < 4000 ? (
              <p className="text-xs text-[#A0522D] text-center bg-[#FDE8D8] rounded-xl px-3 py-2">
                🚚 Agrega {formatPrice(4000 - total)} más para acceder al delivery
              </p>
            ) : (
              <p className="text-xs text-green-700 text-center bg-green-50 rounded-xl px-3 py-2">
                ✅ ¡Tu pedido califica para delivery! (+$1.000)
              </p>
            )}

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#7C3527]">Total</span>
              <span className="font-black text-[#7C3527] text-2xl">{formatPrice(total)}</span>
            </div>

            {/* WhatsApp button */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 text-lg transition-all shadow-lg cursor-pointer"
            >
              <WhatsAppIcon />
              Pedir por WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
