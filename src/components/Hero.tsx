import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 text-center relative overflow-hidden"
      style={{ backgroundImage: 'url(/images/muchas-galletas.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFF8F3]/40" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">
        {/* Image placeholder */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-[#FCE7F3] flex items-center justify-center">
          <Image
            src="/images/logo.jpeg"
            alt="Bunnies Cookies"
            width={320}
            height={320}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Title */}
        <div>
          <h1 className="text-5xl sm:text-6xl font-black text-[#7C3527] leading-tight tracking-tight">
            Bunnies Cookies
          </h1>
          <p className="mt-2 text-[#A0522D] text-lg font-semibold italic">
            Handmade with love and butter 🧈
          </p>
        </div>

        <p className="text-[#7C3527]/80 text-base max-w-xs">
          Galletitas artesanales con forma de conejito, horneadas con amor y perfectas para compartir. 🐰💕
        </p>

        <a
          href="#productos"
          className="bg-[#7C3527] hover:bg-[#4A1A0D] text-white font-bold px-8 py-3 rounded-full text-lg transition-colors shadow-lg"
        >
          Ver galletitas 🍪
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[#A0522D]/60 text-sm">
        ↓
      </div>
    </section>
  )
}
