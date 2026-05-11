import { Link } from '@tanstack/react-router'
import { BAY_COUNT } from '../../lib/constants'

export function BaysHero() {
  return (
    <section className="py-16 border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">
          The Bays
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1
              className="font-display font-black uppercase text-[#f5f5f5]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05 }}
            >
              {BAY_COUNT} premium bays.
            </h1>
            <p className="mt-3 text-[#a3a3a3] max-w-xl">
              Every bay is identical — same tools, same space, same quality.
              Pick any available slot and get to work.
            </p>
          </div>
          <Link to="/book">
            <button className="shrink-0 bg-[#C9A84C] text-[#0a0a0a] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#D4B866] transition-colors">
              Reserve a Bay
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
