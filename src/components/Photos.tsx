// TODO: add alt text to photos + SEO

import { useState } from 'react'
import Image from 'next/image'

const photos = [
  {
    src: '/images/boonervsite-July-2026-photo1.jpg',
    alt: 'Ariel view of the RV site in autumn, showing a gravel driveway leading to a newly built wooden deck platform.',
  },
  {
    src: '/images/boonervsite-July-2026-photo2.jpg',
    alt: 'View across the site showing the private deck, gravel path, and privacy fence tucked into the wooded lot',
  },
  {
    src: '/images/boonervsite-July-2026-photo3.jpg',
    alt: 'Close-up of a finished guest deck with wire-panel railing, wood mulch beds with potted flowers, and gravel steps leading up to the deck and driveway',
  },
  {
    src: '/images/boonervsite-July-2026-photo4.jpg',
    alt: 'Ariel view of the deck under construction along a gravel driveway, with fall foliage covering the surrounding hillside',
  },
  {
    src: '/images/boonervsite-July-2026-photo5.jpg',
    alt: 'Driveway entrance from the main road, maked by the property mailbox, with the wooded site visible beyond'
  },
  {
    src: '/images/boonervsite-July-2026-photo6.jpg',
    alt: 'Side view of the completed wooden deck with tiered gravel steps leading down the hillside, a privacy fence panel, and a neighboring cabin with a green metal roof visible in the background'
  },
  {
    src: '/images/boonervsite-July-2026-photo7.jpg',
    alt: 'RV hookup amenities: well water spigot, 30A/50A electric panel, and 4-inch septic connection'
  },
  {
    src: '/images/boonervsite-July-2026-photo8.jpg',
    alt: 'View of a travel trailer parked on the gravel pad next to the deck and privacy fence panel, with a wooded backgrop and green lawn in the background'
  },
  {
    src: '/images/boonervsite-July-2026-photo9.jpg',
    alt: 'Close-up of a travel trailer with its awning extended, parked next to the finished guest deck and privacy fence panel'
  }
]

// # of photos visible at once
// use UseState + resize listener for responsive #
const VISIBLE_COUNT = 3

export default function Photos() {
  const [currIndex, setCurrIndex] = useState(0)

  // maxIndex is the furthest we can scroll before running out of photos
  const maxIndex = photos.length - VISIBLE_COUNT

  // scrollLeft/Right -> don't let user go out of bounds
  function scrollLeft() {
    setCurrIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  function scrollRight() {
    setCurrIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  // slice photos into only the visible ones
  const visiblePhotos = photos.slice(currIndex, currIndex + VISIBLE_COUNT)

  return (
    <section id="photos" className="py-24 px-6 bg-header">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">
          Photo Gallery
        </p>
        {/* use to say "See Boone Brookshire Basecamp". removed since that was not needed*/}
        <h2
          className="font-serif font-bold text-white mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          See Brookshire Basecamp
        </h2>

        {/* container for carousel -> use relative positioning so arrows go over top */}
        <div className="relative">

          {/* left arrow -> hide when at 1st photo */}
          {/*{currIndex > 0 && ( */}
            <button
              onClick={scrollLeft}
              // abs pos the arrow on the left, center vertically
              className="absolute -left-2 sm:-left-8 lg:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full"
              aria-label="Previous photos"
            >
              &#10094;
            </button>
          {/* )} */}
          

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
              width: `${(photos.length / VISIBLE_COUNT) * 100}%`,
              transform: `translateX(-${(currIndex * 100) / photos.length}%)`
              }}
            >
              {photos.map((photo, i) => (
                <div
                  key={photo.src}
                  className="px-2"
                  style={{ width: `${100 / photos.length}%`}}
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      // load 1st screenful eagerly so theres no pop-in on 1st render; rest lazy load in bg as they scroll near view
                      priority={i < VISIBLE_COUNT}
                      loading={i < VISIBLE_COUNT ? undefined : 'lazy'}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={scrollRight}
             className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full"
            aria-label="Next photo"
          >
            &#10095;
          </button>
        </div>

        {/* dot position indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currIndex ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to photo set ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}