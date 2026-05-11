import { SAFETY_ITEMS } from '../../lib/constants'
import safetyImg from '../../assets/images/saftey-image.jpg'

export function AboutSafety() {
  return (
    <section id="safety" className="py-20 border-b border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">
          Safety
        </p>
        <h2
          className="font-display font-black uppercase text-[#f5f5f5] mb-6"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
        >
          Safety is non-negotiable
        </h2>
        <div className="rounded-xl overflow-hidden border border-[#262626] mb-8">
          <img
            src={safetyImg}
            alt="PitBox safety environment"
            className="w-full h-56 object-cover"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SAFETY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-5 bg-[#141414] border border-[#262626] rounded-xl"
            >
              <h3 className="font-semibold text-[#f5f5f5] mb-2 text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-[#525252] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
