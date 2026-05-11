import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[#f5f5f5]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-2.5 rounded-lg
            bg-[#1a1a1a] border text-[#f5f5f5]
            placeholder:text-[#525252]
            focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C]/60
            transition-colors duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500/60' : 'border-[#333]'}
            ${className}
          `.trim()}
          {...props}
        />
        {hint && !error && <p className="text-xs text-[#525252]">{hint}</p>}
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'
