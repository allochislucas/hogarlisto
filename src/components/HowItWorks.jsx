const STEPS = [
  {
    number: '1',
    icon: '🔍',
    title: 'Elegís el servicio',
    description: 'Limpieza, jardín o pileta. Seleccionás las opciones que necesitás.',
  },
  {
    number: '2',
    icon: '📅',
    title: 'Elegís fecha y turno',
    description: 'Mañana o tarde. El día que mejor te quede.',
  },
  {
    number: '3',
    icon: '💬',
    title: 'Te confirmamos por WhatsApp',
    description: 'Te respondemos en menos de una hora para coordinar los detalles.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Así de simple funciona</h2>
          <p className="text-gray-500">En 3 pasos tenés tu servicio reservado</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+3.5rem)] right-[calc(-50%+3.5rem)] h-0.5 bg-green-100 z-0" />
              )}
              <div className="relative z-10 w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-sm">
                {step.icon}
              </div>
              <div className="w-6 h-6 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center mb-3">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
