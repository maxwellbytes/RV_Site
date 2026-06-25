export default function About() {
  // 4 key states show at bottom of section, here for easy updating
  const stats = [
    { value: '5 min', label: 'Rocky Knob Mountain Bike Park' },
    { value: "9 min", label: 'Downtown Boone, NC' },
    { value: '15 min', label: 'Blue Ridge Parkway' },
    { value: '50 min', label: 'Grandfather Mountain' },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-pale">
      <div className="max-w-4xl mx-auto">

        <p className="text-xs tracking-[0.25em] uppercase text-green-700 mb-4">
          About the Site
        </p>

        <h2 className="font-serif font-bold text-stone-800 mb-8"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          Minutes from Everything. <br />Miles from the Crowds.
        </h2>

        <div className="space-y-6 text-stone-600 leading-relaxed text-lg mb-12">
          <p>
            Brookshire Basecamp puts you in the heart of NC's High Country - close enough to town to grab dinner, 
            far enough from the crowds to truly unwind
          </p>
          <p>
            Nestled on a peaceful 3⁄4-acre lot along a constantly flowing mountain creek,
            Brookshire Basecamp is the RV and camper van site you've been looking for
            in the Western North Carolina mountains.
          </p>
          <p>
            This is a single-site rental - meaning your group has the site to yourselves. The gravel pad offers a stable, 
            level surface on a quiet, low-traffic spur road. There is a 8&apos; x 16&apos; wooden deck to give you a level space to relax, eat meals, and
            socialize from sunrise to sunset. As much as we would have loved this to be on a completely wooded lot, to be this close to downtown Boone
            there is a neighboring house next door but we have built a privacy fence in-between
          </p>
          <p>
            This RV site rental offers WiFi internet, 30A/50A Electric, Well Water, and 4” Septic Connection.
          </p>
          <p>
            This may be a RV parking site rental near Boone, NC at its best.
          </p>
        </div>

        <hr className="border-stone-200 mb-12" />

        {/* renders stats from array */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-serif text-green-800 mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {stat.value}
              </div>
              <div className="text-stone-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}