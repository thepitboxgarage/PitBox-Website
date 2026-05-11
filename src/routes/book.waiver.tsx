import { createFileRoute, Link } from '@tanstack/react-router'
import { WaiverEmbed } from '../components/booking/WaiverEmbed'

export const Route = createFileRoute('/book/waiver')({
  component: WaiverPage,
})

function WaiverPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-2">Step 2 of 3</p>
        <h1 className="font-display font-black uppercase text-pitbox-text" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.05 }}>
          Sign the Waiver
        </h1>
        <p className="mt-2 text-[#737373] text-sm max-w-xl">
          Read and complete the waiver below. You'll be taken to scheduling automatically once submitted.
        </p>
      </div>

      <WaiverEmbed />

      <div className="border-t border-pitbox-surface-2 pt-8 mt-8 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-pitbox-subtle">Already signed? Continue manually.</p>
        <Link to="/book/schedule">
          <button className="whitespace-nowrap bg-pitbox-amber text-pitbox-black font-bold px-8 py-3 rounded-xl hover:bg-pitbox-amber-light transition-colors flex items-center gap-2">
            Continue to Scheduling
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>
    </>
  )
}
