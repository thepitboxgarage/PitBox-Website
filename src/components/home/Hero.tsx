import { Link } from '@tanstack/react-router'
import { Button } from '../ui/Button'
import { FACILITY_HOURS } from '../../lib/constants'
import shopBaysImg from '../../assets/images/shop-bays.jpg'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <img
        src={shopBaysImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — heavy on the left for legibility, opens up on the right to show image */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.85) 45%, rgba(10,10,10,0.50) 100%)',
        }}
      />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{ backgroundImage: GRAIN_SVG, backgroundRepeat: 'repeat', backgroundSize: '200px 200px' }}
      />

      {/* Left gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pitbox-amber/50 to-transparent" />

      {/* Content — left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pitbox-amber/10 border border-pitbox-amber/25 rounded-full text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 bg-pitbox-amber rounded-full animate-pulse" />
            Vancouver's Premium Garage Bay Experience
          </div>

          {/* Headline — Barlow Condensed display font */}
          <h1
            className="font-display font-black uppercase leading-[0.88] tracking-tight text-pitbox-text mb-5"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Your Bay.<br />
            <span className="text-pitbox-amber">Your Rules.</span>
          </h1>

          {/* Gold rule */}
          <div className="w-20 h-0.5 bg-pitbox-amber mb-7" />

          {/* Sub */}
          <p className="text-lg text-[#d4d4d4] leading-relaxed mb-10 max-w-lg">
            Rent a fully equipped, professional-grade garage bay by the hour, half-day, or full day.
            Premium tools. Interactive repair guides. No compromises.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link to="/book">
              <Button size="lg">
                Book a Bay
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link to="/bays">
              <Button variant="secondary" size="lg">Explore the Bays</Button>
            </Link>
          </div>

          {/* Hours strip */}
          <p className="mt-10 text-sm text-[#737373]">
            Open daily {FACILITY_HOURS.open} – {FACILITY_HOURS.close}
            <span className="mx-3 text-[#383838]">·</span>
            6 bays available
            <span className="mx-3 text-[#383838]">·</span>
            Vancouver, BC
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pitbox-muted animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
