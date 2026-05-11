import { createFileRoute } from '@tanstack/react-router'
import { ServicesHero } from '../components/services/ServicesHero'
import { ServicesList } from '../components/services/ServicesList'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesHero />
      <ServicesList />
    </div>
  )
}
