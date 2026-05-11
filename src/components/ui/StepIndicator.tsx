interface Step {
  number: number
  label: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Desktop: horizontal step row */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, i) => {
          const done = currentStep > step.number
          const active = currentStep === step.number
          const isLast = i === steps.length - 1
          return (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1.5 min-w-0">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0
                    transition-all duration-300
                    ${done ? 'bg-[#C9A84C] text-[#0a0a0a]' : ''}
                    ${active ? 'bg-[#C9A84C] text-[#0a0a0a] ring-2 ring-[#C9A84C]/40 ring-offset-2 ring-offset-[#0a0a0a]' : ''}
                    ${!done && !active ? 'bg-[#1a1a1a] text-[#525252] border border-[#333]' : ''}
                  `.trim()}
                >
                  {done ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={`text-xs font-medium whitespace-nowrap ${active ? 'text-[#C9A84C]' : done ? 'text-[#a3a3a3]' : 'text-[#525252]'}`}
                >
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <div
                  className={`h-px flex-1 mx-3 mb-5 transition-all duration-500 ${done ? 'bg-[#C9A84C]/60' : 'bg-[#262626]'}`}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: compact indicator */}
      <div className="md:hidden flex items-center justify-between">
        <div className="text-sm text-[#a3a3a3]">
          Step <span className="text-[#C9A84C] font-semibold">{currentStep}</span> of{' '}
          <span className="font-semibold">{steps.length}</span>
        </div>
        <div className="text-sm font-medium text-[#f5f5f5]">
          {steps.find((s) => s.number === currentStep)?.label}
        </div>
      </div>
      <div className="md:hidden mt-2 h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#C9A84C] rounded-full transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
