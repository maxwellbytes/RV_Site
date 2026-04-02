export default function Pricebar() {
  // Change rates here
  const tiers = [
    { label: 'Nightly', price: '$75', unit: '/ night' },
    { label: 'Weekly', price: '$450', unit: '/ week' },
    { label: 'Monthly', price: '$1,500', unit: '/ month' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-header" id="pricing">
      {tiers.map((tier, index) => (
        <div
          key={tier.label}
          // border-r adds line btwn cols only
          className={`flex flex-col items-center justify-center py-8 px-4 ${
            index < tiers.length - 1 ? 'border-r border-white/10' : ''
          }`}
        >
          {/* labels above each section */}
          <span className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">
            {tier.label}
          </span>
          <div className="flex items-start">
            <span className="text-white text-xl font-semibold mt-1">$</span>
            <span className="text-white font-bold" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
              {/* Remove leading $ so I can load it separately and smaller ^^ */}
              {tier.price.replace('$', '')}
            </span>
          </div>
          <span className="text-white/50 text-sm mt-1">{tier.unit}</span>
        </div>
      ))}

      {/* Avail col rendered separately due to difference in design */}
      <div className="flex flex-col items-center justify-center py-8 px-4 border-l border-white/10">
        <span className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">
          Availability
        </span>
        <span className="text-white font-serif text-2xl">Year-Round</span>
      </div>
    </div>
  )
}