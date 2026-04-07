const ITEMS = [
  {
    icon: '🧴',
    title: 'Llevamos todo nosotros',
    description: 'Productos, herramientas y aspiradora incluidos en todos los servicios. No necesitás preparar nada.',
  },
  {
    icon: '💬',
    title: 'Coordinación por WhatsApp',
    description: 'Reservás en minutos y te confirmamos por WhatsApp. Sin apps, sin registros, sin vueltas.',
  },
  {
    icon: '🔍',
    title: 'Profesionales seleccionadas',
    description: 'Elegimos con cuidado a las personas que trabajan con vos. Verificamos identidad y experiencia.',
  },
  {
    icon: '⚡',
    title: 'Respuesta rápida',
    description: 'Te respondemos en menos de una hora para confirmar tu reserva y coordinar los detalles.',
  },
]

export default function Trust() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Por qué elegirnos</h2>
          <p className="text-gray-500">Simple, confiable y sin complicaciones</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200 text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
