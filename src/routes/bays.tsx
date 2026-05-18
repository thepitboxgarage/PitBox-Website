import { createFileRoute } from "@tanstack/react-router";
import shopBaysImg from "../assets/images/shop-bays.jpg";
import { BayManualSystem } from "../components/bays/BayManualSystem";
import { BayToolInventory } from "../components/bays/BayToolInventory";
import { BAY_COUNT, BAY_FEATURES } from "../lib/constants";

export const Route = createFileRoute("/bays")({
  component: BaysPage,
});

function BaysPage() {
  return (
    <div className="pt-24">
      <section className="py-16 border-b border-pitbox-surface-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            The Bays
          </p>
          <h1
            className="font-display font-black uppercase text-pitbox-text text-center"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
          >
            {BAY_COUNT} premium bays.
          </h1>
          <p className="mt-3 text-pitbox-muted text-center max-w-xl mx-auto">
            Every bay is identical — same tools, same space, same quality.
            Book an available slot and get to work.
          </p>
        </div>
      </section>
      <section className="py-16 border-b border-pitbox-surface-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-3">
                Your Workspace
              </p>
              <h2
                className="font-display font-black uppercase text-pitbox-text mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  lineHeight: 1.1,
                }}
              >
                Everything you need. Nothing you don't.
              </h2>
              <p className="text-pitbox-muted text-sm leading-relaxed mb-6">
                Each of our {BAY_COUNT} bays is a 320 sq ft, fully organized
                workspace. Epoxy floors, high-bay LED lighting, and 1000+
                professional tools — all included from the moment your rental
                begins.
              </p>
              <ul className="flex flex-col gap-3">
                {BAY_FEATURES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-pitbox-muted"
                  >
                    <svg
                      className="w-4 h-4 text-pitbox-amber mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden border border-pitbox-border">
              <img
                src={shopBaysImg}
                alt="PitBox garage bay"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <BayManualSystem />
      <BayToolInventory />
    </div>
  );
}
