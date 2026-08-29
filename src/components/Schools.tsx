import { useState } from "react";
import { SCHOOLS } from "../data/arsenal";
import { DiamondMark, Reveal, SectionHead } from "../lib/ui";

export default function Schools() {
  const [selected, setSelected] = useState(0);
  const school = SCHOOLS[selected];

  return (
    <section id="scuole" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="IX · Le scuole d'acciaio" title="Cinque firme sull'acciaio">
          Lo stesso ferro, cinque linguaggi diversi: ogni bottega d'Europa sviluppa forme, tempre e punzoni propri, e un
          occhio esperto riconosce la mano come si riconosce una calligrafia.
        </SectionHead>

        {/* medaglioni */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-5">
            {SCHOOLS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setSelected(i)}
                aria-pressed={i === selected}
                className={`group relative flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 md:h-20 md:w-20 ${
                  i === selected
                    ? "border-brass bg-brass/15 text-brasslight shadow-[0_0_28px_-6px_rgba(201,162,75,0.5)]"
                    : "border-steel text-faint hover:border-brass/60 hover:text-mute"
                }`}
              >
                <span className="absolute inset-1.5 rounded-full border border-current opacity-30" />
                <span className="font-display text-2xl font-black md:text-3xl">{s.letter}</span>
              </button>
            ))}
            <span className="ml-2 hidden h-px flex-1 bg-iron md:block" />
          </div>
        </Reveal>

        {/* scheda della scuola */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div key={school.id} className="num-swap">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-faint">
                {school.region} · {school.period}
              </p>
              <h3 className="mt-3 font-display text-4xl font-black text-bone md:text-5xl">{school.name}</h3>
              <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-brass">
                Maestri: {school.masters}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute md:text-lg">{school.style}</p>
            </div>
          </div>

          <Reveal variant="right" delay={120} className="lg:col-span-5">
            <div className="h-full border border-iron bg-coal/70 p-6 md:p-7">
              <h4 className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
                <DiamondMark className="h-2 w-2" /> Segni di riconoscimento
              </h4>
              <ul className="mt-5 space-y-3">
                {school.traits.map((t) => (
                  <li key={t} className="group flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-steel transition-colors group-hover:bg-brass" />
                    <span className="text-[0.95rem] leading-snug text-bone/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* tavola di confronto */}
        <Reveal delay={150}>
          <div className="mt-16 border-t border-iron">
            <p className="py-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-faint">
              Tavola di confronto · le cinque scuole
            </p>
            <div className="divide-y divide-iron border-b border-iron">
              {SCHOOLS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(i)}
                  className={`grid w-full grid-cols-12 items-baseline gap-3 px-3 py-4 text-left transition-all duration-300 hover:bg-brass/[0.05] md:gap-6 ${
                    i === selected ? "bg-brass/[0.07]" : ""
                  }`}
                >
                  <span className="col-span-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-bone md:col-span-2">
                    {s.name}
                  </span>
                  <span className="col-span-9 text-[0.72rem] uppercase tracking-[0.18em] text-brass md:col-span-3">
                    {s.period}
                  </span>
                  <span className="col-span-12 text-[0.85rem] text-mute md:col-span-3">{s.masters}</span>
                  <span className="col-span-12 hidden text-[0.85rem] italic text-faint md:col-span-4 md:block">
                    {s.traits[0]} · {s.traits[1]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
