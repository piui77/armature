import { MARQUEE_WORDS } from "../data/content";
import { CrossPaten } from "../lib/ui";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-iron bg-coal/70 py-4" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {MARQUEE_WORDS.map((word) => (
              <span key={`${dup}-${word}`} className="flex items-center">
                <span className="font-display text-sm font-bold uppercase tracking-[0.5em] text-steel transition-colors">
                  {word}
                </span>
                <CrossPaten className="mx-8 h-3 w-3 text-brass/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
