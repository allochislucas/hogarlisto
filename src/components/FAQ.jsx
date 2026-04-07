import { useState } from 'react'

const FAQS = [
  {
    q: '¿Tengo que estar en mi casa durante el servicio?',
    a: 'No es obligatorio, pero lo recomendamos la primera vez para mostrarle el hogar a la profesional. A partir de la segunda visita podés coordinar el acceso como más te convenga.',
  },
  {
    q: '¿Qué incluye la limpieza?',
    a: 'Incluye limpieza general de cocina, baños, habitaciones, living y áreas comunes: barrido, aspirado, trapeado, limpieza de superficies y espejos. Para detalles específicos o necesidades puntuales, consultanos antes de reservar.',
  },
  {
    q: '¿Qué pasa si cancelo la reserva?',
    a: 'Podés cancelar sin costo hasta 24 horas antes del servicio. Si cancelás con menos tiempo, se aplica una penalidad del 30% del valor total. En caso de emergencia, evaluamos caso por caso.',
  },
  {
    q: '¿El servicio está asegurado?',
    a: 'Sí. Todos los servicios incluyen seguro contra accidentes para la profesional y cobertura básica ante daños accidentales en tu hogar. Tu tranquilidad es nuestra prioridad.',
  },
  {
    q: '¿Las profesionales son de confianza?',
    a: 'Todas pasan por verificación de identidad, antecedentes y una entrevista personal. Solo trabajamos con profesionales con experiencia comprobada y referencias verificadas.',
  },
  {
    q: '¿Puedo pedir la misma profesional siempre?',
    a: 'Sí, en el MVP podés indicarnos tu preferencia y hacemos lo posible por asignar siempre a la misma persona. Esto estará automatizado en la próxima versión de la plataforma.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (idx) => setOpen(open === idx ? null : idx)

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500 text-lg">Todo lo que necesitás saber antes de reservar</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
                <span
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {open === idx && (
                <div className="px-5 pb-5 border-t border-gray-100 bg-gray-50 animate-fade-in">
                  <p className="text-gray-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
