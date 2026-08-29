import { LIFE_BLOCKS } from "../data/arsenal";
import { Reveal, SectionHead } from "../lib/ui";

const SLOTS = [
  { id: "caldo", cls: "lg:col-span-7 lg:row-span-2", lead: true },
  { id: "ruggine", cls: "lg:col-span-5", lead: false },
  { id: "squadra", cls: "lg:col-span-5", lead: false },
  { id: "prezzo", cls: "lg:col-span-7", lead: false },
];

export default function Life() {
  const block = (id: string) => LIFE_BLOCKS.find((b) => b.id === id)!;

  return (
    <section id="vita" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="XI · La vita dentro il ferro" title="Dentro l'arnese, ogni giorno">
          L'armatura non vive solo in battaglia: si suda, si unge, si ripara, si paga. Quattro pagine di vita quotidiana
          dietro la corazza — il calore, la ruggine, gli uomini, il denaro.
        </SectionHead>

        <div className="grid gap-6 lg:grid-cols-12">
          {SLOTS.map((slot, i) => {
            const b = block(slot.id);
            return (
              <Reveal key={slot.id} delay={i * 110} className={slot.cls}>
                <article
                  className={`group h-full border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass/40 md:p-9 ${
                    slot.lead ? "border-brass/30 bg-brass/[0.05]" : "border-iron bg-coal/70"
                  }`}
                >
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-brass">{b.kicker}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-bone md:text-3xl">{b.title}</h3>
                  <div className="mt-5 space-y-4">
                    {b.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className={`text-[0.98rem] leading-relaxed text-mute ${slot.lead && pi === 0 ? "dropcap" : ""}`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-iron/70 pt-5">
                    {b.chips.map((c) => (
                      <span
                        key={c}
                        className="border border-steel px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.14em] text-mute transition-colors duration-300 group-hover:border-brass/50 group-hover:text-bone"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
