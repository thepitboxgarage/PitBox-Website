import { createFileRoute, Link } from '@tanstack/react-router'
import { BookingSteps } from '../components/booking/BookingSteps'
import { WaiverEmbed } from '../components/booking/WaiverEmbed'

export const Route = createFileRoute('/book/waiver')({
  component: WaiverPage,
})

function WaiverPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <BookingSteps current={2} />
        </div>

        <div className="mb-8">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">Step 2 of 3</p>
          <h1 className="font-display font-black uppercase text-[#f5f5f5]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.05 }}>Sign the Waiver</h1>
          <p className="mt-2 text-[#737373] text-sm max-w-xl">
            Read and complete the waiver below. You'll be taken to scheduling automatically once submitted.
          </p>
        </div>

        <WaiverEmbed />

        <div className="border-t border-[#1a1a1a] pt-8 mt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[#525252]">Already signed? Continue manually.</p>
          <Link to="/book/schedule">
            <button className="whitespace-nowrap bg-[#C9A84C] text-[#0a0a0a] font-bold px-8 py-3 rounded-xl hover:bg-[#D4B866] transition-colors flex items-center gap-2">
              Continue to Scheduling
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}
