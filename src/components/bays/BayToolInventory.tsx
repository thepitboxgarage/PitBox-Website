import { BAY_TOOL_LIST } from '../../lib/constants'
import { ToolCarousel } from './ToolCarousel'

export function BayToolInventory() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">
              Tool Inventory
            </p>
            <h2
              className="font-display font-black uppercase text-[#f5f5f5]"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
            >
              Everything you need is already here.
            </h2>
          </div>
          <a
            href="/tools-list.pdf"
            download
            className="shrink-0 inline-flex items-center gap-2 border border-[#333] text-[#a3a3a3] hover:border-[#C9A84C]/60 hover:text-[#C9A84C] text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Full Tool List
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {BAY_TOOL_LIST.map((tool) => (
              <li key={tool} className="flex items-start gap-3 text-sm text-[#a3a3a3]">
                <svg
                  className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {tool}
              </li>
            ))}
          </ul>
          <ToolCarousel />
        </div>
      </div>
    </section>
  )
}
