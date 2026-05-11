import { Link } from '@tanstack/react-router'
import { FACILITY_ADDRESS, FACILITY_EMAIL, FACILITY_PHONE, FACILITY_HOURS, FOOTER_LINKS } from '../../lib/constants'
import logoImg from '../../assets/images/logo.png'

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1a1a1a] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="PitBox" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-[#525252] leading-relaxed max-w-xs">
              Premium self-service garage bays for the serious automotive enthusiast. Your car, your way.
            </p>
            <div className="flex flex-col gap-2 text-xs text-[#525252]">
              <span>
                <span className="text-[#a3a3a3]">Hours:</span> {FACILITY_HOURS.open} – {FACILITY_HOURS.close} daily
              </span>
              <a href={`mailto:${FACILITY_EMAIL}`} className="text-[#a3a3a3] hover:text-[#C9A84C] transition-colors">
                {FACILITY_EMAIL}
              </a>
              <a href={`tel:${FACILITY_PHONE}`} className="text-[#a3a3a3] hover:text-[#C9A84C] transition-colors">
                {FACILITY_PHONE}
              </a>
              <span className="text-[#525252]">{FACILITY_ADDRESS}</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                {section}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#525252] hover:text-[#f5f5f5] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Book CTA column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Ready to Work?
            </h3>
            <p className="text-sm text-[#525252]">
              Book a bay online in under 2 minutes.
            </p>
            <Link to="/book">
              <button className="w-full bg-[#C9A84C] text-[#0a0a0a] font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[#D4B866] transition-colors">
                Reserve Your Bay
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#525252]">
            © {new Date().getFullYear()} PitBox Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#525252] hover:text-[#525252] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-[#525252] hover:text-[#525252] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
