import { createFileRoute } from '@tanstack/react-router'
import { ContactHero } from '../components/contact/ContactHero'
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
      <ContactHero />
      <ContactSection service={service} />
    </div>
  )
}
