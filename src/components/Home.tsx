// TODO: move all hex codes to custom colors

import Link from 'next/link'

export default function Home() {
  const badges = [
    {label: 'Full Hookups'},
    {label: 'Creekside'},
    {label: '¾-Acre Lot'},
    {label: 'Groups Welcome'},
    {label: '11 min to Blue Ridge Parkway'},
  ]

  return (
    // min-h-screen - fill viewport height, bg gradient for fog effect, relative + overflow-hidden to layer content on top of bg
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="home"
      style={{
        background: 'linear-gradient(to bottom, #9a9a8e 0%, #b8b8aa 20%, #d0cfc4 45%, #d0cfc4 55%, #b8b8aa 80%, #9a9a8e 100%)',
      }}
    >
      <p className="text-xs tracking-[0.25em] uppercase text-stone-600 mb-6 sm:hidden">
        Boone, NC · Watauga County · High Country
      </p>

      <h1 className="text-center text-white font-serif mb-2 drop-shadow-md"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.1 }}
      >
        Your Boone NC<br /> Mountain Basecamp
      </h1>

      <h2
        className="font-serif italic text-center mb-6 drop-shadow"
        style={{fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', color: '#c9b97a', lineHeight: 1.2,}}
      >
        RV Site Rental
      </h2>

      <p className="text-center text-white/80 max-w-md mb-10 text-sm leading-relaxed drop-shadow px-4">
        A single full-hookup RV and camper van site <br />
        Near downtown Boone, Appalachian State University ASU, & Blue Ridge Parkway.
      </p>

      {/* renders each feature as an array in a pill */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 text-white text-sm backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            {badge.label}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 justify-center px-4">
        <Link
          href="/#availability"
          className="px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: '#b5672a' }}
        >
          Check Availability
        </Link>
        <Link
          href="/#about"
          className="px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white border border-white/60 hover:bg-white/10 transition-colors"
        >
          Explore the Site
        </Link>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}