const SERVICES = [
  {
    icon: '🧹',
    title: 'Limpieza general',
    description:
      'Limpieza completa de todos los ambientes: cocina, baños, habitaciones y living. Ideal para mantenimiento regular.',
    price: 'Desde $15.000',
    tag: 'Más popular',
    hours: '2–3 horas',
    tip: '💡 Referencia: 1h cada 25m²',
  },
  {
    icon: '✨',
    title: 'Limpieza profunda',
    description:
      'Limpieza exhaustiva de todos los ambientes, incluyendo cocina a fondo, vajilla, rincones, muebles y azulejos. Para una puesta a punto total.',
    price: 'Desde $38.000',
    tag: null,
    hours: '4–5 horas',
    tip: '💡 Referencia: 1h cada 20m²',
  },
  {
    icon: '⏱️',
    title: 'Limpieza por horas',
    description:
      'Pagás solo las horas que necesitás. Ideal para espacios pequeños, tareas puntuales o presupuestos ajustados.',
    price: '$9.500 / hora',
    tag: null,
    hours: 'A elección',
    tip: null,
  },
  {
    icon: '🌿',
    title: 'Jardinero',
    description:
      'Servicio exclusivo de corte de césped. Precio fijo por trabajo completo, sin importar cuánto tarde. Llevamos todas las herramientas.',
    price: 'Desde $35.000',
    tag: null,
    hours: 'Por trabajo',
    tip: '💡 Precio según m² de jardín',
  },
  {
    icon: '🏊',
    title: 'Piletero',
    description:
      'Inspección, limpieza y acondicionamiento general de tu pileta. Llevamos todos los productos y herramientas necesarias.',
    price: 'Desde $20.000',
    tag: null,
    hours: 'Por trabajo',
    tip: '💡 Precio según tamaño de pileta',
  },
]

export default function Services({ onReserve }) {
  return (
    <section id="servicios" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nuestros servicios</h2>
          <p className="text-gray-500 text-lg">Todo lo que necesitás para tu hogar en Docta</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {s.tag && (
                <span className="absolute -top-3 left-6 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              )}

              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-3">{s.description}</p>

              {s.tip && (
                <p className="text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-lg mb-4 font-medium">
                  {s.tip}
                </p>
              )}

              <div className="flex items-center justify-between mb-5">
                <span className="text-green-600 font-bold text-lg">{s.price}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">{s.hours}</span>
              </div>

              <button
                onClick={onReserve}
                className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
