import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const MANUAL_SECTIONS = [
  {
    heading: 'Lift Operation',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    heading: 'Air Tools & Compressor',
    body: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    heading: 'Fluid Disposal & Bay Cleanup',
    body: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.`,
  },
]

export function ManualStep() {
  const [acknowledged, setAcknowledged] = useState(false)

  return (
    <>
      <div className="bg-[#141414] border border-[#262626] rounded-xl divide-y divide-[#262626] mb-8">
        {MANUAL_SECTIONS.map((section) => (
          <div key={section.heading} className="p-6">
            <h3 className="text-sm font-semibold text-[#f5f5f5] mb-3">{section.heading}</h3>
            <p className="text-sm text-[#737373] leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-[#1a1a1a] pt-8 flex flex-col gap-6">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${
              acknowledged
                ? 'bg-[#C9A84C] border-[#C9A84C]'
                : 'bg-transparent border-[#525252] group-hover:border-[#737373]'
            }`}>
              {acknowledged && (
                <svg className="w-3 h-3 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-[#a3a3a3] leading-snug">
            I have read and understood the equipment manual above and agree to follow all safety guidelines during my session.
          </span>
        </label>

        <div className="flex justify-end">
          <Link to="/book/waiver">
            <button
              disabled={!acknowledged}
              className="whitespace-nowrap bg-[#C9A84C] text-[#0a0a0a] font-bold px-8 py-3 rounded-xl transition-colors flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4B866] disabled:hover:bg-[#C9A84C]"
            >
              Continue to Waiver
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
