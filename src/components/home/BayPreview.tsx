import { Link } from '@tanstack/react-router'
import { BAY_COUNT, BAY_FEATURES } from '../../lib/constants'
import { Reveal } from '../ui/Reveal'
import shopBaysImg from '../../assets/images/shop-bays.jpg'

export function BayPreview() {
  return (
    <section className="py-24 border-t border-pitbox-surface-2 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <Reveal className="flex-1 max-w-lg">
            <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">The Bays</p>
            <h2 className="font-display font-black uppercase text-pitbox-text tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}>
              {BAY_COUNT} identical bays.<br />All premium. All yours.
            </h2>
            <p className="text-[#737373] leading-relaxed mb-6">
              Each of our {BAY_COUNT} bays is identical — 320 sq ft of clean, organized workspace
              equipped with the same 1000+ professional tools, the same full-size flatscreen running
              ALLDATA repair manuals, and the same premium environment. No surprises.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-pitbox-muted mb-8">
              {BAY_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-pitbox-amber mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/bays">
              <button className="border border-pitbox-amber text-pitbox-amber text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-pitbox-amber/10 transition-colors">
                View All Bays →
              </button>
            </Link>
          </Reveal>

          <Reveal delay={100} className="flex-1 w-full">
            <Link to="/bays" className="group block">
              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] group-hover:border-pitbox-amber/40 transition-all duration-300">
                <img
                  src={shopBaysImg}
                  alt="PitBox garage bays"
                  className="w-full h-56 md:h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitbox-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-pitbox-text">6 premium bays — all identical</span>
                  <span className="text-sm text-pitbox-amber font-semibold">Explore →</span>
                </div>
              </div>
            </Link>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
