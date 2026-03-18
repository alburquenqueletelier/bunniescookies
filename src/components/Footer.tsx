export default function Footer() {
  return (
    <footer className="bg-[#7C3527] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🐰</span>
          <div>
            <p className="font-black text-2xl">Bunnies Cookies</p>
            <p className="text-pink-200 text-sm italic">Handmade with love and butter</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-pink-100 mt-2">
          <span>📍 Quilpué y Villa Alemana</span>
          <span>🚚 Delivery desde $4.000</span>
          <span>🍪 Horneadas con amor</span>
        </div>

        <p className="text-pink-200/60 text-xs mt-4">
          © {new Date().getFullYear()} Bunnies Cookies · HandLove Cookies · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
