// custom type for guideline layout/structure
type Guideline = {
  title: string
  description: string
}

const guidelines: Guideline[] = [
  {
    title: 'Vehicle Size',
    description:
      "Best for rigs 30' or shorter. One RV or up to 3 camper vans from the same group. Contact us if you're unsure whether your rig is a good fit.",
  },
  {
    title: 'Hookups',
    description:
      'Full 30A/50A Electric, Well Water, and a 4" Septic Connection provided at the site.',
  },
]

export default function Guidelines() {
  return (
    <section id="guidelines" className="py-24 px-6" style={{ background: '#f5f2ed' }}>
      <div className="max-w-4xl mx-auto">

        <p className="text-xs tracking-[0.25em] uppercase text-green-700 mb-4">
          Built For How You Camp
        </p>

        <h2
          className="font-serif font-bold text-stone-800 mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          Good-to-Know Before You Book
        </h2>

        <p className="text-stone-600 leading-relaxed mb-4 max-w-2xl">
          Whether you&apos;re a weekend warrior, a long-haul traveler, or just chasing cool
          summer air and the local outdoor adventures - Brookshire Basecamp was
          made for you
        </p>

        {/* 3x2 grid of guideline cards, should collapse into single col on mobile */}
        {/* index - so i can access/tell which grid section is being rendered */}
        <div className="grid grid-cols-1 md:grid-cols-2 py-6">
          {guidelines.map((item, index) => (
            <div key={item.title} 
            className={`px-8 py-6 
            ${index === 0 ? 'md:border-r border-stone-300' : ''}
            ${index === 0 ? 'border-b md:border-b-0' : ''}`}>
              <h3 className="font-semibold text-stone-800 tracking-[0.2em] uppercase mb-3">{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 text-md text-stone-500">
          Questions?{' '}
          <a
            href="mailto:hello@BooneRVsite.com"
            className="text-green-700 hover:underline"
          >
            Email us: hello@BooneRVsite.com
          </a>
        </div>

      </div>
    </section>
  )
}