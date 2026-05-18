import { useState } from "react";
import logoImg from "../../assets/images/logo.png";
import { Reveal } from "../ui/Reveal";
import { useCountUp } from "../ui/useCountUp";

const STORY_STATS = [
  { label: "Bays", num: 6, suffix: "" },
  { label: "Tools per bay", num: 1000, suffix: "+" },
  { label: "Operating hours", num: 12, suffix: " hrs/day" },
  { label: "Open", num: 6, suffix: " days" },
];

const STAGGER = 250;

function StoryStatItem({
  stat,
  active,
  duration,
}: {
  stat: (typeof STORY_STATS)[0];
  active: boolean;
  duration: number;
}) {
  const count = useCountUp(stat.num, active, duration);
  return (
    <div>
      <div className="text-3xl font-black text-pitbox-amber whitespace-nowrap">
        {count}
        {stat.suffix}
      </div>
      <div className="text-xs text-pitbox-subtle mt-1 uppercase tracking-wide">
        {stat.label}
      </div>
    </div>
  );
}

export function AboutStory() {
  const [active, setActive] = useState(false);

  return (
    <section className="py-20 border-b border-pitbox-surface-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <h2
              className="font-display font-black uppercase text-pitbox-text mb-4"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                lineHeight: 1.1,
              }}
            >
              Why The Pit Box Exists
            </h2>
            <div className="space-y-4 text-pitbox-muted leading-relaxed text-sm">
              <p>
                The Lower Mainland is home to a massive community of
                enthusiasts, racers, technicians, and builders — but fewer and
                fewer people have access to a proper place to work on their
                vehicles. Condos, townhomes, limited garage space, strata
                restrictions, and rising costs have pushed car culture out of
                the spaces it once thrived in.
              </p>
              <p>The Pit Box was built to change that.</p>
              <p>
                We created a professional automotive workspace designed around
                the needs of the community — a place where enthusiasts and
                certified technicians alike can access professional-grade bays,
                premium tools, hoists, and repair information in a clean,
                properly equipped environment.
              </p>
              <p>
                More than just a shop, The Pit Box was built to be a hub for the
                automotive community — a place to build, learn, connect, and
                keep car culture alive.
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="flex flex-col gap-4"
            onVisible={() => setTimeout(() => setActive(true), 520)}
          >
            <div className="relative flex items-start justify-center h-44">
              <div className="absolute inset-0 bg-pitbox-amber/5 rounded-full blur-3xl" />
              <img
                src={logoImg}
                alt="PitBox"
                className="relative h-32 w-auto object-contain"
              />
            </div>
            <div className="bg-pitbox-surface border border-pitbox-border rounded-xl p-6">
              <div className="grid grid-cols-2 gap-6">
                {STORY_STATS.map((stat, i) => (
                  <StoryStatItem
                    key={stat.label}
                    stat={stat}
                    active={active}
                    duration={700 + i * STAGGER}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
