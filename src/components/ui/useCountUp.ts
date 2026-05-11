import { useEffect, useRef, useState } from 'react'

export function useCountUp(to: number, active: boolean, duration = 700) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(eased * to))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
  }, [active, to, duration])

  return count
}
