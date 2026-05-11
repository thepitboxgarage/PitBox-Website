import { createFileRoute } from '@tanstack/react-router'
import { AboutStory } from '../components/about/AboutStory'
import { AboutManualSystem } from '../components/about/AboutManualSystem'
import { AboutSafety } from '../components/about/AboutSafety'
import { AboutFAQ } from '../components/about/AboutFAQ'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="pt-24">
      <section className="py-16 border-b border-pitbox-surface-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Our Story
          </p>
          <h1
            className="font-display font-black uppercase text-pitbox-text mb-6 text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            A garage built for
            <br />
            <span className="text-pitbox-amber">people who care.</span>
          </h1>
          <p className="text-lg text-pitbox-muted leading-relaxed max-w-2xl text-center mx-auto">
            PitBox was born from a simple frustration: enthusiasts with the skill
            and passion to work on their own vehicles, but no access to the
            professional space and tools to do it right.
          </p>
        </div>
      </section>
      <AboutStory />
      <AboutManualSystem />
      <AboutSafety />
      <AboutFAQ />
    </div>
  )
}
