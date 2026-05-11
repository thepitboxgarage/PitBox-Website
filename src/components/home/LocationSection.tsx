import { FACILITY_ADDRESS, FACILITY_HOURS, FACILITY_PHONE } from '../../lib/constants'
import { MapEmbed } from './MapEmbed'

export function LocationSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">Find Us</p>
          <h2
            className="font-display font-black uppercase text-[#f5f5f5]"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
          >
            Come see the shop
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Info block */}
          <div className="flex flex-col justify-center gap-8 h-full">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#C9A84C]/10 text-[#C9A84C] rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#525252] uppercase tracking-widest mb-1">Address</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(FACILITY_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#a3a3a3] hover:text-[#C9A84C] transition-colors"
                >
                  {FACILITY_ADDRESS}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#C9A84C]/10 text-[#C9A84C] rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#525252] uppercase tracking-widest mb-1">Hours</p>
                <p className="text-sm text-[#a3a3a3]">{FACILITY_HOURS.open} – {FACILITY_HOURS.close}, daily</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#C9A84C]/10 text-[#C9A84C] rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#525252] uppercase tracking-widest mb-1">Phone</p>
                <a href={`tel:${FACILITY_PHONE}`} className="text-sm text-[#a3a3a3] hover:text-[#C9A84C] transition-colors">
                  {FACILITY_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}

          <div className="rounded-xl overflow-hidden border border-[#262626]" style={{ height: 420 }}>
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}
