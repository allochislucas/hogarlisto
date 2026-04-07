import { useState } from 'react'

const PRICE_PER_HOUR = 3000
const SERVICE_OPTIONS = ['Limpieza general', 'Limpieza profunda', 'Limpieza por horas']
const HOURS_OPTIONS = [2, 3, 4, 5]

// ← Reemplazá con el número de WhatsApp real (sin +, con código de país)
// Ejemplo Córdoba Argentina: 5493510000000
const WHATSAPP_NUMBER = '5492302576324'

const fmt = (n) => n.toLocaleString('es-AR')
const fmtDate = (s) => {
  if (!s) return ''
  const [y, m, d] = s.split('-')
  return `${d}/${m}/${y}`
}

const buildWhatsAppURL = ({ service, date, shift, hours, total }) => {
  const mensaje =
    `¡Hola HogarListo! 👋 Quiero reservar un servicio:\n\n` +
    `📋 *Servicio:* ${service}\n` +
    `📅 *Fecha:* ${fmtDate(date)}\n` +
    `🕐 *Turno:* ${shift.charAt(0).toUpperCase() + shift.slice(1)}\n` +
    `⏱️ *Duración:* ${hours} horas\n` +
    `💰 *Total:* $${fmt(total)}\n\n` +
    `Quedo a la espera de confirmación. ¡Gracias!`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}

export default function Booking() {
  const [service, setService] = useState(SERVICE_OPTIONS[0])
  const [date, setDate] = useState('')
  const [shift, setShift] = useState('mañana')
  const [hours, setHours] = useState(2)
  const [dateError, setDateError] = useState(false)

  const total = hours * PRICE_PER_HOUR
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!date) {
      setDateError(true)
      document.getElementById('date-input')?.focus()
      return
    }
    setDateError(false)
    const url = buildWhatsAppURL({ service, date, shift, hours, total })
    window.open(url, '_blank')
  }

  return (
    <section id="reservar" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Reservá tu limpieza</h2>
          <p className="text-gray-500 text-lg">Completá los datos y te contactamos por WhatsApp</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
        >
          {/* Service */}
          <fieldset className="mb-7">
            <legend className="block text-sm font-semibold text-gray-700 mb-3">
              Tipo de servicio
            </legend>
            <div className="space-y-2">
              {SERVICE_OPTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setService(s)}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all ${
                    service === s
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-600 hover:border-green-200 hover:bg-gray-50'
                  }`}
                >
                  {service === s && <span className="mr-2 text-green-500">✓</span>}
                  {s}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Date */}
          <div className="mb-7">
            <label htmlFor="date-input" className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha
            </label>
            <input
              id="date-input"
              type="date"
              min={today}
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
                setDateError(false)
              }}
              className={`w-full border-2 rounded-xl px-4 py-3 text-gray-700 focus:outline-none transition-colors ${
                dateError
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-200 focus:border-green-500'
              }`}
            />
            {dateError && (
              <p className="text-red-500 text-xs mt-1.5">Por favor seleccioná una fecha</p>
            )}
          </div>

          {/* Shift */}
          <fieldset className="mb-7">
            <legend className="block text-sm font-semibold text-gray-700 mb-3">Turno</legend>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'mañana', label: 'Mañana', icon: '🌅', sub: '8:00 – 13:00' },
                { value: 'tarde', label: 'Tarde', icon: '🌆', sub: '14:00 – 19:00' },
              ].map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setShift(t.value)}
                  className={`flex flex-col items-center py-4 px-3 rounded-xl border-2 font-medium transition-all ${
                    shift === t.value
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-600 hover:border-green-200'
                  }`}
                >
                  <span className="text-2xl mb-1">{t.icon}</span>
                  <span className="font-semibold text-sm">{t.label}</span>
                  <span className="text-xs opacity-60 mt-0.5">{t.sub}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Hours */}
          <fieldset className="mb-7">
            <legend className="block text-sm font-semibold text-gray-700 mb-3">
              Cantidad de horas
            </legend>
            <div className="grid grid-cols-4 gap-2">
              {HOURS_OPTIONS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHours(h)}
                  className={`py-3.5 rounded-xl border-2 font-bold text-lg transition-all ${
                    hours === h
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-500 hover:border-green-200 hover:text-green-600'
                  }`}
                >
                  {h}h
                </button>
              ))}
            </div>
          </fieldset>

          {/* Price */}
          <div className="bg-green-50 border border-green-100 rounded-xl px-5 py-4 mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">
                {hours} horas × ${fmt(PRICE_PER_HOUR)}/hora
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Precio total estimado</p>
            </div>
            <div className="text-3xl font-extrabold text-green-600">${fmt(total)}</div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.524 5.855L.057 23.55a.75.75 0 00.906.928l5.998-1.566A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 01-4.964-1.362l-.356-.212-3.695.964.987-3.595-.232-.37A9.698 9.698 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Reservar por WhatsApp →
          </button>

          <p className="text-center text-xs text-gray-400 mt-3">
            Te respondemos en menos de 1 hora · Cancelación gratuita hasta 24 hs antes
          </p>
        </form>
      </div>
    </section>
  )
}
