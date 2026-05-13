import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import logoImg from '../../assets/images/logo.png'

const NAV_LINKS = [
  { to: "/bays", label: "The Bays" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

function scrollToTopIfCurrent(e: React.MouseEvent, to: string, pathname: string) {
  if (pathname === to || (to === '/' && pathname === '/')) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const solid = scrolled || mobileOpen

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300
        border-b
        ${solid ? 'bg-pitbox-black/95 backdrop-blur-md border-pitbox-surface-2' : 'bg-transparent border-transparent'}
      `.trim()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={(e) => scrollToTopIfCurrent(e, '/', pathname)}>
            <img src={logoImg} alt="The Pit Box" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-pitbox-amber ${
                  pathname === link.to ? 'text-pitbox-amber' : 'text-[#d4d4d4]'
                }`}
                onClick={(e) => scrollToTopIfCurrent(e, link.to, pathname)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/book">
              <Button size="sm">Book a Bay</Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#d4d4d4] hover:text-pitbox-text transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative flex items-center justify-center">
              <span className={`absolute block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
              <span className={`absolute block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`absolute block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — always in DOM, height animated */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-5 pt-2 flex flex-col gap-1 border-t border-pitbox-surface-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.to
                  ? 'text-pitbox-amber bg-pitbox-amber/10'
                  : 'text-[#d4d4d4] hover:text-pitbox-text hover:bg-pitbox-surface-2'
              }`}
              onClick={(e) => scrollToTopIfCurrent(e, link.to, pathname)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 mt-1 border-t border-pitbox-surface-2">
            <Link to="/book" className="block">
              <Button className="w-full" size="sm">Book a Bay</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
