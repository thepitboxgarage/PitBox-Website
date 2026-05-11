import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  onVisible?: () => void
}

export function Reveal({ children, delay = 0, className, style, onVisible }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const onVisibleRef = useRef(onVisible)
  onVisibleRef.current = onVisible

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          onVisibleRef.current?.()
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.4s ease-out ${delay}ms, transform 0.4s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
