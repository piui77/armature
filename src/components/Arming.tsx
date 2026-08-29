import { useState } from "react";
import { ARMING_FOOTER, ARMING_STEPS, COST_ROWS } from "../data/expansions";
import { DiamondMark, Reveal, SectionHead } from "../lib/ui";

export default function Arming() {
  const [selected, setSelected] = useState(0);
  const step = ARMING_STEPS[selected];
  const progress = ((selected + 1) / ARMING_STEPS.length) * 100;

  return (
    <section id="vestizione" className="relative border-t border-iron bg-coal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="VII · La vestizione" title="Dodici minuti per diventare cavaliere">
          L'armatura non si «indossa»: si monta, pezzo per pezzo, nell'ordine giusto — e nell'ordine sbagliato non si
          monta affatto. Ecco la sequenza che ogni scudiero sapeva a memoria.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* sequenza */}
          <Reveal variant="left" className="lg:col-span-5">
            <ol className="divide-y divide-iron border-y border-iron">
              {ARMING_STEPS.map((s, i) => (
                <li key={s.n}>
                  <button
                    onClick={() => setSelected(i)}
                    aria-pressed={i === selected}
                    className={`group flex w-full items-center gap-5 px-4 py-3.5 text-left transition-all duration-300 ${
                      i === selected ? "bg-brass/10" : "hover:bg-iron/40"
                    }`}
                  >
                    <span
                      className={`w-9 shrink-0 font-display text-xl font-black tabular-nums transition-colors ${
                        i === selected ? "text-brass" : i < selected ? "text-steel" : "text-faint"
                      }`}
                    >
                      {String(s.n).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-display text-[0.82rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                        i === selected ? "text-brasslight" : "text-bone/85 group-hover:text-bone"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="shrink-0 text-[0.62rem] uppercase tracking-[0.18em] text-faint">{s.time}</span>
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* dettaglio */}
          <div className="lg:col-span-7">
            <div className="border border-iron bg-coal/70 p-7 md:p-10">
              <div key={step.n} className="num-swap">
                <div className="flex items-end justify-between gap-6">
                  <p className="text-outline font-display text-8xl font-black leading-[0.75] md:text-9xl">
                    {String(step.n).padStart(2, "0")}
                  </p>
                  <div className="pb-2 text-right">
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-faint">
                      Passo {selected + 1} di {ARMING_STEPS.length}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold uppercase tracking-[0.2em] text-brass">{step.time}</p>
                  </div>
                </div>
                <div className="mt-6 h-[3px] w-full bg-iron">
                  <div className="h-full bg-brass transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold text-bone md:text-3xl">{step.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-mute md:text-lg">{step.text}</p>
              </div>
            </div>

            <Reveal delay={150}>
              <p className="mt-6 flex items-start gap-3 border-l-2 border-steel pl-5 text-sm italic leading-relaxed text-faint">
                <DiamondMark className="mt-1.5 h-2 w-2 shrink-0 text-brass" />
                {ARMING_FOOTER}
              </p>
            </Reveal>

            {/* il prezzo del ferro */}
            <Reveal delay={220}>
              <div className="mt-12">
                <h4 className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brass">
                  <DiamondMark className="h-2 w-2" /> Il prezzo del ferro
                </h4>
                <div className="mt-5 grid gap-px border border-iron bg-iron sm:grid-cols-3">
                  {COST_ROWS.map((c) => (
                    <div key={c.item} className="group bg-coal p-6 transition-colors duration-300 hover:bg-iron/50">
                      <p className="font-display text-[0.72rem] font-bold uppercase tracking-[0.18em] text-mute">{c.item}</p>
                      <p className="mt-2.5 font-display text-xl font-bold text-brasslight">{c.cost}</p>
                      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-mute">{c.note}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[0.66rem] uppercase tracking-[0.22em] text-faint">
                  Stime ricavate da inventari, testamenti e conti di corte
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
