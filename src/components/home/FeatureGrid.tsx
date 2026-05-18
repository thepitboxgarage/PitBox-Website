import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Reveal } from '../ui/Reveal'

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Professional Tool Suite',
    description:
      'Every bay comes stocked with 1000+ professional-grade tools. Access to impact and electric tools, diagnostic scanners, and 50+ specialty tools.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: 'ALLDATA Repair Manuals',
    description:
      'Each bay features a flatscreen running ALLDATA — the same OEM repair database used by professional shops. Step-by-step procedures, torque specs, and wiring diagrams for 10,000+ vehicles.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
      </svg>
    ),
    title: 'Flexible Booking',
    description:
      'Book by the hour, half-day, or full day. Choose any of 6 available bays and secure your slot in under 2 minutes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Safe & Supervised',
    description:
      'Climate-controlled environment, full safety briefing on arrival, on-site staff during all operating hours.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Premium Facility',
    description:
      'High-bay LED lighting, epoxy-coated floors, professional-grade equipment, and a comfortable lounge space built for enthusiasts, certified technicians, racers, and builders who demand a professional environment to work on their vehicles.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'A Community of Enthusiasts',
    description:
      'The Pit Box is more than a shop — it\'s a hub for the automotive community. Share knowledge, connect with like-minded enthusiasts, racers, technicians, and builders, and be part of a culture built around a passion for cars.',
  },
]

function FeatureCard({ feat }: { feat: typeof FEATURES[number] }) {
  return (
    <div className="group p-6 bg-gradient-to-b from-pitbox-surface-2 to-pitbox-surface border border-[#2a2a2a] rounded-xl hover:border-pitbox-amber/40 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.08)] transition-all duration-200 h-full">
      <div className="w-11 h-11 bg-pitbox-amber/10 text-pitbox-amber rounded-lg flex items-center justify-center mb-4 group-hover:bg-pitbox-amber/20 transition-colors">
        {feat.icon}
      </div>
      <h3 className="text-base font-semibold text-pitbox-text mb-2">{feat.title}</h3>
      <p className="text-sm text-[#737373] leading-relaxed">{feat.description}</p>
    </div>
  )
}

function FeatureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) setCurrent(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="min-w-0 flex-[0_0_100%] px-1">
              <FeatureCard feat={feat} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {FEATURES.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${i === current ? 'w-6 bg-pitbox-amber' : 'w-1.5 bg-[#2a2a2a]'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function FeatureGrid() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">
            Why PitBox
          </p>
          <h2 className="font-display font-black uppercase text-pitbox-text" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}>
            Built for the serious enthusiast
          </h2>
          <p className="mt-4 text-[#737373] max-w-xl mx-auto">
            Everything you need to work on your vehicle the right way — without the overhead of owning your own shop.
          </p>
        </Reveal>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <FeatureCarousel />
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 75}>
              <FeatureCard feat={feat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
