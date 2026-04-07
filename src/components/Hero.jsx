export default function Hero({ onCTA }) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-teal-50 py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Copy */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
            📍 Solo para vecinos de Docta
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Servicios para tu hogar en Docta,{' '}
            <span className="text-green-600">a solo un click</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Reservá limpieza, jardinería o piletero.{' '}
            <span className="text-gray-700 font-medium">
              Nosotros llevamos todo y nos encargamos del resto.
            </span>
          </p>

          <button
            onClick={onCTA}
            className="bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg shadow-green-200 hover:shadow-xl mb-8"
          >
            Reservar ahora →
          </button>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-start text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Llevamos todos los productos</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Profesionales seleccionadas</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Coordinación por WhatsApp</span>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full max-w-xs md:max-w-sm mx-auto">
          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl aspect-square flex flex-col items-center justify-center shadow-2xl shadow-green-200 p-8">
            <div className="text-7xl mb-4">🏠</div>
            <p className="text-white text-lg font-bold mb-1 text-center">Tu hogar en Docta,<br/>impecable</p>
            <p className="text-green-100 text-sm text-center mt-1">Limpieza · Jardín · Pileta</p>
          </div>
        </div>
      </div>
    </section>
  )
}
