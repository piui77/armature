import { useState } from "react";
import { MYTHS } from "../data/content";
import { Reveal, SectionHead } from "../lib/ui";

export default function Myths() {
  const [open, setOpen] = useState(0);

  return (
    <section id="miti" className="relative border-t border-iron bg-coal/40">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="V · Il tribunale del mito" title="Sei accuse, un verdetto">
          Molto di ciò che «tutti sanno» sull'armatura è ottocentesco, non medievale. Apriamo il processo: ogni accusa
          riceve il suo bollo, come la corazza riceveva la prova.
        </SectionHead>

        <div className="divide-y divide-iron border-y border-iron">
          {MYTHS.map((myth, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={myth.claim} delay={i * 70}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 py-6 text-left md:gap-6 md:py-7"
                  >
                    <span
                      className={`shrink-0 -rotate-6 border px-2.5 py-1 font-display text-[0.62rem] font-black uppercase tracking-[0.24em] transition-all duration-300 md:text-[0.7rem] ${
                        myth.verdict === "FALSO"
                          ? "border-blood text-[#c96a5a] group-hover:bg-blood/15"
                          : "border-brass text-brass group-hover:bg-brass/15"
                      }`}
                    >
                      {myth.verdict}
                    </span>
                    <span
                      className={`flex-1 font-display text-base font-bold leading-snug transition-colors md:text-xl ${
                        isOpen ? "text-brasslight" : "text-bone/90 group-hover:text-bone"
                      }`}
                    >
                      «{myth.claim}»
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      className={`h-4 w-4 shrink-0 text-brass transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className={`acc-panel ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="max-w-3xl pb-7 pl-1 text-base leading-relaxed text-mute md:pl-[7.5rem] md:text-lg">
                        {myth.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm italic text-faint">
            Verdetto letto e bollato: l'armatura era agile, efficace e sopravvisse più a lungo di quanto la leggenda ammetta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
