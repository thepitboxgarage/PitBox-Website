import { createFileRoute } from '@tanstack/react-router'
import { BookingSteps } from '../components/booking/BookingSteps'
import { ScheduleEmbed } from '../components/booking/ScheduleEmbed'

export const Route = createFileRoute('/book/schedule')({
  component: SchedulePage,
})

function SchedulePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <BookingSteps current={3} />
        </div>

        <div className="mb-8">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">Step 3 of 3</p>
          <h1 className="font-display font-black uppercase text-[#f5f5f5]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.05 }}>Schedule Your Bay</h1>
          <p className="mt-2 text-[#737373] text-sm max-w-xl">
            Pick your date, time, and duration below. A bay will be assigned automatically based on availability. Payment is collected onsite.
          </p>
        </div>

        <ScheduleEmbed />

      </div>
    </div>
  )
}
