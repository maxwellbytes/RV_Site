import Link from 'next/link'

export default function Footer() {
  const links = [
    { label: 'Home', href: '/#home' },
    { label: 'About the Site', href: '/#about' },
    { label: 'Photos', href: '/#photos' },
    { label: 'Guidelines', href: '/#guidelines' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Availability', href: '/#availability'},
    { label: 'Book Now', href: '/#book' },
  ]

  return (
    <footer className="py-16 px-6 text-center bg-header">

      {/* row of nav links */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <p className="text-white/70 text-sm mb-3">
        <span className="font-semibold text-white">Brookshire Basecamp</span>
        {' '}— RV &amp; Camper Van Site · Boone, NC · Watauga County
      </p>

      <p className="text-white/40 text-xs mb-8">
        9 minutes to Downtown Boone · 15 minutes to the Blue Ridge Parkway · Full Hookups · Open Year-Round
      </p>

      <div className="border-t border-white/10 pt-8">
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Brookshire Basecamp. All rights reserved. ·{' '}
          <a
            href="mailto:info@brookshirebasecamp.com"
            className="hover:text-white/50 transition-colors"
          >
            hello@brookshirebasecamp.com
          </a>
        </p>
      </div>

    </footer>
  )
}