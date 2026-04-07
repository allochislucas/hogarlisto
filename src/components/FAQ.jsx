import { useState } from 'react'

const FAQS = [
  {
    q: '¿Cómo funciona la reserva?',
    a: 'Completás el formulario con el servicio, la fecha y el turno. Al hacer clic, te abre WhatsApp con un mensaje listo para enviar. Nosotros te confirmamos en menos de una hora.',
  },
  {
    q: '¿Tengo que estar en casa durante el servicio?',
    a: 'No es obligatorio, pero lo recomendamos la primera vez para mostrarle el hogar al profesional. Después coordinamos el acceso como más te convenga.',
  },
  {
    q: '¿Qué incluye el precio?',
    a: 'Todos los productos, herramientas y equipamiento necesarios para el servicio. No tenés que preparar nada ni comprar nada.',
  },
  {
    q: '¿Puedo cancelar o reprogramar?',
    a: 'Sí. Avisanos por WhatsApp con al menos 24 horas de anticipación y lo reorganizamos sin problema.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Preguntas frecuentes</h2>
          <p className="text-gray-500">Las dudas más comunes antes de reservar</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                <span className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}>
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
