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
        state === 'complete' ? 'bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/40' :
        state === 'active'   ? 'bg-[#C9A84C] text-[#0a0a0a]' :
                               'bg-[#1a1a1a] text-[#525252] border border-[#262626]'
      }`}>
        {state === 'complete' ? (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : number}
      </div>
      <span className={`text-sm font-medium hidden sm:block ${
        state === 'active' ? 'text-[#f5f5f5]' :
        state === 'complete' ? 'text-[#C9A84C]' :
        'text-[#525252]'
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
        label="Read Manual"
        state={current > 1 ? 'complete' : 'active'}
        to="/book"
      />
      <div className={`flex-1 h-px transition-colors ${current > 1 ? 'bg-[#C9A84C]/40' : 'bg-[#1f1f1f]'}`} />
      <Step
        number={2}
        label="Sign Waiver"
        state={current > 2 ? 'complete' : current === 2 ? 'active' : 'upcoming'}
        to="/book/waiver"
      />
      <div className={`flex-1 h-px transition-colors ${current > 2 ? 'bg-[#C9A84C]/40' : 'bg-[#1f1f1f]'}`} />
      <Step
        number={3}
        label="Schedule Your Bay"
        state={current === 3 ? 'active' : 'upcoming'}
      />
    </div>
  )
}
