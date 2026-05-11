import { BAY_MANUAL_FEATURES, BAY_MANUAL_UI_LINES } from '../../lib/constants'

export function BayManualSystem() {
  return (
    <section className="py-16 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* TV mockup */}
          <div className="w-full max-w-lg shrink-0">
            <div className="bg-[#0d0d0d] border-4 border-[#1a1a1a] rounded-2xl aspect-video relative overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">
                  PitBox Manual System
                </p>
                <div className="w-full space-y-2">
                  {BAY_MANUAL_UI_LINES.map((line) => (
                    <div key={line} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#C9A84C]/60 rounded-full shrink-0" />
                      <span className="text-xs text-[#525252]">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-2 h-3 bg-[#1a1a1a] rounded-b-lg mx-8" />
          </div>

          <div className="flex-1">
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">
              Flatscreen Interactive System
            </p>
            <h2
              className="font-display font-black uppercase text-[#f5f5f5] mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
            >
              Your personal automotive library, mounted on the wall.
            </h2>
            <p className="text-[#a3a3a3] leading-relaxed mb-6 text-sm">
              Every bay includes a 55" 4K touchscreen running our proprietary
              automotive manual catalog. Search across 10,000+ vehicle
              combinations for factory-spec service procedures, torque tables,
              wiring diagrams, and fluid capacities.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {BAY_MANUAL_FEATURES.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                  <svg
                    className="w-3.5 h-3.5 text-[#C9A84C] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
