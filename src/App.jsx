import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import FeatureImageSection from './components/FeatureImageSection'
import Services from './components/Services'
import Booking from './components/Booking'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const scrollToBooking = () => {
  document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero onCTA={scrollToBooking} />
      <HowItWorks />
      <FeatureImageSection onCTA={scrollToBooking} />
      <Services onReserve={scrollToBooking} />
      <Booking />
      <Trust />
      <FAQ />
      <Footer />

      {/* Sticky CTA — solo mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-100 shadow-xl p-4">
        <button
          onClick={scrollToBooking}
          className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3.5 rounded-xl text-base transition-colors"
        >
          Reservar ahora →
        </button>
      </div>
    </div>
  )
}
