import { createFileRoute } from '@tanstack/react-router'
import { AboutHero } from '../components/about/AboutHero'
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
      <AboutHero />
      <AboutStory />
      <AboutManualSystem />
      <AboutSafety />
      <AboutFAQ />
    </div>
  )
}
