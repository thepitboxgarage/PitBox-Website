import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import {
  FACILITY_ADDRESS,
  FACILITY_EMAIL,
  FACILITY_HOURS,
  FACILITY_PHONE,
} from '../../lib/constants'

const INQUIRY_TYPES = [
  "Bay Rental",
  "Custom Fabrication",
  "Professional Services",
  "Vehicle Storage",
  "General Inquiry",
]

const SERVICE_PARAM_MAP: Record<string, string> = {
  fabrication: "Custom Fabrication",
  professional: "Professional Services",
  storage: "Vehicle Storage",
}

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

interface ContactSectionProps {
  service?: string
}

export function ContactSection({ service }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  useEffect(() => {
    if (service && SERVICE_PARAM_MAP[service]) {
      setValue('inquiryType', SERVICE_PARAM_MAP[service])
    }
  }, [service, setValue])

  const onSubmit = async (data: FormData) => {
    setSubmitError('')
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        inquiry_type: data.inquiryType,
        message: data.message,
      },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
    )
    setSubmitted(true)
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-sm font-semibold text-pitbox-text uppercase tracking-widest mb-4">Contact Info</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    label: 'Address',
                    value: FACILITY_ADDRESS,
                    href: undefined,
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: FACILITY_PHONE,
                    href: `tel:${FACILITY_PHONE}`,
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: 'Email',
                    value: FACILITY_EMAIL,
                    href: `mailto:${FACILITY_EMAIL}`,
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Hours',
                    value: `${FACILITY_HOURS.open} – ${FACILITY_HOURS.close}, daily`,
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pitbox-amber/10 text-pitbox-amber rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-pitbox-subtle mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-pitbox-muted hover:text-pitbox-amber transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-pitbox-muted">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-48 gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-pitbox-text">Message sent</h3>
                <p className="text-sm text-pitbox-subtle">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Input label="Full Name" placeholder="John Smith" error={errors.name?.message} {...register('name')} />
                <Input label="Email" type="email" placeholder="john@example.com" error={errors.email?.message} {...register('email')} />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-pitbox-text">I'm inquiring about</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg bg-pitbox-surface-2 border border-pitbox-border-2 text-pitbox-text focus:outline-none focus:ring-2 focus:ring-pitbox-amber/50 focus:border-pitbox-amber/60 transition-colors"
                    {...register('inquiryType')}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-pitbox-subtle">Select inquiry type…</option>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="text-xs text-red-400">{errors.inquiryType.message}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-pitbox-text">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-2.5 rounded-lg bg-pitbox-surface-2 border border-pitbox-border-2 text-pitbox-text placeholder:text-pitbox-subtle focus:outline-none focus:ring-2 focus:ring-pitbox-amber/50 focus:border-pitbox-amber/60 transition-colors resize-none"
                    {...register('message')}
                  />
                  {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
                </div>

                {submitError && <p className="text-xs text-red-400">{submitError}</p>}
                <Button type="submit" loading={isSubmitting}>Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
