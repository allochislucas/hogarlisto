import { useState } from 'react'

const PRICE_PER_HOUR = 3000
const SERVICE_OPTIONS = ['Limpieza general', 'Limpieza profunda', 'Limpieza por horas']
const HOURS_OPTIONS = [2, 3, 4, 5]

const fmt = (n) => n.toLocaleString('es-AR')
const fmtDate = (s) => {
  if (!s) return ''
  const [y, m, d] = s.split('-')
  return `${d}/${m}/${y}`
}

export default function Booking() {
  const [service, setService] = useState(SERVICE_OPTIONS[0])
  const [date, setDate] = useState('')
  const [shift, setShift] = useState('mañana')
  const [hours, setHours] = useState(2)
  const [showModal, setShowModal] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
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
    setShowModal(true)
  }

  const handleConfirm = () => setConfirmed(true)

  const handleClose = () => {
    setShowModal(false)
    if (confirmed) {
      setConfirmed(false)
      setDate('')
      setHours(2)
      setShift('mañana')
      setService(SERVICE_OPTIONS[0])
    }
  }

  return (
    <section id="reservar" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Reservá tu limpieza</h2>
          <p className="text-gray-500 text-lg">Completá los datos y confirmá tu reserva en segundos</p>
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
            className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:scale-[1.01]"
          >
            Confirmar reserva →
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Cancelación gratuita hasta 24 hs antes del servicio
          </p>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
        >
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl animate-slide-up overflow-hidden">
            {!confirmed ? (
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold text-gray-900">Resumen de tu reserva</h3>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-6">Revisá los detalles antes de confirmar</p>

                <div className="space-y-1 mb-6">
                  {[
                    { label: 'Servicio', value: service },
                    { label: 'Fecha', value: fmtDate(date) },
                    { label: 'Turno', value: shift.charAt(0).toUpperCase() + shift.slice(1) },
                    { label: 'Duración', value: `${hours} horas` },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-500 text-sm">{label}</span>
                      <span className="font-semibold text-gray-900 text-sm">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 rounded-xl px-4 py-3 flex items-center justify-between mb-6">
                  <span className="text-gray-600 font-medium text-sm">Total</span>
                  <span className="text-2xl font-extrabold text-green-600">${fmt(total)}</span>
                </div>

                <button
                  onClick={handleConfirm}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-base mb-3 transition-colors"
                >
                  Pagar ${fmt(total)} →
                </button>
                <button
                  onClick={handleClose}
                  className="w-full text-gray-500 hover:text-gray-700 font-medium py-2 text-sm transition-colors"
                >
                  Volver y editar
                </button>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Reserva confirmada!</h3>
                <p className="text-gray-500 mb-1">
                  Te vamos a contactar en las próximas horas para coordinar los detalles.
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  {service} · {fmtDate(date)} · Turno {shift}
                </p>
                <div className="bg-green-50 rounded-xl p-4 mb-6">
                  <p className="text-3xl font-extrabold text-green-600">${fmt(total)}</p>
                  <p className="text-xs text-gray-400 mt-1">Monto total</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition-colors"
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
