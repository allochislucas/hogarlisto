export default function Hero({ onCTA }) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-teal-50 py-16 md:py-28 px-4 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Copy */}
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
            📍 Exclusivo para vecinos de Docta
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
            La limpieza del hogar{' '}
            <span className="text-green-600">hecha para Docta</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Un servicio pensado para nuestra comunidad. Reservá en minutos,{' '}
            <span className="text-gray-700 font-medium">nosotros llevamos todo y nos encargamos del resto.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
            <button
              onClick={onCTA}
              className="bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300"
            >
              Reservar ahora →
            </button>
            <button
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:text-green-700 transition-colors"
            >
              Cómo funciona
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Profesionales verificadas</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Llevamos todos los productos</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Seguro incluido</span>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full max-w-sm md:max-w-md mx-auto">
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl aspect-square flex flex-col items-center justify-center shadow-2xl shadow-green-200 p-8">
              <div className="text-8xl mb-4">🏠</div>
              <p className="text-white text-xl font-bold mb-1">Tu hogar, impecable</p>
              <p className="text-green-100 text-sm text-center">Profesionales listas para vos</p>
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="text-2xl">⭐</span>
              <span>4.9 · +500 reservas</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="text-2xl">🛡️</span>
              <span>Con seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
