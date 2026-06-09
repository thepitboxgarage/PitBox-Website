import { createFileRoute } from '@tanstack/react-router'
import { ScheduleEmbed } from '../components/booking/ScheduleEmbed'

export const Route = createFileRoute('/book/')({
  component: BookPage,
})

function BookPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-2">Step 1 of 3</p>
        <h1 className="font-display font-black uppercase text-pitbox-text" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.05 }}>
          Schedule Your Bay
        </h1>
        <p className="mt-2 text-[#737373] text-sm max-w-xl">
          Pick your date, time, and duration below. A bay will be assigned automatically based on availability.
        </p>
      </div>

      <div className="mb-8 rounded-lg border border-yellow-600/30 bg-yellow-600/8 px-4 py-3 flex gap-2.5">
        <svg className="shrink-0 mt-0.5 w-3.5 h-3.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <p className="text-xs text-yellow-400/90 leading-relaxed">
          <span className="font-semibold text-yellow-300">$65 deposit required</span> to secure your booking — non-refundable if the appointment is missed. Cancellations must be made at least <span className="font-medium">24 hours in advance</span>.
        </p>
      </div>

      <ScheduleEmbed />
    </>
  )
}
