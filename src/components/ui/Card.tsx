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
        bg-pitbox-surface border rounded-xl
        ${amber ? 'border-pitbox-amber/40' : 'border-pitbox-border'}
        ${hover ? 'transition-all duration-200 hover:border-pitbox-amber/60 hover:bg-pitbox-surface-2' : ''}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-6 pt-6 pb-4 border-b border-pitbox-border ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-6 py-5 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-6 pb-6 pt-4 border-t border-pitbox-border ${className}`}>
      {children}
    </div>
  )
}
