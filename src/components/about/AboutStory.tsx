import { STORY_STATS } from '../../lib/constants'
import logoImg from '../../assets/images/logo.png'

export function AboutStory() {
  return (
    <section className="py-20 border-b border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-display font-black uppercase text-[#f5f5f5] mb-4"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
            >
              Why PitBox exists
            </h2>
            <div className="space-y-4 text-[#a3a3a3] leading-relaxed text-sm">
              <p>
                Vancouver's automotive enthusiast community is one of the most
                passionate in North America. But the reality is most people live
                in condos, townhouses, or rentals — without a garage, without
                space, without tools.
              </p>
              <p>
                The alternative — expensive dealership labour for work you're
                more than capable of doing yourself — was never acceptable to us
                either.
              </p>
              <p>
                So we built PitBox. A premium, purpose-built garage with 6 fully
                equipped bays you can rent on your own terms. Bring your car.
                Bring your knowledge. We provide everything else.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative flex items-center justify-center h-44">
              <div className="absolute inset-0 bg-[#C9A84C]/5 rounded-full blur-3xl" />
              <img
                src={logoImg}
                alt="PitBox"
                className="relative h-32 w-auto object-contain"
              />
            </div>
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <div className="grid grid-cols-2 gap-6">
                {STORY_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black text-[#C9A84C]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#525252] mt-1 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
