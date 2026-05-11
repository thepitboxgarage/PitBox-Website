import safetyImg from '../../assets/images/saftey-image.jpg'
import { Reveal } from '../ui/Reveal'

const SAFETY_ITEMS = [
  {
    title: "Safety Briefing",
    body: "Every renter receives a mandatory 5-minute safety walkthrough on their first visit — or any time they request one.",
  },
  {
    title: "On-Site Staff",
    body: "Trained staff are present during all operating hours. We're here to help, not hover.",
  },
  {
    title: "First Aid Certified",
    body: "All PitBox team members hold valid standard first aid certification.",
  },
  {
    title: "Fire Safety",
    body: "Dry chemical extinguishers and fire suppression systems are installed in every bay. Emergency exits are clearly marked.",
  },
  {
    title: "Eyewash Stations",
    body: "Emergency eyewash stations are located at both ends of the facility.",
  },
  {
    title: "PPE Available",
    body: "Safety glasses, nitrile gloves, and hearing protection are available at the front desk at no charge.",
  },
]

export function AboutSafety() {
  return (
    <section id="safety" className="py-20 border-b border-pitbox-surface-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">
            Safety
          </p>
          <h2
            className="font-display font-black uppercase text-pitbox-text mb-6"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
          >
            Safety is non-negotiable
          </h2>
        </Reveal>
        <Reveal delay={80} className="rounded-xl overflow-hidden border border-pitbox-border mb-8">
          <img
            src={safetyImg}
            alt="PitBox safety environment"
            className="w-full h-56 object-cover"
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SAFETY_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 75}>
              <div className="p-5 bg-pitbox-surface border border-pitbox-border rounded-xl h-full">
                <h3 className="font-semibold text-pitbox-text mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-pitbox-subtle leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
