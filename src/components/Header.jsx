import { useState } from 'react'

const scrollTo = (id, closeFn) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  closeFn?.()
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-2xl">🏠</span>
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">
            Hogar<span className="text-green-600">Listo</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('como-funciona')}
            className="text-gray-600 hover:text-green-600 font-medium transition-colors text-sm"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => scrollTo('servicios')}
            className="text-gray-600 hover:text-green-600 font-medium transition-colors text-sm"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollTo('reservar')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shadow-sm shadow-green-200"
          >
            Reservar
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3 animate-fade-in">
          <button
            onClick={() => scrollTo('como-funciona', () => setMenuOpen(false))}
            className="text-gray-700 font-medium text-left py-2"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => scrollTo('servicios', () => setMenuOpen(false))}
            className="text-gray-700 font-medium text-left py-2"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollTo('reservar', () => setMenuOpen(false))}
            className="bg-green-600 text-white font-bold px-5 py-3 rounded-xl text-left"
          >
            Reservar ahora →
          </button>
        </div>
      )}
    </header>
  )
}
