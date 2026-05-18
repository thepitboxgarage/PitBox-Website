import { useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { useCountUp } from '../ui/useCountUp'

const STATS = [
  { num: 6, suffix: "", unit: "bays", label: "Premium Bays" },
  { num: 1000, suffix: "+", unit: "tools", label: "Tools Per Bay" },
  { num: 320, suffix: "", unit: "sq ft", label: "Per Bay" },
  { num: 6, suffix: "", unit: "days", label: "Days a Week" },
]

// All start at the same time; staggered durations so each completes one by one
const STAGGER = 250

function StatItem({ stat, delay, isLast, duration }: {
  stat: typeof STATS[0]
  delay: number
  isLast: boolean
  duration: number
}) {
  const [active, setActive] = useState(false)
  const count = useCountUp(stat.num, active, duration)

  return (
    <Reveal
      delay={delay}
      className={`py-10 flex flex-col items-center gap-1${!isLast ? " border-r border-[#1f1f1f]" : ""}`}
      onVisible={() => setTimeout(() => setActive(true), 400)}
    >
      <div className="flex items-baseline gap-1.5">
        <span
          className="font-display font-black text-pitbox-amber"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
        >
          {count}{stat.suffix}
        </span>
        <span className="text-xs text-pitbox-amber/50 uppercase tracking-widest font-semibold">
          {stat.unit}
        </span>
      </div>
      <span className="text-xs text-pitbox-subtle uppercase tracking-widest font-medium mt-0.5">
        {stat.label}
      </span>
    </Reveal>
  )
}

export function StatsStrip() {
  return (
    <div className="border-y border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              delay={i * 75}
              isLast={i === STATS.length - 1}
              duration={700 + i * STAGGER}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
