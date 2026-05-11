import { useState } from 'react'
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
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + CAROUSEL.length) % CAROUSEL.length)
  const next = () => setCurrent((c) => (c + 1) % CAROUSEL.length)

  return (
    <div>
      <div className="rounded-xl overflow-hidden border border-[#262626] bg-[#141414]">
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          {CAROUSEL.map((item, i) => (
            <img
              key={item.label}
              src={item.src}
              alt={item.label}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div className="px-5 py-4 flex items-center justify-between gap-4 border-t border-[#1a1a1a]">
          <p className="text-sm font-medium text-[#f5f5f5] truncate">
            {CAROUSEL[current].label}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="w-7 h-7 rounded-lg border border-[#333] text-[#a3a3a3] hover:border-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-xs text-[#525252] tabular-nums">
              {current + 1} / {CAROUSEL.length}
            </span>
            <button
              onClick={next}
              className="w-7 h-7 rounded-lg border border-[#333] text-[#a3a3a3] hover:border-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors flex items-center justify-center"
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
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${i === current ? 'w-6 bg-[#C9A84C]' : 'w-1.5 bg-[#333]'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
