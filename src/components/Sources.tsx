import { useState } from "react";
import { SOURCES } from "../data/arsenal";
import { DiamondMark, Reveal, SectionHead } from "../lib/ui";

const SPINE_WIDTHS = [56, 46, 62, 52, 48, 58];

export default function Sources() {
  const [selected, setSelected] = useState(0);
  const source = SOURCES[selected];

  return (
    <section id="fonti" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
        <SectionHead kicker="Le fonti" title="Lo scaffale dell'armaiolo">
          I testi di questa pagina sono redatti a scopo divulgativo: per lo studio fanno fede le opere qui sotto e le
          collezioni citate. Scegli un dorso dallo scaffale.
        </SectionHead>

        {/* scaffale */}
        <Reveal>
          <div className="flex items-end gap-3 overflow-x-auto pb-4 md:gap-4 md:overflow-visible">
            {SOURCES.map((s, i) => {
              const isSel = i === selected;
              const darkText = s.color === "#c9a24b";
              return (
                <button
                  key={s.id}
                  onClick={() => setSelected(i)}
                  aria-pressed={isSel}
                  style={{ height: s.height, width: SPINE_WIDTHS[i], backgroundColor: s.color }}
                  className={`relative shrink-0 border border-black/40 px-1 py-3 transition-all duration-500 ${
                    isSel
                      ? "-translate-y-3 shadow-[0_18px_36px_-12px_rgba(0,0,0,0.8),0_0_0_2px_#c9a24b]"
                      : "hover:-translate-y-2 hover:shadow-[0_16px_30px_-14px_rgba(0,0,0,0.7)]"
                  }`}
                >
                  <span
                    className={`mx-auto block h-full font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] ${
                      darkText ? "text-ink" : "text-bone/90"
                    }`}
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[0.5rem] font-bold tracking-widest ${
                      darkText ? "text-ink/70" : "text-bone/60"
                    }`}
                  >
                    {s.year}
                  </span>
                </button>
              );
            })}
          </div>
          <div aria-hidden="true" className="-mt-1 h-[3px] w-full bg-gradient-to-r from-steel via-brass/60 to-steel" />
        </Reveal>

        {/* scheda del volume */}
        <Reveal delay={120}>
          <div key={source.id} className="num-swap mt-10 grid gap-6 border border-iron bg-coal/70 p-6 md:grid-cols-12 md:items-center md:p-8">
            <div className="md:col-span-4">
              <p className="flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-brass">
                <DiamondMark className="h-2 w-2" /> Sullo scaffale
              </p>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug text-bone md:text-2xl">{source.title}</h3>
              <p className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-faint">
                {source.author} · {source.year}
              </p>
            </div>
            <p className="text-[0.98rem] leading-relaxed text-mute md:col-span-8">{source.blurb}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
