import { Reveal } from '../ui/Reveal'
import alldataLogo from '../../assets/images/alldata-logo.jpg'

const ALLDATA_FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: 'OEM Factory Data',
    body: 'Repair procedures sourced directly from original equipment manufacturers — the same documentation your dealership uses.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: '10,000+ Vehicles',
    body: 'Search by make, model, year, or VIN. Covers virtually every domestic and import vehicle sold in North America.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
    title: 'Torque Specs & Wiring',
    body: 'Factory torque values, fluid specs, wiring diagrams, and component locations — everything needed to do the job right.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Full Size Flat Screen',
    body: 'Every bay has a dedicated full-size display with keyboard and mouse — easy to see while your hands are in the engine bay.',
  },
]

export function AlldataSection() {
  return (
    <section className="py-24 bg-pitbox-black border-t border-pitbox-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <Reveal>
            <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">Powered by ALLDATA</p>
            <h2
              className="font-display font-black uppercase text-pitbox-text mb-6"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
            >
              The same data pros rely on,<br />at your fingertips.
            </h2>
            <p className="text-[#737373] leading-relaxed mb-10 text-sm max-w-lg">
              ALLDATA is the automotive industry's leading OEM repair database —
              used by over 400,000 professional technicians at dealerships and
              independent shops. Every Pit Box bay has it mounted on a flat screen monitor so you have the right information exactly when you need it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ALLDATA_FEATURES.map((feat, i) => (
                <Reveal key={feat.title} delay={i * 75}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-pitbox-amber/10 text-pitbox-amber rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {feat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-pitbox-text mb-1">{feat.title}</p>
                      <p className="text-xs text-[#737373] leading-relaxed">{feat.body}</p>
                    </div>
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
