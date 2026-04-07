export default function FeatureImageSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Copy */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Tu tiempo libre,{' '}
              <span className="text-green-600">de vuelta</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Mientras nosotros nos encargamos de la limpieza, el jardín y la pileta, vos podés hacer lo que realmente importa.
            </p>
          </div>

          {/* Imagen */}
          <div className="flex-1 w-full max-w-sm md:max-w-none">
            <div className="relative">
              <img
                src="/team.png"
                alt="Equipo HogarListo trabajando en Docta"
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl shadow-gray-200"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium leading-none mb-0.5">Operamos en</p>
                  <p className="text-sm font-bold text-gray-900">Docta, Córdoba</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
