import { ANNALS } from "../data/expansions";
import { DiamondMark, Reveal } from "../lib/ui";

export default function Annals() {
  return (
    <section className="relative overflow-hidden border-y border-iron bg-ink">
      <div className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-16">
        <Reveal>
          <div className="flex items-center gap-4">
            <DiamondMark className="h-2.5 w-2.5 shrink-0 text-brass" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brass md:text-xs">
              Annali · le otto date che piegarono il ferro
            </span>
            <span className="h-px flex-1 bg-iron" />
            <span className="hidden text-[0.62rem] uppercase tracking-[0.26em] text-faint sm:block">scorri →</span>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 pb-14 md:mt-12 md:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />

        <div className="flex snap-x gap-0 overflow-x-auto px-5 md:px-8 [scrollbar-width:thin] [scrollbar-color:var(--color-steel)_transparent]">
          {ANNALS.map((a, i) => (
            <Reveal key={`${a.year}-${a.place}`} delay={i * 70} className="shrink-0 snap-start">
              <div className="relative h-full w-[240px] border-l border-iron py-2 pl-7 pr-8 md:w-[280px]">
                <span aria-hidden="true" className="absolute -left-[4.5px] top-4 h-2 w-2 rotate-45 bg-brass" />
                <p className="font-display text-3xl font-black text-brass md:text-4xl">
                  {a.prefix && <span className="text-base font-bold text-faint">c. </span>}
                  {a.year}
                </p>
                <p className="mt-2 font-display text-[0.74rem] font-bold uppercase tracking-[0.24em] text-bone">{a.place}</p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-mute">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
