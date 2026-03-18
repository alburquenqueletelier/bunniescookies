const testimonials = [
  {
    id: 1,
    text: 'Nos gustaron mucho las galletitas, muy ricas 😻 y no nos duraron casi nada acá en la casa jaja, debimos haber pedido más 🤗 muchas gracias',
    time: '3:55 p.m.',
  },
  {
    id: 2,
    text: 'La textura super suave... ¡perfectas para compartir! A mis hijos les encantaron, volvemos a pedir.',
    time: '9:20 p.m.',
  },
  {
    id: 3,
    text: 'Hola nos encantaron tus galletas, te quería pedir un pedido de 20 galletas más, a mis hijos les gustaron mucho y me pidieron más 😍',
    time: '4:55 p.m.',
  },
  {
    id: 4,
    text: 'Ninguna 🐷. Nos las devoramos todas al llegar a casa, no llegaron ni a la mesa jaja. Son lo mejor!',
    time: '11:01 p.m.',
  },
]

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-20 px-4 bg-[#FFF0F6]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#7C3527]">¿Aún no te convences? 💬</h2>
          <p className="mt-2 text-[#A0522D]">
            Mira lo que dicen quienes ya probaron nuestras galletitas y volvieron por más 🐰
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map(t => (
            <div key={t.id} className="flex justify-end">
              {/* WhatsApp bubble style */}
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-3 shadow max-w-xs w-full">
                <p className="text-[#1a1a1a] text-sm leading-relaxed">{t.text}</p>
                <p className="text-right text-[10px] text-[#8696a0] mt-1">{t.time} ✓✓</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#7C3527] font-black text-xl">
            ¡Lo que tienen de lindas, lo tienen de deliciosas! 🍪🐰
          </p>
        </div>
      </div>
    </section>
  )
}
