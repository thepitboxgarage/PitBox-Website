import { FAQ_ITEMS } from '../../lib/constants'

export function AboutFAQ() {
  return (
    <section id="faq" className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">
          FAQ
        </p>
        <h2
          className="font-display font-black uppercase text-[#f5f5f5] mb-8"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
        >
          Common questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => (
            <details
              key={faq.q}
              className="group border border-[#262626] rounded-xl bg-[#141414]"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-sm font-medium text-[#f5f5f5] hover:text-[#C9A84C] transition-colors">
                {faq.q}
                <svg
                  className="w-4 h-4 text-[#525252] group-open:rotate-180 transition-transform shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-[#525252] leading-relaxed border-t border-[#1a1a1a] pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
