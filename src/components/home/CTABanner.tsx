import { Link } from '@tanstack/react-router'
import { Reveal } from '../ui/Reveal'

export function CTABanner() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-pitbox-amber/25 px-8 py-20 text-center"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%), #111111',
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(#C9A84C 1px, transparent 1px),
                linear-gradient(90deg, #C9A84C 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-pitbox-amber/30 rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-pitbox-amber/30 rounded-br-2xl pointer-events-none" />

          <Reveal className="relative z-10">
            <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="font-display font-black uppercase text-pitbox-text mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05 }}>
              Ready to get your hands dirty?
            </h2>
            <p className="text-[#737373] max-w-xl mx-auto mb-8">
              Book a bay in under 2 minutes. Choose your duration, pick a time, sign the waiver, and you're in.
            </p>
            <Link to="/book">
              <button className="bg-pitbox-amber text-pitbox-black font-bold text-base px-8 py-4 rounded-xl hover:bg-pitbox-amber-light transition-colors">
                Book Your Bay Now
              </button>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
