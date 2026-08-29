import { useState } from "react";
import { useCountUp } from "../lib/hooks";
import { DiamondMark, Reveal, SectionHead } from "../lib/ui";

type Delta = { name: string; kind: "add" | "remove" | "base"; detail: string };
type Config = { id: string; label: string; period: string; weight: number; desc: string; deltas: Delta[] };

const CONFIGS: Config[] = [
  {
    id: "campo",
    label: "Da campo",
    period: "guerra",
    weight: 27,
    desc: "L'arnese completo per la battaglia: elmo chiuso, corazza, falda con tasselli, bracciali e gambali. Ogni pezzo al suo posto, niente di superfluo: è la configurazione con cui la garnitura nasce in bottega.",
    deltas: [{ name: "Arnese di base", kind: "base", detail: "27 kg ben distribuiti su tutto il corpo" }],
  },
  {
    id: "stech",
    label: "Da giostra",
    period: "Stech",
    weight: 40,
    desc: "Per la carica con la lancia in resta: il fianco sinistro si copre di rinforzi e l'elmo si chiude quasi del tutto. Il peso sale, ma il colpo è assorbito dall'arnese, non dal corpo.",
    deltas: [
      { name: "Grandguardia", kind: "add", detail: "ampia piastra sul petto e sul fianco sinistro" },
      { name: "Passaguardia", kind: "add", detail: "rinforzo per gomito e ascella" },
      { name: "Manifer", kind: "add", detail: "guanto sinistro fisso, a mitene" },
      { name: "Elmo da giostra", kind: "add", detail: "visiera che si abbassa solo all'impatto" },
    ],
  },
  {
    id: "rennen",
    label: "Da torneo",
    period: "Rennen",
    weight: 32,
    desc: "Per le corse del torneo: più leggero della giostra, con visiera a soffietto che si apre a ogni passaggio e scudetto da torneo appeso alla spalla sinistra.",
    deltas: [
      { name: "Visiera da corsa", kind: "add", detail: "si solleva tra una corsa e l'altra" },
      { name: "Resta", kind: "add", detail: "il gancio che scarica la lancia sull'arnese" },
      { name: "Scudetto da torneo", kind: "add", detail: "appeso alla spalla sinistra" },
    ],
  },
  {
    id: "piedi",
    label: "A piedi",
    period: "torneo a piedi",
    weight: 24,
    desc: "Per i duelli dentro la lizza: via la resta e i tasselli lunghi, gambali accorciati, tutto simmetrico. Si combatte a colpi di spada e di daga, faccia a faccia, davanti alle tribune.",
    deltas: [
      { name: "Resta", kind: "remove", detail: "inutile senza cavallo" },
      { name: "Tasselli lunghi", kind: "remove", detail: "sostituiti da tasselli corti e simmetrici" },
      { name: "Sabatoni chiusi", kind: "add", detail: "per proteggere il piede nel corpo a corpo" },
    ],
  },
];

function WeightDial({ kg }: { kg: number }) {
  const v = useCountUp(kg, true, 900);
  return (
    <p className="font-display text-7xl font-black leading-none text-brass md:text-8xl">
      {v}
      <span className="ml-2 text-2xl font-bold text-mute">kg</span>
    </p>
  );
}

function DeltaChip({ d }: { d: Delta }) {
  const styles =
    d.kind === "add"
      ? "border-brass/70 bg-brass/10 text-brasslight"
      : d.kind === "remove"
        ? "border-blood/70 bg-blood/10 text-[#d07a69]"
        : "border-steel bg-iron/40 text-mute";
  const sign = d.kind === "add" ? "+" : d.kind === "remove" ? "−" : "·";
  return (
    <li className={`border p-4 transition-transform duration-300 hover:-translate-y-0.5 ${styles}`}>
      <p className="flex items-baseline gap-2 font-display text-[0.8rem] font-bold uppercase tracking-[0.14em]">
        <span className="text-base leading-none">{sign}</span> {d.name}
      </p>
      <p className="mt-1.5 text-[0.9rem] leading-snug text-mute">{d.detail}</p>
    </li>
  );
}

export default function Garniture() {
  const [selected, setSelected] = useState(0);
  const config = CONFIGS[selected];

  return (
    <section id="garnitura" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="X · La garnitura" title="Il guardaroba d'acciaio">
          Nel Cinquecento l'armatura diventa modulare: un unico arnese, costruito in bottega come un guardaroba di pezzi
          intercambiabili, si ricompone in configurazioni diverse — per il campo, per la giostra, per il torneo a piedi.
          È il punto d'arrivo di mille anni di evoluzione: lo stesso acciaio, tagliato su misura per ogni occasione.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* peso e nota */}
          <div className="lg:col-span-5">
            <Reveal variant="left">
              <div className="border border-iron bg-coal/70 p-7 md:p-9">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-faint">Peso complessivo stimato</p>
                <div key={config.id} className="num-swap mt-5">
                  <WeightDial kg={config.weight} />
                  <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-brass">
                    Configurazione {config.label.toLowerCase()} · {config.period}
                  </p>
                </div>
                <div className="mt-7 h-[3px] w-full bg-iron">
                  <div
                    className="h-full bg-brass transition-all duration-700 ease-out"
                    style={{ width: `${(config.weight / 42) * 100}%` }}
                  />
                </div>
                <p className="mt-3 flex justify-between text-[0.62rem] uppercase tracking-[0.18em] text-faint">
                  <span>20 kg</span>
                  <span>42 kg</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-6 border-l-2 border-brass bg-brass/[0.06] p-5">
                <p className="text-[0.95rem] leading-relaxed text-bone/90">
                  Le garniture più celebri: quella di <strong className="text-brasslight">Konrad Seusenhofer</strong> per
                  il giovane Enrico VIII — con la famosa celata dalle corna d'ariete — e i capolavori sbalzati dei{" "}
                  <strong className="text-brasslight">Negroli</strong> per Carlo V e Filippo II. Oggi si ammirano a
                  Londra, Vienna e Madrid.
                </p>
              </div>
            </Reveal>
          </div>

          {/* configuratore */}
          <div className="lg:col-span-7">
            <Reveal variant="right" delay={100}>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {CONFIGS.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setSelected(i)}
                    aria-pressed={i === selected}
                    className={`border px-3 py-3 text-center transition-all duration-300 ${
                      i === selected
                        ? "border-brass bg-brass text-ink"
                        : "border-iron bg-transparent text-mute hover:border-brass/60 hover:text-brasslight"
                    }`}
                  >
                    <span className="block font-display text-[0.78rem] font-bold uppercase tracking-[0.14em]">{c.label}</span>
                    <span className={`mt-0.5 block text-[0.6rem] uppercase tracking-[0.18em] ${i === selected ? "text-ink/70" : "text-faint"}`}>
                      {c.period}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div key={config.id} className="num-swap mt-6 border border-iron bg-coal/70 p-7 md:p-8">
                <p className="text-base leading-relaxed text-mute md:text-lg">{config.desc}</p>
                <h4 className="mt-6 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
                  <DiamondMark className="h-2 w-2" /> Cosa si aggiunge, cosa si toglie
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {config.deltas.map((d) => (
                    <DeltaChip key={d.name} d={d} />
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 text-[0.66rem] uppercase tracking-[0.22em] text-faint">
                Pesi indicativi su arnesi documentati: ogni garnitura era un pezzo unico, tagliato sul committente
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
