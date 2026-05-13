import { Link } from '@tanstack/react-router'

interface StepProps {
  number: number
  label: string
  state: 'complete' | 'active' | 'upcoming'
  to?: string
}

function Step({ number, label, state, to }: StepProps) {
  const badge = (
    <div className="flex items-center gap-2.5 shrink-0">
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
        state === 'complete' ? 'bg-pitbox-amber/20 text-pitbox-amber border border-pitbox-amber/40' :
        state === 'active'   ? 'bg-pitbox-amber text-pitbox-black' :
                               'bg-pitbox-surface-2 text-pitbox-subtle border border-pitbox-border'
      }`}>
        {state === 'complete' ? (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : number}
      </div>
      <span className={`text-sm font-medium hidden sm:block ${
        state === 'active' ? 'text-pitbox-text' :
        state === 'complete' ? 'text-pitbox-amber' :
        'text-pitbox-subtle'
      }`}>{label}</span>
    </div>
  )

  if (state === 'complete' && to) {
    return <Link to={to}>{badge}</Link>
  }
  return badge
}

interface BookingStepsProps {
  current: 1 | 2 | 3
}

export function BookingSteps({ current }: BookingStepsProps) {
  return (
    <div className="flex items-center gap-4">
      <Step
        number={1}
        label="Schedule"
        state={current > 1 ? 'complete' : 'active'}
        to="/book"
      />
      <div className={`flex-1 h-px transition-colors ${current > 1 ? 'bg-pitbox-amber/40' : 'bg-[#1f1f1f]'}`} />
      <Step
        number={2}
        label="Read Manual"
        state={current > 2 ? 'complete' : current === 2 ? 'active' : 'upcoming'}
        to="/book/manual"
      />
      <div className={`flex-1 h-px transition-colors ${current > 2 ? 'bg-pitbox-amber/40' : 'bg-[#1f1f1f]'}`} />
      <Step
        number={3}
        label="Sign Waiver"
        state={current === 3 ? 'active' : 'upcoming'}
      />
    </div>
  )
}
