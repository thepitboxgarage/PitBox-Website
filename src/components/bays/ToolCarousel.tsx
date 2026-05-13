import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import socketsImg from '../../assets/images/sockets-tools.jpg'
import wrenchImg from '../../assets/images/wrench-set-tools.jpg'
import carJackImg from '../../assets/images/car-jack-tool.jpg'

const CAROUSEL = [
  {
    src: socketsImg,
    label: 'Socket & Ratchet Set — Metric & Imperial (3/8" & 1/2" Drive)',
  },
  { src: wrenchImg, label: 'Combination Wrench Set — Metric & Imperial' },
  { src: carJackImg, label: 'Floor Jack & Jack Stands — 3-Ton Rated' },
]

export function ToolCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) setCurrent(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  return (
    <div>
      <div className="rounded-xl overflow-hidden border border-pitbox-border bg-pitbox-surface">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {CAROUSEL.map((item) => (
              <div key={item.label} className="min-w-0 flex-[0_0_100%]">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 py-4 flex items-center justify-between gap-4 border-t border-pitbox-surface-2">
          <p className="text-sm font-medium text-pitbox-text truncate">
            {CAROUSEL[current].label}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-7 h-7 rounded-lg border border-pitbox-border-2 text-pitbox-muted hover:border-pitbox-amber/60 hover:text-pitbox-amber transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-xs text-pitbox-subtle tabular-nums">
              {current + 1} / {CAROUSEL.length}
            </span>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-7 h-7 rounded-lg border border-pitbox-border-2 text-pitbox-muted hover:border-pitbox-amber/60 hover:text-pitbox-amber transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {CAROUSEL.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${i === current ? 'w-6 bg-pitbox-amber' : 'w-1.5 bg-pitbox-border-2'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
