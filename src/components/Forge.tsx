import { FORGE_STEPS } from "../data/content";
import { Reveal, SectionHead } from "../lib/ui";

export default function Forge() {
  return (
    <section id="bottega" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHead kicker="IV · La bottega" title="I sette gesti della forgia">
              Dalla vena di ferro palustre al bollo della «prova»: un arnese nasceva in mesi di fuoco, martello e
              segreto. Ogni bottega custodiva i propri — la tempra milanese non uscì mai dalle sue mura.
            </SectionHead>
            <Reveal delay={200}>
              <div className="border border-iron bg-coal/60 p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brass">La corporazione</p>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  Nel Trecento gli armorari si staccarono dai fabbri: la piastra non è un ferro battuto qualunque, è
                  ingegneria del corpo. A Milano, Norimberga e Innsbruck le botteghe divennero dinastie — i Missaglia,
                  i Negroli, gli Helmschmid — e i loro punzoni viaggiarono per tutta Europa.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative border-l border-iron pl-0">
              {FORGE_STEPS.map((step, i) => (
                <Reveal key={step.numeral} as="li" delay={i * 90} className="relative">
                  <div className="forge-row group flex gap-6 border-b border-iron/70 px-4 py-7 md:gap-10 md:px-6">
                    <span
                      aria-hidden="true"
                      className="absolute -left-px top-1/2 h-10 w-px -translate-y-1/2 bg-brass transition-all duration-500 group-hover:h-16 group-hover:bg-brasslight"
                    />
                    <span className="w-16 shrink-0 text-right font-display text-3xl font-black leading-none text-steel transition-colors duration-500 group-hover:text-brass md:text-4xl">
                      {step.numeral}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-[0.14em] text-bone transition-colors duration-300 group-hover:text-brasslight md:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 max-w-xl text-base leading-relaxed text-mute">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
