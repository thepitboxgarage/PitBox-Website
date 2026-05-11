import { Link } from '@tanstack/react-router'
import { BAY_COUNT, BAY_FEATURES } from '../../lib/constants'
import shopBaysImg from '../../assets/images/shop-bays.jpg'

export function BayPreview() {
  return (
    <section className="py-24 border-t border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text */}
          <div className="flex-1 max-w-lg">
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">The Bays</p>
            <h2 className="font-display font-black uppercase text-[#f5f5f5] tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}>
              {BAY_COUNT} identical bays.<br />All premium. All yours.
            </h2>
            <p className="text-[#737373] leading-relaxed mb-6">
              Each of our {BAY_COUNT} bays is identical — 320 sq ft of clean, organized workspace
              equipped with the same 30+ professional tools, the same full-size flatscreen running
              ALLDATA repair manuals, and the same premium environment. No surprises.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-[#a3a3a3] mb-8">
              {BAY_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/bays">
              <button className="border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#C9A84C]/10 transition-colors">
                View All Bays →
              </button>
            </Link>
          </div>

          {/* Bay photo */}
          <div className="flex-1 w-full">
            <Link to="/bays" className="group block">
              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] group-hover:border-[#C9A84C]/40 transition-all duration-300">
                <img
                  src={shopBaysImg}
                  alt="PitBox garage bays"
                  className="w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Bottom gradient + label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#f5f5f5]">6 premium bays — all identical</span>
                  <span className="text-sm text-[#C9A84C] font-semibold">Explore →</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
