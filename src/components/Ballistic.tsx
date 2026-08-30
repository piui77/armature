import { useState } from "react";
import { WEAPONS } from "../data/expansions";
import { DiamondMark, Reveal, SectionHead } from "../lib/ui";

const STAGES: { key: "maglia" | "transizione" | "piastra"; label: string; sub: string }[] = [
  { key: "maglia", label: "Maglia", sub: "XII secolo" },
  { key: "transizione", label: "Transizione", sub: "XIV secolo" },
  { key: "piastra", label: "Piastra temprata", sub: "XV secolo" },
];

function chipColor(verdict: string): string {
  if (/fuori tempo/i.test(verdict)) return "border-steel bg-iron/50 text-mute";
  if (/limitata/i.test(verdict)) return "border-blood/70 bg-blood/10 text-[#d07a69]";
  if (/elevata/i.test(verdict)) return "border-brass/70 bg-brass/10 text-brasslight";
  return "border-ember/60 bg-ember/10 text-[#e8a06a]"; // protezione condizionata
}

function WeaponIcon({ id, className = "h-6 w-6" }: { id: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (id) {
    case "spada":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5.5 18.5 16 8M16 8l3.5-4.5L15 7M8 16l2 2M5.5 18.5 3.5 20.5M5.5 18.5l-1.8-.2M5.7 18.3l.2 1.8" {...common} />
        </svg>
      );
    case "balestra":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 8q8-6 16 0M4 8l16 0M12 8v13M12 16l4 5M9 21h6" {...common} />
        </svg>
      );
    case "arco":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M7 3C3.5 9 3.5 15 7 21M7 3v18M7 12h13M20 12l-3.5-2M20 12l-3.5 2" {...common} />
        </svg>
      );
    case "mazza":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 21l6.5-6.5M15 9a3.4 3.4 0 1 0 .1 0M15 4.2V2.5M15 13.8v1.7M10.2 9H8.5M21.5 9h-1.7M11.8 5.8l-1.2-1.2M19.4 13.4l-1.2-1.2M18.2 5.8l1.2-1.2" {...common} />
        </svg>
      );
    case "picca":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3.5 20.5 18 6M18 6l1.5-3.5L16 4M18 6l-4 .8M18 6l-.8 4" {...common} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3 14.5 14 11M14 11c3-.8 4.5.6 4.5 2.4 0 1.6-.9 2.8-2.3 3.6M11.5 11.8l1.2 3.4M3 14.5l-.5 1.8M2.5 16.3l2 .3" {...common} />
        </svg>
      );
  }
}

export default function Ballistic() {
  const [selected, setSelected] = useState(0);
  const weapon = WEAPONS[selected];

  return (
    <section id="tiro" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="IV · Sotto tiro" title="Il banco di prova: cosa doveva fermare">
          L'armatura non evolve da sola: evolve perché qualcosa cerca di aprirla. Scegli l'arma e guarda come le
          rispondono la maglia, la transizione e la piastra temprata — e come, ogni volta, il ferro cambia mestiere.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* selettore armi */}
          <Reveal variant="left" className="lg:col-span-4">
            <div className="divide-y divide-iron border border-iron bg-coal/60">
              {WEAPONS.map((w, i) => (
                <button
                  key={w.id}
                  onClick={() => setSelected(i)}
                  aria-pressed={i === selected}
                  className={`group flex w-full items-center gap-4 px-5 py-4 text-left transition-all duration-300 ${
                    i === selected ? "bg-brass/10" : "hover:bg-iron/40"
                  }`}
                >
                  <span className={`shrink-0 transition-colors duration-300 ${i === selected ? "text-brass" : "text-faint group-hover:text-mute"}`}>
                    <WeaponIcon id={w.id} />
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block font-display text-sm font-bold uppercase tracking-[0.14em] transition-colors ${
                        i === selected ? "text-brasslight" : "text-bone/85 group-hover:text-bone"
                      }`}
                    >
                      {w.name}
                    </span>
                    <span className="mt-0.5 block text-[0.66rem] uppercase tracking-[0.22em] text-faint">{w.period}</span>
                  </span>
                  <span
                    className={`block h-px transition-all duration-500 ${i === selected ? "w-8 bg-brass" : "w-3 bg-steel group-hover:w-6"}`}
                  />
                </button>
              ))}
            </div>
          </Reveal>

          {/* dettaglio */}
          <div className="lg:col-span-8">
            <div key={weapon.id} className="num-swap">
              <p className="max-w-2xl text-base leading-relaxed text-mute md:text-lg">{weapon.desc}</p>

              <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-faint">
                Scala di protezione · elevata — condizionata — limitata · il risultato dipende da arma, distanza, angolo,
                qualità del materiale e zona colpita
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {STAGES.map((stage) => {
                  const v = weapon.stages[stage.key];
                  return (
                    <div
                      key={stage.key}
                      className="group border border-iron bg-coal/60 p-5 transition-colors duration-300 hover:border-steel"
                    >
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-faint">{stage.sub}</p>
                      <p className="mt-1 font-display text-lg font-bold text-bone">{stage.label}</p>
                      <span
                        className={`mt-4 inline-block border px-2.5 py-1 font-display text-[0.68rem] font-black uppercase tracking-[0.18em] ${chipColor(
                          v.verdict
                        )}`}
                      >
                        {v.verdict}
                      </span>
                      <p className="mt-3.5 text-[0.92rem] leading-relaxed text-mute">{v.note}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-start gap-4 border-l-2 border-brass bg-brass/[0.06] py-5 pl-5 pr-6">
                <DiamondMark className="mt-1.5 h-2.5 w-2.5 shrink-0 text-brass" />
                <p className="text-base leading-relaxed text-bone/90 md:text-lg">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.24em] text-brass">
                    La risposta dell'acciaio —{" "}
                  </span>
                  {weapon.response}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
