import { Link } from '@tanstack/react-router'
import { FACILITY_ADDRESS, FACILITY_HOURS, FACILITY_PHONE } from '../../lib/constants'
import { Reveal } from '../ui/Reveal'

const MAP_SRC = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=Unit+1+5438+176+St+Surrey+BC+V3C+4S3&zoom=15`

export function LocationSection() {
  return (
    <section className="py-24 bg-pitbox-black border-t border-pitbox-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <Reveal className="flex flex-col gap-8 lg:w-[38%] shrink-0">
            <div>
              <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">Find Us</p>
              <h2
                className="font-display font-black uppercase text-pitbox-text"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
              >
                Come see the shop
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-sm text-pitbox-muted">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-pitbox-amber mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(FACILITY_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pitbox-amber transition-colors leading-relaxed"
                >
                  {FACILITY_ADDRESS}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-pitbox-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{FACILITY_HOURS.open} – {FACILITY_HOURS.close}, daily</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-pitbox-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={`tel:${FACILITY_PHONE}`} className="hover:text-pitbox-amber transition-colors">
                  {FACILITY_PHONE}
                </a>
              </div>
            </div>

            <div className="border-t border-pitbox-border pt-6 flex flex-col gap-2">
              <Link to="/book" className="text-base text-pitbox-muted hover:text-pitbox-text transition-colors">
                Book a Bay
              </Link>
              <Link to="/contact" search={{ service: '' }} className="text-base text-pitbox-muted hover:text-pitbox-text transition-colors">
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex-1 w-full rounded-xl overflow-hidden border border-pitbox-border" style={{ height: 420 }}>
            <iframe
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

        </div>
      </div>
    </section>
  )
}
