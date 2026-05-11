import { Link } from '@tanstack/react-router'
import { DURATIONS } from '../../lib/constants'

export function PricingSection() {
  return (
    <section className="py-24 border-t border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-display font-black uppercase text-[#f5f5f5]" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}>Simple, transparent pricing</h2>
          <p className="mt-4 text-[#a3a3a3]">No membership fees. No hidden costs. Just book and show up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {DURATIONS.map((d, i) => {
            const isPopular = i === 1
            return (
              <div
                key={d.key}
                className={`
                  relative rounded-xl border p-8 flex flex-col gap-4
                  ${isPopular
                    ? 'border-[#C9A84C]/70 bg-gradient-to-b from-[#1f1a10] to-[#161410] shadow-[0_0_50px_rgba(245,158,11,0.12)]'
                    : 'border-[#2a2a2a] bg-gradient-to-b from-[#1a1a1a] to-[#141414]'}
                `.trim()}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[#C9A84C] text-[#0a0a0a] text-xs font-bold uppercase tracking-wide rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-[#f5f5f5]">{d.label}</h3>
                  <p className="text-sm text-[#525252] mt-1">{d.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#f5f5f5]">${d.price}</span>
                  <span className="text-[#525252] text-sm">CAD</span>
                </div>

                <ul className="flex flex-col gap-2 text-sm text-[#a3a3a3]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Full tool access
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    ALLDATA repair manuals
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Bay exclusively yours
                  </li>
                  {i >= 1 && (
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Discounted rate
                    </li>
                  )}
                </ul>

                <Link to="/book" className="mt-auto">
                  <button
                    className={`
                      w-full py-2.5 rounded-lg font-semibold text-sm transition-colors
                      ${isPopular
                        ? 'bg-[#C9A84C] text-[#0a0a0a] hover:bg-[#D4B866]'
                        : 'bg-[#1a1a1a] text-[#f5f5f5] border border-[#333] hover:border-[#C9A84C]/50 hover:bg-[#1f1f1f]'
                      }
                    `.trim()}
                  >
                    Book {d.label}
                  </button>
                </Link>
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs text-[#525252] mt-8">
          All prices in Canadian dollars. Payment collected onsite. Full refund if cancelled 24+ hours in advance.
        </p>
      </div>
    </section>
  )
}
