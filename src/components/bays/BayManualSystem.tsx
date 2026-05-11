import alldataLogo from '../../assets/images/alldata-logo.jpg'
import { Reveal } from '../ui/Reveal'

const BAY_MANUAL_FEATURES = [
  "10,000+ vehicles covered",
  "OEM torque specs",
  "Wiring diagrams",
  "VIN search",
  "Touch + keyboard control",
  "Updated quarterly",
]

export function BayManualSystem() {
  return (
    <section className="py-16 border-b border-pitbox-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <Reveal delay={100} className="w-full max-w-lg shrink-0 rounded-xl overflow-hidden">
            <img src={alldataLogo} alt="ALLDATA" className="w-full object-cover" />
          </Reveal>
          <Reveal className="flex-1">
            <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">
              Powered by ALLDATA
            </p>
            <h2
              className="font-display font-black uppercase text-pitbox-text mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
            >
              The same system used by professional shops. In your bay.
            </h2>
            <p className="text-pitbox-muted leading-relaxed mb-6 text-sm">
              Every bay includes a 55" 4K touchscreen running ALLDATA — the
              industry-standard OEM repair database trusted by dealerships and
              independent shops. Search across 10,000+ vehicle combinations for
              factory-spec service procedures, torque tables, wiring diagrams,
              and fluid capacities.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {BAY_MANUAL_FEATURES.map((feat, i) => (
                <Reveal key={feat} delay={i * 60}>
                  <div className="flex items-center gap-2 text-sm text-pitbox-muted">
                    <svg
                      className="w-3.5 h-3.5 text-pitbox-amber shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
