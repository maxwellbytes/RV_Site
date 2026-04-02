import Link from 'next/link'

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-header shadow-sm">
        <span className="text-xl font-semibold">
            Brookshire Base Camp
        </span>
        <Link href="/#book" className="bg-orange-btn text-white px-5 py-2 tracking-widest uppercase font-semibold transition-opacity hover:opacity-90">
            Book Now
        </Link>
    </nav>
  )
}