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
      <ScheduleEmbed />
    </>
  )
}
