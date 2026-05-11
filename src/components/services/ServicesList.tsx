import { Link } from '@tanstack/react-router'
import { Card, CardBody, CardFooter, CardHeader } from '../ui/Card'
import { Button } from '../ui/Button'
import customFabImg from '../../assets/images/custom-fab-work.jpg'
import professionalServicesImg from '../../assets/images/professional-services.jpg'
import carStorageImg from '../../assets/images/car-storage.jpg'

const SERVICES = [
  {
    id: 'fabrication',
    label: 'Custom Fabrication',
    tagline: 'Built to spec, built to last',
    image: customFabImg,
    imageAlt: 'Custom fabrication work',
    description:
      'Our on-site Red Seal technician can design and fabricate custom exhaust systems, headers, manifolds, brackets, and one-off metalwork for any build. From concept to weld, we work with you through every step.',
    features: [
      'Cat-back & full exhaust systems',
      'Headers & exhaust manifolds',
      'Custom brackets, mounts & chassis work',
      'Stainless steel & mild steel',
      'Free consultation before any quote',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.585-5.584c.258-.34.537-.666.835-.978a3.5 3.5 0 014.95 0 3.5 3.5 0 010 4.95c-.314.298-.64.577-.978.835m-5.807-4.807l-5.58 5.58" />
      </svg>
    ),
  },
  {
    id: 'professional',
    label: 'Professional Services',
    tagline: 'Leave the wrenching to us',
    image: professionalServicesImg,
    imageAlt: 'Professional automotive services',
    description:
      "Not everyone wants to get their hands dirty — and that's perfectly fine. Book a bay with our Red Seal certified technician handling the work. Ideal for jobs that need a trained eye or when you just want it done right.",
    features: [
      'Full mechanical service & repair',
      'Brake, suspension & steering work',
      'Engine diagnostics & repair',
      'Pre-purchase inspections',
      'Booking confirmed by email after inquiry',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    id: 'storage',
    label: 'Vehicle Storage',
    tagline: 'Safe, secure, off-season peace of mind',
    image: carStorageImg,
    imageAlt: 'Vehicle storage',
    description:
      'Store your vehicle in our secure facility on one of four dedicated lift slots at the rear of the shop. Perfect for classic cars, track builds, motorcycles, or anything you want protected over the winter months.',
    features: [
      '4 slots on two indoor 2-post lifts',
      '24/7 camera-monitored facility',
      'Monthly & seasonal rates',
      'Vehicle check-ins available on request',
      'Easy drop-off & pick-up access',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

export function ServicesList() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} hover>
              <div className="overflow-hidden rounded-t-xl">
                <img src={service.image} alt={service.imageAlt} className="w-full h-48 object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 text-[#C9A84C] rounded-lg flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#f5f5f5]">{service.label}</h2>
                    <p className="text-xs text-[#C9A84C] font-medium mt-0.5">{service.tagline}</p>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                      <svg
                        className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Link to="/contact" search={{ service: service.id }}>
                  <Button variant="secondary" size="sm">
                    Inquire About {service.label}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
