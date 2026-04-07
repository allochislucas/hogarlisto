const TESTIMONIALS = [
  {
    name: 'María L.',
    location: 'Vecina de Docta',
    service: 'Limpieza profunda',
    text: 'Súper recomendable. Llegaron puntual, trajeron todo y la casa quedó impecable. Lo mejor es que no tuve que preocuparme por nada.',
    stars: 5,
    avatar: '👩',
  },
  {
    name: 'Sebastián R.',
    location: 'Vecino de Docta',
    service: 'Jardinería',
    text: 'Reservé por WhatsApp en dos minutos y al día siguiente ya tenían el jardín listo. Precio justo y sin vueltas.',
    stars: 5,
    avatar: '👨',
  },
  {
    name: 'Valentina M.',
    location: 'Vecina de Docta',
    service: 'Piletero',
    text: 'Me sorprendió lo fácil que fue. Trajeron todos los productos, limpiaron la pileta a fondo y me avisaron cuando terminaron.',
    stars: 5,
    avatar: '👩',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Lo que dicen nuestros vecinos</h2>
          <p className="text-gray-500">Experiencias reales de Docta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Estrellas */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
                "{t.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location} · {t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
