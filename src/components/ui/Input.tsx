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
          <label htmlFor={inputId} className="text-sm font-medium text-pitbox-text">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-2.5 rounded-lg
            bg-pitbox-surface-2 border text-pitbox-text
            placeholder:text-pitbox-subtle
            focus:outline-none focus:ring-2 focus:ring-pitbox-amber/50 focus:border-pitbox-amber/60
            transition-colors duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500/60' : 'border-pitbox-border-2'}
            ${className}
          `.trim()}
          {...props}
        />
        {hint && !error && <p className="text-xs text-pitbox-subtle">{hint}</p>}
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'
