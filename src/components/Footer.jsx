const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-24 md:pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏠</span>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Hogar<span className="text-green-400">Listo</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              La forma más simple de tener tu hogar impecable. Reservá en minutos, sin vueltas.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'TikTok'].map((red) => (
                <a
                  key={red}
                  href="#"
                  className="text-xs bg-gray-800 hover:bg-green-600 hover:text-white text-gray-400 px-3 py-1.5 rounded-lg transition-colors font-medium"
                >
                  {red}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Cómo funciona', id: 'como-funciona' },
                { label: 'Servicios', id: 'servicios' },
                { label: 'Reservar ahora', id: 'reservar' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-green-400 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>hogarlistoarg@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+54 230 257-6324</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Docta, Córdoba, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2025 HogarListo. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
