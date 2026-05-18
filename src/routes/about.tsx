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
            Built by Enthusiasts.<br />
            <span className="text-pitbox-amber">Built for the Community.</span>
          </h1>
          <div className="text-lg text-pitbox-muted leading-relaxed max-w-2xl text-center mx-auto space-y-4">
            <p>
              The Pit Box was created for the people who live and breathe car culture — enthusiasts, racers,
              certified technicians, and builders who need more than a driveway to bring their projects to life.
            </p>
            <p>
              What started as frustration with limited workspace, rising restrictions, and lack of access to
              professional equipment became a vision for something bigger: a premium automotive workspace designed
              around the community. A place to build, learn, connect, and keep the passion for cars alive.
            </p>
          </div>
        </div>
      </section>
      <AboutStory />
      <AboutManualSystem />
      <AboutSafety />
      <AboutFAQ />
    </div>
  )
}
