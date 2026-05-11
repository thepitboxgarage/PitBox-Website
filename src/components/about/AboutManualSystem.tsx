import { MANUAL_SYSTEM_FEATURES } from '../../lib/constants'

export function AboutManualSystem() {
  return (
    <section id="tools" className="py-20 border-b border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">
          The Manual System
        </p>
        <h2
          className="font-display font-black uppercase text-[#f5f5f5] mb-6"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
        >
          Your personal automotive library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-[#a3a3a3] text-sm leading-relaxed">
            <p>
              Every bay includes a 55-inch flatscreen mounted at eye level,
              connected to our proprietary interactive automotive manual catalog.
              It's not a YouTube tutorial — it's professional-grade
              documentation.
            </p>
            <p>
              Search by make, model, year, and procedure type. Get torque specs,
              fluid capacities, step-by-step sequences with illustrations, and
              manufacturer-recommended service intervals.
            </p>
            <p>
              Whether you're doing a brake job, a timing chain swap, or a full
              engine-out service, the system walks you through it at your pace,
              in your bay.
            </p>
          </div>
          <div className="space-y-3">
            {MANUAL_SYSTEM_FEATURES.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <svg
                  className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#a3a3a3]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
