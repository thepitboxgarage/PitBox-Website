import { Link } from '@tanstack/react-router'
import { FACILITY_ADDRESS, FACILITY_EMAIL, FACILITY_PHONE, FACILITY_HOURS } from '../../lib/constants'
import logoImg from '../../assets/images/logo.png'

const FOOTER_LINKS: Record<string, { to: string; label: string }[]> = {
  Facility: [
    { to: "/bays", label: "The Bays" },
    { to: "/about", label: "About PitBox" },
    { to: "/book", label: "Book a Bay" },
    { to: "/contact", label: "Contact Us" },
  ],
  Information: [
    { to: "/about#faq", label: "FAQ" },
    { to: "/about#safety", label: "Safety Guidelines" },
    { to: "/about#tools", label: "Tool Inventory" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-pitbox-surface-2 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="PitBox" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-pitbox-subtle leading-relaxed max-w-xs">
              Premium self-service garage bays for the serious automotive enthusiast. Your car, your way.
            </p>
            <div className="flex flex-col gap-2 text-xs text-pitbox-subtle">
              <span>
                <span className="text-pitbox-muted">Hours:</span> {FACILITY_HOURS.open} – {FACILITY_HOURS.close} daily
              </span>
              <a href={`mailto:${FACILITY_EMAIL}`} className="text-pitbox-muted hover:text-pitbox-amber transition-colors">
                {FACILITY_EMAIL}
              </a>
              <a href={`tel:${FACILITY_PHONE}`} className="text-pitbox-muted hover:text-pitbox-amber transition-colors">
                {FACILITY_PHONE}
              </a>
              <span className="text-pitbox-subtle">{FACILITY_ADDRESS}</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-pitbox-amber">
                {section}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-pitbox-subtle hover:text-pitbox-text transition-colors"
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
            <h3 className="text-xs font-semibold uppercase tracking-widest text-pitbox-amber">
              Ready to Work?
            </h3>
            <p className="text-sm text-pitbox-subtle">
              Book a bay online in under 2 minutes.
            </p>
            <Link to="/book">
              <button className="w-full bg-pitbox-amber text-pitbox-black font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-pitbox-amber-light transition-colors">
                Book a Bay
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-pitbox-surface-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-pitbox-subtle">
            © {new Date().getFullYear()} PitBox Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-pitbox-subtle hover:text-pitbox-text transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-xs text-pitbox-subtle hover:text-pitbox-text transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
