import { useState } from "react";
import { HELMETS } from "../data/content";
import { Reveal, SectionHead } from "../lib/ui";
import HelmetArt from "./HelmetArt";

export default function Helmets() {
  const [selected, setSelected] = useState(2);
  const helmet = HELMETS[selected];

  return (
    <section id="elmi" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="II · Sei elmi, mille anni" title="L'elmo: la forma che segue la paura">
          Nessun pezzo racconta l'evoluzione meglio dell'elmo: ogni generazione ridisegna il cranio d'acciaio in base a
          ciò che più teme. Passa da una tavola all'altra — e guarda il volto dell'Europa che cambia.
        </SectionHead>

        {/* linea del tempo delle tavole */}
        <Reveal>
          <div className="relative">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[42%] hidden h-px bg-iron md:block" />
            <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
              {HELMETS.map((h, i) => (
                <button
                  key={h.id}
                  onClick={() => setSelected(i)}
                  onMouseEnter={() => setSelected(i)}
                  aria-pressed={i === selected}
                  className={`group relative flex flex-col items-center overflow-hidden border px-2 pb-4 pt-5 transition-all duration-400 ${
                    i === selected
                      ? "border-brass/70 bg-brass/[0.07] shadow-[0_18px_40px_-18px_rgba(201,162,75,0.35)]"
                      : "border-iron bg-coal/40 hover:border-steel hover:bg-coal/70"
                  }`}
                >
                  <HelmetArt
                    id={h.id}
                    className={`h-16 w-16 transition-all duration-500 md:h-20 md:w-20 ${
                      i === selected
                        ? "scale-110 opacity-100"
                        : "opacity-55 saturate-50 group-hover:opacity-85 group-hover:saturate-100"
                    }`}
                  />
                  <span
                    className={`mt-3 font-display text-[0.58rem] font-bold uppercase tracking-[0.16em] md:text-[0.64rem] ${
                      i === selected ? "text-brasslight" : "text-faint group-hover:text-mute"
                    }`}
                  >
                    {h.period}
                  </span>
                  <span
                    className={`mt-1 hidden font-display text-[0.66rem] font-semibold uppercase tracking-[0.14em] md:block ${
                      i === selected ? "text-bone" : "text-steel group-hover:text-faint"
                    }`}
                  >
                    {h.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* scheda dell'elmo scelto */}
        <Reveal delay={140}>
          <div className="mt-10 grid gap-8 border border-iron bg-coal/60 p-7 md:grid-cols-12 md:gap-12 md:p-10">
            <div
              key={helmet.id}
              className="num-swap flex items-center justify-center md:col-span-4"
            >
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-0 rounded-full bg-brass/10 blur-3xl transition-opacity duration-700"
                />
                <HelmetArt
                  id={helmet.id}
                  className="relative h-44 w-44 drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)] md:h-56 md:w-56"
                />
              </div>
            </div>
            <div key={`t-${helmet.id}`} className="num-swap md:col-span-8">
              <p className="flex items-baseline gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-faint">
                <span className="font-display text-brass">
                  Tavola {String(selected + 1).padStart(2, "0")}/{String(HELMETS.length).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-iron" />
                <span>{helmet.period} d.C.</span>
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold text-bone md:text-4xl">{helmet.name}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute md:text-lg">{helmet.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {HELMETS.map((h, i) => (
                  <button
                    key={h.id}
                    onClick={() => setSelected(i)}
                    className={`h-2 w-8 transition-all duration-300 ${i === selected ? "bg-brass" : "bg-steel hover:bg-brass/50"}`}
                    aria-label={`Seleziona ${h.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
