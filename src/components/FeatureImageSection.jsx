const BULLETS = [
  { icon: '🧴', text: 'Llevamos todos los productos' },
  { icon: '🔍', text: 'Profesionales seleccionadas con cuidado' },
  { icon: '💬', text: 'Coordinación simple por WhatsApp' },
]

export default function FeatureImageSection({ onCTA }) {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Copy — arriba en mobile, izquierda en desktop */}
          <div className="flex-1 text-center md:text-left order-1 md:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Nos ocupamos de{' '}
              <span className="text-green-600">todo por vos</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              Limpieza, jardín o pileta. Reservás en minutos y tu casa queda impecable,{' '}
              <span className="text-gray-700 font-medium">sin que tengas que hacer nada.</span>
            </p>

            <ul className="space-y-4 mb-8">
              {BULLETS.map((b, idx) => (
                <li key={idx} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {b.icon}
                  </span>
                  <span className="text-gray-700 font-medium text-sm">{b.text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-green-200 text-base"
            >
              Reservar ahora →
            </button>
          </div>

          {/* Imagen — abajo en mobile, derecha en desktop */}
          <div className="flex-1 w-full max-w-sm md:max-w-none order-2 md:order-2">
            <div className="relative">
              <img
                src="/team.png"
                alt="Equipo HogarListo trabajando en Docta"
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl shadow-gray-200"
              />
              {/* Badge flotante */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium leading-none mb-0.5">Operamos en</p>
                  <p className="text-sm font-bold text-gray-900">Docta, Córdoba</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
