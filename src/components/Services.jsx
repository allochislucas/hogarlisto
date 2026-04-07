const SERVICES = [
  {
    icon: '🧹',
    title: 'Limpieza del hogar',
    description: 'Limpieza general, profunda o por horas. Para todos los ambientes. Nosotros llevamos aspiradora, productos y herramientas.',
    price: 'Desde $15.000',
    detail: 'General · Profunda · Por horas',
    tip: '💡 Guía: 1h cada 25m² (general) · 1h cada 20m² (profunda)',
  },
  {
    icon: '🌿',
    title: 'Jardinería',
    description: 'Corte de césped con precio fijo por trabajo completo. Sin vueltas, sin sorpresas. Llevamos todas las herramientas.',
    price: 'Desde $35.000',
    detail: 'Precio por tamaño de jardín',
    tip: null,
  },
  {
    icon: '🏊',
    title: 'Piletero',
    description: 'Inspección, limpieza y acondicionamiento de tu pileta. Llevamos todos los productos necesarios.',
    price: 'Desde $20.000',
    detail: 'Precio por tamaño de pileta',
    tip: null,
  },
]

export default function Services({ onReserve }) {
  return (
    <section id="servicios" className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nuestros servicios</h2>
          <p className="text-gray-500">Todo lo que necesitás para tu hogar en Docta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-xs text-gray-400 font-medium mb-3">{s.detail}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-3">{s.description}</p>

              {s.tip && (
                <p className="text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg mb-4 font-medium leading-relaxed">
                  {s.tip}
                </p>
              )}

              <div className="flex items-center justify-between mb-5 mt-auto pt-3 border-t border-gray-100">
                <span className="text-green-600 font-bold text-lg">{s.price}</span>
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
