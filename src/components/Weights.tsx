import { ARMOR_WEIGHTS, COMPARE_WEIGHTS } from "../data/content";
import { useInView } from "../lib/hooks";
import { Reveal, SectionHead } from "../lib/ui";

const SCALE_MAX = 45;

function BarRow({
  label,
  sub,
  kg,
  delay,
  inView,
  tone,
}: {
  label: string;
  sub: string;
  kg: number;
  delay: number;
  inView: boolean;
  tone: "brass" | "steel";
}) {
  return (
    <div className="group">
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-bone/90 transition-colors group-hover:text-brasslight">
          {label}
          <span className="ml-3 text-[0.64rem] font-normal tracking-[0.2em] text-faint">{sub}</span>
        </p>
        <p className="font-display text-lg font-black tabular-nums text-brass">{kg} kg</p>
      </div>
      <div className="h-2.5 w-full border border-iron bg-ink">
        <div
          className={`h-full transition-[width] duration-[1200ms] ease-out ${
            tone === "brass" ? "bg-brass group-hover:bg-brasslight" : "bg-steel"
          }`}
          style={{ width: inView ? `${(kg / SCALE_MAX) * 100}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Weights() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="pesi" className="relative border-t border-iron bg-coal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead kicker="III · La bilancia dell'armaiolo" title="Quanto pesava davvero?">
              La domanda che tutti fanno — e a cui tutti sbagliano risposta. Un arnese completo stava fra i 25 e i 30
              chili, distribuiti su tutto il corpo; soltanto l'armatura da giostra, che non doveva né correre né
              cadere, osava salire oltre i 40.
            </SectionHead>
            <Reveal delay={150}>
              <p className="text-base leading-relaxed text-mute md:text-lg">
                Il segreto non è il peso: è la distribuzione. L'arnese appoggia su spalle, fianchi e gambe come
                un'impalcatura, mentre lo zaino del soldato moderno — più pesante — pende tutto dalle spalle. È per
                questo che in arnese si poteva correre, montare a cavallo e duellare per ore.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 border border-iron bg-ink/60 p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brass">Regola di bottega</p>
                <p className="mt-3 font-display text-lg font-bold leading-snug text-bone md:text-xl">
                  «Ogni libbra che non difende, è una libbra che stanca.»
                </p>
                <p className="mt-2 text-xs italic text-faint">— precetto attribuito ai Missaglia di Milano</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div ref={ref} className="space-y-7 border border-iron bg-ink/40 p-7 md:p-10">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-faint">
                  Peso dell'armamento completo · scala 0–45 kg
                </p>
                {ARMOR_WEIGHTS.map((w, i) => (
                  <BarRow
                    key={w.label}
                    label={w.label}
                    sub={w.sub}
                    kg={w.kg}
                    delay={i * 130}
                    inView={inView}
                    tone="brass"
                  />
                ))}

                <div className="my-2 flex items-center gap-4">
                  <span className="h-px flex-1 bg-iron" />
                  <span className="text-[0.64rem] uppercase tracking-[0.3em] text-faint">per confronto, oggi</span>
                  <span className="h-px flex-1 bg-iron" />
                </div>

                {COMPARE_WEIGHTS.map((w, i) => (
                  <BarRow key={w.label} label={w.label} sub={w.sub} kg={w.kg} delay={600 + i * 130} inView={inView} tone="steel" />
                ))}

                <p className="border-t border-iron pt-5 text-sm italic leading-relaxed text-faint">
                  Lo Stechzeug da giostra era un attrezzo sportivo, non da guerra: quasi cieco, pesantissimo, pensato per
                  un solo colpo di lancia — e per non far cadere mai chi lo portava.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
