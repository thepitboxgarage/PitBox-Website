import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/home/Hero'
import { StatsStrip } from '../components/home/StatsStrip'
import { FeatureGrid } from '../components/home/FeatureGrid'
import { BayPreview } from '../components/home/BayPreview'
import { AlldataSection } from '../components/home/AlldataSection'
import { PricingSection } from '../components/home/PricingSection'
import { CTABanner } from '../components/home/CTABanner'
import { LocationSection } from '../components/home/LocationSection'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <FeatureGrid />
      <BayPreview />
      <AlldataSection />
      <PricingSection />
      <CTABanner />
      <LocationSection />
    </>
  )
}
