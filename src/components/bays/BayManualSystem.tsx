import { BAY_MANUAL_FEATURES } from '../../lib/constants'
import alldataLogo from '../../assets/images/alldata-logo.jpg'

export function BayManualSystem() {
  return (
    <section className="py-16 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Logo */}
          <div className="w-full max-w-lg shrink-0 rounded-xl overflow-hidden">
            <img src={alldataLogo} alt="ALLDATA" className="w-full object-cover" />
          </div>

          <div className="flex-1">
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">
              Powered by ALLDATA
            </p>
            <h2
              className="font-display font-black uppercase text-[#f5f5f5] mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
            >
              The same system used by professional shops. In your bay.
            </h2>
            <p className="text-[#a3a3a3] leading-relaxed mb-6 text-sm">
              Every bay includes a 55" 4K touchscreen running ALLDATA — the
              industry-standard OEM repair database trusted by dealerships and
              independent shops. Search across 10,000+ vehicle combinations for
              factory-spec service procedures, torque tables, wiring diagrams,
              and fluid capacities.
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
