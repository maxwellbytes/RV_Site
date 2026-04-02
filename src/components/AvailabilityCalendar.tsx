import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'

// custom type that matches only the info needed from table
type Booking = {
  start_date: string
  end_date: string
}

export default function AvailabilityCalendar() {
  // holds list of confirmed bookings from table
  const [bookings, setBookings] = useState<Booking[]>([])

  // tracks if still waiting on supabase to respond or not
  const [loading, setLoading] = useState(true)

  // useEffect runs once when the component mounts.
  // only approved bookings in public table so no need to filter
  useEffect(() => {
    async function fetchBookings() {
      const { data, error } = await supabase
        .from('public_bookings')
        .select('start_date, end_date')

      if (error) {
        console.error('Error fetching bookings:', error)
        setLoading(false)
        return
      }

      setBookings(data ?? [])
      setLoading(false)
    }

    fetchBookings()
  }, [])

  // function is called for every date tile rendered, date gets "disabled" styling if this function rets true
  function isDateUnavailable({ date }: { date: Date }) {
    return bookings.some((booking) => {
      // covnvert the date strings from Supabase into date objects
      // append T00:00:00 to avoid timezone issues
      const start = new Date(booking.start_date + 'T00:00:00')
      const end = new Date(booking.end_date + 'T00:00:00')
      return date >= start && date <= end
    })
  }

  // prevents users from selecting past/unavailable dates
  function isTileDisabled({ date }: { date: Date }) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today || isDateUnavailable({ date })
  }
  

  return (
    <section id="availability" className="py-24 px-6" style={{ background: '#f5f2ed' }}>
      <div className="max-w-4xl mx-auto">

        <h2
          className="font-serif font-bold text-stone-800 mb-6"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
        >
          Ready to Reserve Your Spot?
        </h2>

        <div className="space-y-4 text-stone-600 leading-relaxed mb-6 w-full">
          <p>
            Brookshire Basecamp accommodates one RV or up to three camper vans from the
            same group — meaning the entire ¾-acre property is exclusively yours for the
            duration of your stay.
          </p>
          <p>
            Availability fills quickly during peak season (Summer vacations, Fall foliage,
            ASU home games). We recommend booking in advance.
          </p>
          <p>
            Booking nightly, weekly, or monthly — Brookshire Basecamp is your mountain
            home in the NC High Country.
          </p>
        </div>
      {/* was included in 1 version of mockup, unsure if they want to keep it <- note for future maxwell :)
        <div className="flex items-start gap-3 bg-white border-l-4 border-green-700 px-4 py-3 mb-10 text-sm text-stone-600 w-full">
          
          <p>
            <strong className="text-stone-800">Remote workers &amp; digital nomads:</strong>{' '}
            Ask us about extended monthly stays. The High Country has reliable cellular
            coverage and Boone offers numerous coffee shops and coworking-friendly cafés.
          </p>
        </div>
        */}
        <div className="flex flex-col items-start gap-6">

          {loading ? (
            <div className="text-stone-400 text-sm py-8">Loading availability...</div>
          ) : (
            <>
              {/*
                pass null values since this is display only
                tileDisabled greys out past/unavailable dates
              */}
              <div className='flex justify-center w-full custom-calendar-container'>
                <Calendar
                    tileDisabled={isTileDisabled}
                    value={null}
                    calendarType='gregory'
                />
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-white border border-stone-300" />
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-stone-200 border border-stone-300" />
                  <span>Unavailable</span>
                </div>
              </div>
            </>
          )}

        </div>

        <div className="mt-10">
          <Link
            href="/#book"
            className="inline-block px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#b5672a' }}
          >
            Request a Booking
          </Link>
        </div>

      </div>
    </section>
  )
}