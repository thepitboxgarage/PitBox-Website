import { BAY_COUNT, BAY_FEATURES } from '../../lib/constants'
import shopBaysImg from '../../assets/images/shop-bays.jpg'

export function BayOverview() {
  return (
    <section className="py-16 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">
              Your Workspace
            </p>
            <h2
              className="font-display font-black uppercase text-[#f5f5f5] mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
            >
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6">
              Each of our {BAY_COUNT} bays is a 320 sq ft, fully organized
              workspace. Epoxy floors, high-bay LED lighting, a dedicated parts
              cleaning station, and 30+ professional tools — all included from
              the moment your rental begins.
            </p>
            <ul className="flex flex-col gap-3">
              {BAY_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#a3a3a3]">
                  <svg
                    className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#262626]">
            <img
              src={shopBaysImg}
              alt="PitBox garage bay"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
