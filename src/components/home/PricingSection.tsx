import { Link } from '@tanstack/react-router'
import type { Duration, DurationOption } from '../../types'
import { Reveal } from '../ui/Reveal'

const PRICING: Record<Duration, DurationOption> = {
  hourly: {
    key: "hourly",
    label: "Hourly",
    duration: 60,
    price: 65,
    description: "1 hour — perfect for a quick job",
  },
  "half-day": {
    key: "half-day",
    label: "Half-Day",
    duration: 240,
    price: 320,
    description: "6 hours — tackle a full service",
  },
  "full-day": {
    key: "full-day",
    label: "Full-Day",
    duration: 540,
    price: 550,
    description: "12 hours — full day access, 9 AM – 9 PM",
  },
}

const DURATIONS = Object.values(PRICING)

export function PricingSection() {
  return (
    <section className="py-24 border-t border-pitbox-surface-2 bg-gradient-to-b from-pitbox-black to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-display font-black uppercase text-pitbox-text" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}>Simple, transparent pricing</h2>
          <p className="mt-4 text-pitbox-muted">No membership fees. No hidden costs. Just book and show up.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {DURATIONS.map((d, i) => {
            const isPopular = i === 1
            return (
              <Reveal key={d.key} delay={i * 100} className="h-full">
              <div
                className={`
                  relative rounded-xl border p-8 flex flex-col gap-4 h-full
                  ${isPopular
                    ? 'border-pitbox-amber/70 bg-gradient-to-b from-[#1f1a10] to-[#161410] shadow-[0_0_50px_rgba(245,158,11,0.12)]'
                    : 'border-[#2a2a2a] bg-gradient-to-b from-pitbox-surface-2 to-pitbox-surface'}
                `.trim()}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-pitbox-amber text-pitbox-black text-xs font-bold uppercase tracking-wide rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-pitbox-text">{d.label}</h3>
                  <p className="text-sm text-pitbox-subtle mt-1">{d.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-pitbox-text">${d.price}</span>
                  <span className="text-pitbox-subtle text-sm">CAD</span>
                </div>

                <ul className="flex flex-col gap-2 text-sm text-pitbox-muted">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-pitbox-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Full tool access
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-pitbox-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    ALLDATA repair manuals
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-pitbox-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Bay exclusively yours
                  </li>
                  {i >= 1 && (
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-pitbox-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                        ? 'bg-pitbox-amber text-pitbox-black hover:bg-pitbox-amber-light'
                        : 'bg-pitbox-surface-2 text-pitbox-text border border-pitbox-border-2 hover:border-pitbox-amber/50 hover:bg-[#1f1f1f]'
                      }
                    `.trim()}
                  >
                    Book {d.label}
                  </button>
                </Link>
              </div>
              </Reveal>
            )
          })}
        </div>

        <p className="text-center text-xs text-pitbox-subtle mt-8">
          All prices in Canadian dollars. Payment collected onsite. Full refund if cancelled 24+ hours in advance.
        </p>
      </div>
    </section>
  )
}
