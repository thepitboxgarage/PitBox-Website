export function AboutHero() {
  return (
    <section className="py-16 border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">
          Our Story
        </p>
        <h1
          className="font-display font-black uppercase text-[#f5f5f5] mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
        >
          A garage built for
          <br />
          <span className="text-[#C9A84C]">people who care.</span>
        </h1>
        <p className="text-lg text-[#a3a3a3] leading-relaxed max-w-2xl">
          PitBox was born from a simple frustration: enthusiasts with the skill
          and passion to work on their own vehicles, but no access to the
          professional space and tools to do it right.
        </p>
      </div>
    </section>
  )
}
