// TODO: add alt text to photos + SEO

import { useState } from 'react'
import Image from 'next/image'

const photos = [
  {
    src: '/images/boonervsite-march-2026-photo1.png',
    alt: 'Private RV campsite Boone NC wooded lot creekside',
  },
  {
    src: '/images/boonervsite-march-2026-photo2.png',
    alt: 'Blue Ridge Parkway scenic view near Boone NC',
  },
  {
    src: '/images/boonervsite-march-2026-photo3.png',
    alt: 'Mountain creek forest campsite Watauga County NC',
  },
  {
    src: '/images/boonervsite-march-2026-photo4.png',
    alt: 'RV campfire fire pit mountain NC',
  },
  {
    src: '/images/boonervsite-march-2026-photo5.png',
    alt: 'fill later'
  },
  {
    src: '/images/boonervsite-march-2026-photo6.png',
    alt: 'fill later'
  },
  {
    src: '/images/boonervsite-march-2026-photo7.png',
    alt: 'fill later'
  },
  {
    src: '/images/boonervsite-march-2026-photo8.png',
    alt: 'fill later'
  }
]

export default function Photos() {
  // currIndex tracks which photo is at the left position
  // 8 photos, 3 visible at a time so max index is 6 (1/2/3, 2/3/4, ... 6/7/8)
  const [currIndex, setCurrIndex] = useState(0)

  // how many photos to show at once.
  // maybe change later for mobile view?
  const visibleCount = 3

  // maxIndex is the furthest we can scroll before running out of photos
  const maxIndex = photos.length - visibleCount

  // scrollLeft/Right -> don't let user go out of bounds
  function scrollLeft() {
    setCurrIndex((prev) => Math.max(prev - 1, 0))
  }

  function scrollRight() {
    setCurrIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  // slice photos into only the visible ones
  const visiblePhotos = photos.slice(currIndex, currIndex + visibleCount)

  return (
    <section id="photos" className="py-24 px-6 bg-header">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">
          Photo Gallery
        </p>
        <h2
          className="font-serif font-bold text-white mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          See Brookshire Basecamp
        </h2>

        {/* container for carousel -> use relative positioning so arrows go over top */}
        <div className="relative">

          {/* left arrow -> hide when at 1st photo */}
          {currIndex > 0 && (
            <button
              onClick={scrollLeft}
              // abs pos the arrow on the left, center vertically
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full"
              aria-label="Previous photos"
            >
              ←
            </button>
          )}

          {/* grid to show photos in visiblePhotos side-by-side */}
          <div className="grid grid-cols-3 gap-4">
            {visiblePhotos.map((photo) => (
              <div
                key={photo.src}
                // keeps a consistent 4/3 ratio
                className="relative aspect-4/3 overflow-hidden"
              >
                {/*
                  Next.js image component optimizes image for faster loading
                  fill - makes image fill container
                  object-cover - crops img w/o distortion
                */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* right arrow -> hidden when at last photo */}
          {currIndex < maxIndex && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full"
              aria-label="Next photos"
            >
              →
            </button>
          )}

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