import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

// custom type for data in form, matches cols in supabase table
type FormData = {
  first_name: string
  last_name: string
  email: string
  phone: string
  start_date: string
  end_date: string
  stay_type: string
  rig_type: string
  message: string
}

export default function BookingForm() {
  // can use spread operator to update that field when it changes
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    start_date: '',
    end_date: '',
    stay_type: 'nightly',
    rig_type: 'class_a',
    message: '',
  })

  // tacks if the form has been submitted to tell if form or confirmation message should be shown
  const [submitted, setSubmitted] = useState(false)

  // holds any error messages if supabase insert fails
  const [error, setError] = useState<string | null>(null)

  // prevents user from submitting form twice
  const [loading, setLoading] = useState(false)

  // updates 1 field in formData when user types, field name comes from the input's name attribute
  // single handler for all fields keeps it dry
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // runs once user clicks submission button
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    // just in case :)
    e.preventDefault()
    setLoading(true)
    setError(null)

    // insert new row into table
    const { error: supabaseError } = await supabase.from('bookings').insert([
      {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone_number: formData.phone || null,       // optional col
        start_date: formData.start_date,
        end_date: formData.end_date,
        stay_type: formData.stay_type,
        rig_type: formData.rig_type,
        message: formData.message || null,   // optional col
      },
    ])

    setLoading(false)

    if (supabaseError) {
      setError('Something went wrong. Please try again or email us directly.')
      console.error('Supabase insert error:', supabaseError)
      return
    }

    // if this line runs it means everything went well and can show confirmation message
    setSubmitted(true)
  }

  // className shared by all text inputs and selects
  const inputClass =
    'w-full px-4 py-3 bg-stone-100 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-green-700 transition-colors'

  // className shared by all field labels
  const labelClass = 'block text-xs tracking-[0.15em] uppercase text-stone-500 mb-2'

  if (submitted) {
    return (
      <section id="book" className="py-24 px-6" style={{ background: '#f5f2ed' }}>
        <div className="max-w-2xl mx-auto bg-white p-12 text-center">
          {/*<div className="text-4xl mb-4">🌲</div>*/}
          <h3 className="font-serif text-2xl text-stone-800 mb-4">Request Received!</h3>
          <p className="text-stone-600 leading-relaxed">
            Thanks for reaching out. We&apos;ll review your request and get back to you
            within 24 hours to confirm availability.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="py-24 px-6" style={{ background: '#f5f2ed' }}>
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12">

        <h2 className="font-serif font-bold text-stone-800 text-3xl mb-8">
          Request a Reservation
        </h2>

        {/* error meessage if supabase insert fails */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Jane"
                value={formData.first_name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Smith"
                value={formData.last_name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="jane@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Phone <span className="text-stone-400 normal-case tracking-normal">(optional)</span></label>
            <input
              type="tel"
              name="phone"
              placeholder="(828) 555-0000"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Arrival Date</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Departure Date</label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Stay Type</label>
            <select
              name="stay_type"
              value={formData.stay_type}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="nightly">Nightly ($75/night)</option>
              <option value="weekly">Weekly ($450/week)</option>
              <option value="monthly">Monthly ($1,500/month)</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Rig Type & Length</label>
            <select
              name="rig_type"
              value={formData.rig_type}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="class_a">Class A Motorhome (up to 30&apos;)</option>
              <option value="class_c">Class C Motorhome (up to 30&apos;)</option>
              <option value="fifth_wheel">Fifth Wheel</option>
              <option value="travel_trailer">Travel Trailer</option>
              <option value="camper_van">Camper Van (up to 3 vans)</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Questions or Notes <span className="text-stone-400 normal-case tracking-normal">(optional)</span>
            </label>
            <textarea
              name="message"
              placeholder="Anything else we should know?"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 text-sm tracking-widest uppercase font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ background: '#3A5A40' }}
          >
            {loading ? 'Sending...' : 'Send Reservation Request'}
          </button>

        </div>
      </div>
    </section>
  )
}