import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-pitbox-amber text-pitbox-black font-semibold hover:bg-pitbox-amber-light active:bg-pitbox-amber-dark disabled:bg-pitbox-amber/40 disabled:text-pitbox-black/40',
  secondary:
    'bg-transparent border border-pitbox-amber text-pitbox-amber font-semibold hover:bg-pitbox-amber/10 active:bg-pitbox-amber/20 disabled:opacity-40',
  ghost:
    'bg-transparent text-pitbox-muted hover:text-pitbox-text hover:bg-pitbox-surface-2 disabled:opacity-40',
  danger:
    'bg-red-600 text-white font-semibold hover:bg-red-500 active:bg-red-700 disabled:opacity-40',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-5 py-2.5 text-sm rounded-lg',
  lg: 'px-7 py-3.5 text-base rounded-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        transition-colors duration-150 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitbox-amber/50
        disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim()}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </button>
  )
}
