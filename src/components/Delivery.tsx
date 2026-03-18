export default function Delivery() {
  return (
    <section id="delivery" className="py-20 px-4 bg-[#FFF8F3]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-[#7C3527]">¿Necesitas delivery? 🚚</h2>
          <p className="mt-2 text-[#A0522D]">¡Llevamos tus galletitas directo a tu puerta!</p>
        </div>

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          {/* Banner */}
          <div className="bg-[#F9A8D4] p-6 text-center">
            <p className="text-[#7C3527] font-black text-2xl">
              🐰 Compras sobre $4.000
            </p>
            <p className="text-[#7C3527] font-semibold mt-1">
              ¡tienen servicio de reparto disponible!
            </p>
          </div>

          {/* Details */}
          <div className="p-6 grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="font-black text-[#7C3527] text-lg">Zona de cobertura</h3>
                <p className="text-[#A0522D] mt-1">
                  Hacemos delivery en <strong>Quilpué</strong> y <strong>Villa Alemana</strong>.
                  ¡Sin moverte de tu hogar!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="font-black text-[#7C3527] text-lg">Costo de envío</h3>
                <p className="text-[#A0522D] mt-1">
                  Solo <strong>$1.000 adicionales</strong> y tus galletitas llegan hasta tu casa.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-3xl">🏠</div>
              <div>
                <h3 className="font-black text-[#7C3527] text-lg">Retiro en persona</h3>
                <p className="text-[#A0522D] mt-1">
                  También puedes coordinar el retiro directamente con nosotros por WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-3xl">💬</div>
              <div>
                <h3 className="font-black text-[#7C3527] text-lg">¿Cómo pido?</h3>
                <p className="text-[#A0522D] mt-1">
                  Arma tu pedido aquí y envíanoslo por WhatsApp. ¡Así de fácil!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
