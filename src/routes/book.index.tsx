import { createFileRoute } from '@tanstack/react-router'
import { BookingSteps } from '../components/booking/BookingSteps'
import { ManualStep } from '../components/booking/ManualStep'

export const Route = createFileRoute('/book/')({
  component: BookPage,
})

function BookPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <BookingSteps current={1} />
        </div>

        <div className="mb-8">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">Step 1 of 3</p>
          <h1 className="font-display font-black uppercase text-[#f5f5f5]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.05 }}>Equipment Manual</h1>
          <p className="mt-2 text-[#737373] text-sm max-w-xl">
            Please read through the following sections before your session. You must acknowledge completion before continuing.
          </p>
        </div>

        <ManualStep />

      </div>
    </div>
  )
}
