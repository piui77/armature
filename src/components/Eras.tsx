import { useEffect, useRef, useState } from "react";
import { ERAS } from "../data/content";
import { DiamondMark, Reveal, Rivets, SafeImg, SectionHead } from "../lib/ui";

export default function Eras() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current.filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.idx ?? 0));
          }
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const era = ERAS[active];

  return (
    <section id="cronologia" className="relative border-t border-iron bg-coal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="I · La cronologia" title="Sei epoche, un solo corpo d'acciaio">
          Dalla maglia di anelli ereditata da Roma fino alla corazza «a prova di palla»: ogni epoca aggiunge, toglie o
          ridisegna, sotto la pressione di frecce, picche e archibugi. Scorri: il numerale resta, l'epoca cambia.
        </SectionHead>

        <Reveal delay={150}>
          <p className="mt-6 max-w-3xl border-l-2 border-steel pl-5 text-sm italic leading-relaxed text-faint">
            Nota metodologica — le date indicano periodi di prevalenza, non confini rigidi: forme precedenti e
            successive coesistettero per decenni, talvolta per secoli. L'arco 476–1600 è una cronologia convenzionale
            dell'evoluzione dell'armatura europea, scelta per raccontare una trasformazione continua.
          </p>
        </Reveal>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* colonna sticky con il numerale */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28">
              <div key={era.numeral} className="num-swap">
                <p className="text-outline font-display text-[10rem] font-black leading-[0.8] xl:text-[12rem]">
                  {era.numeral}
                </p>
                <h3 className="mt-6 font-display text-2xl font-bold text-bone">{era.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.26em] text-brass">{era.period}</p>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-l border-iron pl-6">
                {ERAS.map((e, i) => (
                  <a
                    key={e.numeral}
                    href={`#epoca-${i}`}
                    onClick={() => setActive(i)}
                    className={`group flex items-center gap-3 text-left font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
                      i === active ? "text-brasslight" : "text-faint hover:text-mute"
                    }`}
                  >
                    <span
                      className={`block h-px transition-all duration-500 ${
                        i === active ? "w-10 bg-brass" : "w-5 bg-steel group-hover:w-8"
                      }`}
                    />
                    {e.numeral} · {e.title}
                  </a>
                ))}
              </div>

              <p className="mt-10 font-display text-xs font-bold tracking-[0.3em] text-faint">
                {String(active + 1).padStart(2, "0")} <span className="text-steel">/</span> {String(ERAS.length).padStart(2, "0")}
              </p>
            </div>
          </aside>

          {/* le epoche */}
          <div className="space-y-28 lg:col-span-8 lg:space-y-40">
            {ERAS.map((e, i) => (
              <article
                key={e.numeral}
                id={`epoca-${i}`}
                data-idx={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="scroll-mt-28"
              >
                <Reveal>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brass">
                      Epoca {e.numeral} · {e.period}
                    </span>
                    <span className="h-px min-w-8 flex-1 self-center bg-iron" />
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-bold text-bone md:text-5xl">{e.title}</h3>
                </Reveal>

                <div className="mt-10 grid gap-8 md:grid-cols-5 md:gap-10">
                  <Reveal variant="left" className="md:col-span-2">
                    <figure className="plate-frame group">
                      <Rivets />
                      <div className="kenburns overflow-hidden">
                        <SafeImg
                          src={e.image}
                          alt={e.alt}
                          loading="lazy"
                          className="block aspect-[3/4] w-full object-cover"
                        />
                      </div>
                      <figcaption className="px-1 pt-3 text-[0.66rem] uppercase tracking-[0.2em] text-faint">
                        Tav. {e.numeral} — {e.period}
                      </figcaption>
                    </figure>
                  </Reveal>

                  <div className="md:col-span-3">
                    {e.paragraphs.map((p, pi) => (
                      <Reveal key={pi} delay={pi * 100}>
                        <p className={`${pi > 0 ? "mt-5" : ""} text-base leading-relaxed text-mute md:text-lg`}>{p}</p>
                      </Reveal>
                    ))}

                    {/* cosa cambia + sul campo */}
                    <div className="mt-9 grid gap-6 sm:grid-cols-2">
                      <Reveal delay={160}>
                        <h4 className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
                          <DiamondMark className="h-2 w-2" /> Cosa cambia
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                          {e.changes.map((c) => (
                            <li key={c} className="group flex items-start gap-3">
                              <svg viewBox="0 0 12 12" className="mt-1.5 h-2.5 w-2.5 shrink-0 text-steel transition-colors group-hover:text-brass" aria-hidden="true">
                                <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span className="text-[0.95rem] leading-snug text-bone/85">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </Reveal>

                      <Reveal delay={240}>
                        <div className="h-full border-l-2 border-blood bg-blood/[0.07] p-5 transition-colors duration-300 hover:bg-blood/[0.12]">
                          <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#c96a5a]">Sul campo</h4>
                          <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-bone">{e.context.label}</p>
                          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-mute">{e.context.text}</p>
                        </div>
                      </Reveal>
                    </div>

                    <Reveal delay={200}>
                      <h4 className="mt-9 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brass">
                        <DiamondMark className="h-2 w-2" /> Pezzi chiave
                      </h4>
                      <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                        {e.pieces.map((piece) => (
                          <li key={piece} className="group flex items-center gap-3 border-b border-iron/70 pb-2.5">
                            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-steel transition-colors duration-300 group-hover:bg-brass" />
                            <span className="font-display text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-bone/85 transition-colors group-hover:text-brasslight">
                              {piece}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Reveal>

                    <Reveal delay={260} as="blockquote" className="mt-8">
                      <div className="border-l-2 border-brass pl-5">
                        <p className="text-base italic leading-relaxed text-bone/90 md:text-lg">«{e.note}»</p>
                        <cite className="mt-2 block text-[0.68rem] uppercase not-italic tracking-[0.26em] text-faint">
                          — dal taccuino di bottega
                        </cite>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
