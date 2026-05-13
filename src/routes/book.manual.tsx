import { createFileRoute } from '@tanstack/react-router'
import { ManualStep } from '../components/booking/ManualStep'

export const Route = createFileRoute('/book/manual')({
  component: ManualPage,
})

function ManualPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-2">Step 2 of 3</p>
        <h1 className="font-display font-black uppercase text-pitbox-text" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.05 }}>
          Equipment Manual
        </h1>
        <p className="mt-2 text-[#737373] text-sm max-w-xl">
          Please read through the following sections before your session. You must acknowledge completion before continuing.
        </p>
      </div>
      <ManualStep />
    </>
  )
}
