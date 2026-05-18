import { Reveal } from '../ui/Reveal'

const FAQ_ITEMS = [
  {
    q: "Do I need to bring my own tools?",
    a: "No. Every bay comes fully equipped with 1000+ professional tools. If you have a specialty tool you prefer, you're welcome to bring it.",
  },
  {
    q: "Can I bring a friend to help?",
    a: "Yes — you may have one guest in the bay with you at no additional charge. Additional guests must wait in the lounge area.",
  },
  {
    q: "What if I need more time than I booked?",
    a: "If the bay is available, you can extend at the front desk. We recommend booking a buffer if your job scope is uncertain.",
  },
  {
    q: "Do you have a lift (hoist)?",
    a: "Yes, each bay is equipped with a 10,000LB 2 post hoist.",
  },
  {
    q: "Can I book same-day?",
    a: "Yes, subject to availability. You can book up to 30 days in advance or as little as 1 hour before your slot.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Full refund for cancellations made 24+ hours in advance. No refund for same-day cancellations or no-shows.",
  },
]

export function AboutFAQ() {
  return (
    <section id="faq" className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2
            className="font-display font-black uppercase text-pitbox-text mb-8"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
          >
            Common questions
          </h2>
        </Reveal>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group border border-pitbox-border rounded-xl bg-pitbox-surface">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-sm font-medium text-pitbox-text hover:text-pitbox-amber transition-colors">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-pitbox-subtle group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-pitbox-subtle leading-relaxed border-t border-pitbox-surface-2 pt-3">
                  {faq.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
