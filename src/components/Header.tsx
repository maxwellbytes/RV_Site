import Link from 'next/link'

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex text-white justify-between items-center px-2 py-2 md:px-8 md:py-4 bg-[#283618] shadow-sm">
        <span className="hidden text-xl font-semibold md:block">
            Boone, NC RV Site Rental - Brookshire Basecamp
        </span>
        <span className="text-sm font-semibold md:hidden">
          Brookshire Basecamp
        </span>
        <Link href="/#book" className="bg-[#BC6C25] text-white px-3 py-1 md:px-5 md:py-2 tracking-widest uppercase font-semibold transition-opacity hover:opacity-90">
            Book Now
        </Link>
    </nav>
  )
}