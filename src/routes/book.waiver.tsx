import { createFileRoute } from '@tanstack/react-router'
import { WaiverEmbed } from '../components/booking/WaiverEmbed'

export const Route = createFileRoute('/book/waiver')({
  component: WaiverPage,
})

function WaiverPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-2">Step 3 of 3</p>
        <h1 className="font-display font-black uppercase text-pitbox-text" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.05 }}>
          Sign the Waiver
        </h1>
        <p className="mt-2 text-[#737373] text-sm max-w-xl">
          Read and complete the waiver below to finalize your booking.
        </p>
      </div>

      <WaiverEmbed />

    </>
  )
}
