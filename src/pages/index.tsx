import Header from '@/components/Header'
import Home from '@/components/Home'
import Pricebar from '@/components/Pricebar'
import About from '@/components/About'
import PhotoGallery from '@/components/Photos'
import Guidelines from '@/components/Guidelines'
import AvailabilityCalendar from '@/components/AvailabilityCalendar'
import BookingForm from '@/components/BookingForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Index() {
  return (
    <main>
      <Header />
      <Home />
      <Pricebar />
      <About />
      <PhotoGallery />
      <Guidelines />
      <AvailabilityCalendar />
      <BookingForm />
      <FAQ />
      <Footer />
    </main>
  )
}

/*TODO:
 * remove em dashes
 * hide development badge in next.config.js
 * change color hex to custom vars
 * Adjust text/descriptions of each enrty in about section
*/