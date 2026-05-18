import alldataLogo from '../../assets/images/alldata-logo.jpg'
import { Reveal } from '../ui/Reveal'

const MANUAL_SYSTEM_FEATURES = [
  "Covers 10,000+ vehicle make/model/year combinations",
  "OEM torque specs and fluid specifications",
  "Step-by-step illustrated service procedures",
  'flat screen monitor',
  "Keyboard and wireless mouse included",
  "ALLDATA content updated continuously",
  "Searchable by VIN for exact fitment",
]

export function AboutManualSystem() {
  return (
    <section id="tools" className="py-20 border-b border-pitbox-surface-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">
              Powered by ALLDATA
            </p>
            <h2
              className="font-display font-black uppercase text-pitbox-text mb-6"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
            >
              Professional-grade repair data. In every bay.
            </h2>
            <p className="text-pitbox-muted text-sm leading-relaxed mb-6">
              Every bay includes a full size flatscreen running ALLDATA — the OEM repair database
              trusted by dealerships and professional shops across North America. Factory specs,
              wiring diagrams, and step-by-step procedures, exactly when you need them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MANUAL_SYSTEM_FEATURES.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <div className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-pitbox-amber mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-pitbox-muted">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="rounded-xl overflow-hidden">
            <img src={alldataLogo} alt="ALLDATA" className="w-full object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
