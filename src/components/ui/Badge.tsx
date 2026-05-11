import React from 'react'

type BadgeVariant = 'amber' | 'green' | 'red' | 'neutral' | 'outline'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  amber: 'bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/30',
  green: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  red: 'bg-red-500/15 text-red-400 border border-red-500/30',
  neutral: 'bg-[#262626] text-[#a3a3a3] border border-[#333]',
  outline: 'bg-transparent text-[#f5f5f5] border border-[#333]',
}

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
