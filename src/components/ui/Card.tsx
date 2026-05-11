import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  amber?: boolean
}

export function Card({ children, className = '', hover = false, amber = false }: CardProps) {
  return (
    <div
      className={`
        bg-[#141414] border rounded-xl
        ${amber ? 'border-[#C9A84C]/40' : 'border-[#262626]'}
        ${hover ? 'transition-all duration-200 hover:border-[#C9A84C]/60 hover:bg-[#1a1a1a]' : ''}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-6 pt-6 pb-4 border-b border-[#262626] ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-6 py-5 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-6 pb-6 pt-4 border-t border-[#262626] ${className}`}>
      {children}
    </div>
  )
}
