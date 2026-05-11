import { createFileRoute } from '@tanstack/react-router'
import { ServicesList } from '../components/services/ServicesList'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="py-16 border-b border-pitbox-surface-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3 text-center">What We Offer</p>
          <h1
            className="font-display font-black uppercase text-pitbox-text text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            Our Services
          </h1>
          <p className="mt-3 text-pitbox-muted max-w-xl text-center mx-auto">
            Beyond self-serve bay rentals, PitBox offers fabrication, professional mechanical services, and secure
            vehicle storage. All inquiries are handled personally — reach out and we'll work out the details.
          </p>
        </div>
      </section>
      <ServicesList />
    </div>
  )
}
