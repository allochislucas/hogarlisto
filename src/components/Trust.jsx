const ITEMS = [
  {
    icon: '🔒',
    title: 'Profesionales verificadas',
    description:
      'Verificamos identidad, antecedentes y experiencia de cada profesional antes de que trabaje con vos.',
  },
  {
    icon: '🛡️',
    title: 'Seguro contra accidentes',
    description:
      'Cada servicio incluye cobertura por accidentes. Tu hogar y nuestra profesional están protegidos.',
  },
  {
    icon: '💬',
    title: 'Atención personalizada',
    description:
      'Estamos disponibles para ayudarte antes, durante y después del servicio. Respondemos rápido.',
  },
  {
    icon: '⭐',
    title: 'Garantía de satisfacción',
    description:
      'Si no quedás conforme con el resultado, te enviamos otra profesional sin costo adicional.',
  },
]

export default function Trust() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Por qué elegirnos</h2>
          <p className="text-gray-500 text-lg">Seguridad y confianza en cada reserva</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200"
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center text-base">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-12 bg-green-600 rounded-2xl p-6 md:p-8 text-white text-center">
          <p className="text-2xl font-extrabold mb-2">+500 hogares ya reservaron con nosotros</p>
          <p className="text-green-100 text-sm">Calificación promedio: ⭐ 4.9/5 · Sin contratiempos</p>
        </div>
      </div>
    </section>
  )
}
