import { STATS } from '../../lib/constants'

export function StatsStrip() {
  return (
    <div className="border-y border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 flex flex-col items-center gap-1 ${i < STATS.length - 1 ? "border-r border-[#1f1f1f]" : ""}`}
            >
              <div className="flex items-baseline gap-1.5">
                <span
                  className="font-display font-black text-[#C9A84C]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-[#C9A84C]/50 uppercase tracking-widest font-semibold">
                  {stat.unit}
                </span>
              </div>
              <span className="text-xs text-[#525252] uppercase tracking-widest font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
