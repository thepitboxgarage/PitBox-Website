import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/booking-complete')({
  component: BookingCompletePage,
})

function BookingCompletePage() {
  useEffect(() => {
    if (window.top && window.top !== window) {
      window.top.location.href = '/booking-complete'
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes pb-ring {
          0%   { transform: scale(0.75); opacity: 0; }
          65%  { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        @keyframes pb-check {
          from { stroke-dashoffset: 72; }
          to   { stroke-dashoffset: 0;  }
        }
        @keyframes pb-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes pb-glow-pulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.6;  }
        }
        .pb-ring  { animation: pb-ring 0.55s cubic-bezier(0.34,1.56,0.64,1) both; }
        .pb-check { stroke-dasharray: 72; stroke-dashoffset: 72; animation: pb-check 0.38s ease-out 0.45s both; }
        .pb-d1    { animation: pb-fade-up 0.45s ease both; animation-delay: 0.2s;  opacity: 0; }
        .pb-d2    { animation: pb-fade-up 0.45s ease both; animation-delay: 0.32s; opacity: 0; }
        .pb-d3    { animation: pb-fade-up 0.45s ease both; animation-delay: 0.42s; opacity: 0; }
        .pb-d4    { animation: pb-fade-up 0.45s ease both; animation-delay: 0.52s; opacity: 0; }
        .pb-d5    { animation: pb-fade-up 0.45s ease both; animation-delay: 0.62s; opacity: 0; }
        .pb-glow  { animation: pb-glow-pulse 3s ease-in-out 1s infinite; }
      `}</style>

      <div className="pt-24 pb-20 min-h-screen">
        <div className="max-w-xl mx-auto px-4 sm:px-6">

          {/* ── Icon ── */}
          <div className="flex justify-center mb-10">
            <div className="relative pb-ring">
              {/* ambient glow */}
              <div className="pb-glow absolute inset-0 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, #C9A84C55 0%, transparent 70%)' }} />
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" className="relative">
                {/* outer decorative ring */}
                <circle cx="48" cy="48" r="46" stroke="#C9A84C" strokeWidth="0.75" strokeOpacity="0.18" />
                {/* filled circle */}
                <circle cx="48" cy="48" r="38" fill="#C9A84C" fillOpacity="0.08" stroke="#C9A84C" strokeWidth="1.5" strokeOpacity="0.35" />
                {/* checkmark */}
                <path
                  className="pb-check"
                  d="M30 48 L43 61 L66 35"
                  stroke="#C9A84C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* ── Heading ── */}
          <div className="pb-d1 text-center mb-3">
            <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">Booking Confirmed</p>
            <h1
              className="font-display font-black uppercase text-pitbox-text"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 3.75rem)', lineHeight: 1.0, letterSpacing: '-0.01em' }}
            >
              You're All Set
            </h1>
          </div>

          <p className="pb-d2 text-center text-pitbox-muted text-sm leading-relaxed max-w-sm mx-auto mb-10">
            Your session is booked and your waiver has been received. A confirmation email is on its way to you.
          </p>

          {/* ── What to expect ── */}
          <div className="pb-d3 mb-6">
            <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-4">What to Expect</p>
            <div className="bg-pitbox-surface border border-pitbox-border rounded-2xl overflow-hidden divide-y divide-pitbox-border">

              <div className="flex items-start gap-4 p-5">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-pitbox-surface-2 border border-pitbox-border flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-pitbox-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-pitbox-text text-sm font-semibold mb-0.5">Bring your confirmation email</p>
                  <p className="text-pitbox-muted text-sm leading-snug">Have it ready on your phone when you arrive — we'll use it to check you in.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-pitbox-surface-2 border border-pitbox-border flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-pitbox-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-pitbox-text text-sm font-semibold mb-0.5">Payment collected on-site</p>
                  <p className="text-pitbox-muted text-sm leading-snug">We accept credit card, debit, and cash. No payment is due until you arrive.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-pitbox-surface-2 border border-pitbox-border flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-pitbox-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-pitbox-text text-sm font-semibold mb-0.5">Arrive 10 minutes early</p>
                  <p className="text-pitbox-muted text-sm leading-snug">Gives us time for a quick bay orientation so your full session is yours to use.</p>
                </div>
              </div>

            </div>
          </div>

          {/* ── Facility info ── */}
          <div className="pb-d4 mb-10">
            <div className="bg-pitbox-surface border border-pitbox-border rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-pitbox-surface-2 border border-pitbox-border flex items-center justify-center">
                  <svg className="w-4 h-4 text-pitbox-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-pitbox-text text-sm font-medium">Unit 1 – 5438 176 Street</p>
                  <p className="text-pitbox-muted text-xs">Surrey, BC</p>
                </div>
              </div>
              <div className="h-px sm:h-8 sm:w-px bg-pitbox-border shrink-0" />
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-pitbox-surface-2 border border-pitbox-border flex items-center justify-center">
                  <svg className="w-4 h-4 text-pitbox-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-pitbox-text text-sm font-medium">Open Daily</p>
                  <p className="text-pitbox-muted text-xs">9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTAs ── */}
          <div className="pb-d5 flex flex-col sm:flex-row gap-3">
            <Link to="/" className="flex-1">
              <button className="w-full border border-pitbox-border text-pitbox-muted font-semibold px-6 py-3 rounded-xl hover:border-pitbox-border-2 hover:text-pitbox-text transition-colors text-sm">
                Back to Home
              </button>
            </Link>
            <Link to="/bays" className="flex-1">
              <button className="w-full border border-pitbox-amber/40 text-pitbox-amber font-semibold px-6 py-3 rounded-xl hover:border-pitbox-amber hover:bg-pitbox-amber/5 transition-colors text-sm">
                View Our Bays
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
