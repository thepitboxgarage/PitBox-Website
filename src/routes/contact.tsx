import { createFileRoute } from '@tanstack/react-router'
import { ContactSection } from '../components/contact/ContactSection'

export const Route = createFileRoute('/contact')({
  validateSearch: (search: Record<string, unknown>) => ({
    service: (search.service as string) ?? '',
  }),
  component: ContactPage,
})

function ContactPage() {
  const { service } = Route.useSearch()
  return (
    <div className="pt-24">
      <section className="py-16 border-b border-pitbox-surface-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3 text-center">Get in Touch</p>
          <h1
            className="font-display font-black uppercase text-pitbox-text text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            Contact us
          </h1>
          <p className="mt-3 text-pitbox-muted max-w-xl text-center mx-auto">
            Questions about bookings, services, or the facility? We're here to help.
          </p>
        </div>
      </section>
      <ContactSection service={service} />
    </div>
  )
}
