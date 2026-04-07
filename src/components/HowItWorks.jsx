const STEPS = [
  {
    number: '1',
    icon: '🔍',
    title: 'Elegís el servicio',
    description: 'Seleccioná el tipo de limpieza que necesitás para tu hogar.',
  },
  {
    number: '2',
    icon: '📅',
    title: 'Elegís día y horario',
    description: 'Seleccioná la fecha, el turno y la cantidad de horas que preferís.',
  },
  {
    number: '3',
    icon: '✨',
    title: 'Enviamos a la profesional',
    description: 'Asignamos una profesional verificada que llega puntual a tu casa.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Así de simple funciona
          </h2>
          <p className="text-gray-500 text-lg">En 3 pasos tenés tu limpieza reservada</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+3.5rem)] right-[calc(-50%+3.5rem)] h-0.5 bg-green-100 z-0" />
              )}

              <div className="relative z-10 w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-sm">
                {step.icon}
              </div>

              <div className="w-6 h-6 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center mb-3 shadow-sm">
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
