export function ContactHero() {
  return (
    <section className="py-16 border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
        <h1
          className="font-display font-black uppercase text-[#f5f5f5]"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05 }}
        >
          Contact us
        </h1>
        <p className="mt-3 text-[#a3a3a3] max-w-xl">
          Questions about bookings, services, or the facility? We're here to help.
        </p>
      </div>
    </section>
  )
}
