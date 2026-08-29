import { useState } from "react";
import { IMG, PARTS } from "../data/content";
import { Reveal, Rivets, SectionHead } from "../lib/ui";

export default function Anatomy() {
  const [selected, setSelected] = useState(0);
  const part = PARTS[selected];

  return (
    <section id="anatomia" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="II · Tavola anatomica" title="L'anatomia del cavaliere">
          Un arnese bianco del Quattrocento, smontato voce per voce. Tocca i punti d'ottone sull'armatura — o scegli
          dalla lista — per leggere ogni pezzo come lo leggeva l'armaiolo.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal variant="left" className="lg:col-span-6">
            <figure className="plate-frame">
              <Rivets />
              <div className="relative overflow-hidden">
                <img
                  src={IMG.anatomy}
                  alt="Armatura gotica completa del Quattrocento, vista frontale, su fondo scuro"
                  loading="lazy"
                  className="block w-full object-cover"
                />
                {PARTS.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(i)}
                    aria-label={`Mostra: ${p.name}`}
                    aria-pressed={i === selected}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    className={`hotspot absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 ${
                      i === selected
                        ? "is-active scale-125 border-brasslight bg-brass shadow-[0_0_18px_rgba(201,162,75,0.55)]"
                        : "border-brass/80 bg-ink/75 hover:scale-110 hover:bg-brass/30"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${i === selected ? "bg-ink" : "bg-brasslight"}`} />
                  </button>
                ))}
              </div>
              <figcaption className="flex items-center justify-between px-1 pt-3 text-[0.66rem] uppercase tracking-[0.2em] text-faint">
                <span>Tav. anatomica — arnese bianco, bottega milanese</span>
                <span className="text-brass">c. 1460</span>
              </figcaption>
            </figure>
            <p className="mt-4 text-xs italic text-faint">* Le posizioni dei punti sulla tavola sono indicative.</p>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal variant="right" delay={120}>
              <div className="border border-iron bg-coal/60 p-7 md:p-9">
                <div key={part.id} className="num-swap">
                  <p className="flex items-baseline gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-faint">
                    <span className="font-display text-brass">
                      Tav. {String(selected + 1).padStart(2, "0")}/{String(PARTS.length).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-iron" />
                    <span>{part.region}</span>
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold text-bone md:text-4xl">{part.name}</h3>
                  <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-brass">{part.weight}</p>
                  <p className="mt-5 text-base leading-relaxed text-mute md:text-lg">{part.text}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap gap-2">
                {PARTS.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(i)}
                    className={`border px-3.5 py-2 font-display text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                      i === selected
                        ? "border-brass bg-brass text-ink"
                        : "border-iron bg-transparent text-mute hover:border-brass/60 hover:text-brasslight"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <p className="mt-8 border-l-2 border-steel pl-5 text-sm italic leading-relaxed text-faint">
                Sommati, i pezzi restano sotto i trenta chili — e nessun pezzo pesa su un solo punto: l'arnese intero
                «galleggia» sul corpo come un'impalcatura.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
