import EmberCanvas from "./EmberCanvas";
import { IMG } from "../data/content";
import { useScramble } from "../lib/hooks";
import { DiamondMark, Rivets, SafeImg } from "../lib/ui";

export default function Hero() {
  const line1 = useScramble("DI FERRO", 300);
  const line2 = useScramble("E D'ONORE", 1100);

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden lg:items-center">
      <EmberCanvas />

      {/* colossale cifra romana sullo sfondo */}
      <div
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26vw] font-black leading-none tracking-tighter opacity-60 lg:block"
      >
        MDC
      </div>

      {/* bagliore di forgia */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-20%] h-[70vh] w-[70vh] rounded-full bg-ember/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-16">
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="flex items-center gap-4">
            <DiamondMark className="h-2.5 w-2.5 text-brass" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-brass md:text-xs">
              Codice marziale · 476 – 1600 d.C.
            </p>
          </div>

          <h1 className="mt-7 font-display font-black leading-[0.95] tracking-tight">
            <span className="block text-5xl text-bone sm:text-7xl lg:text-8xl">{line1}</span>
            <span className="mt-2 block text-5xl text-brass sm:text-7xl lg:text-8xl">{line2}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute md:text-xl">
            Undici secoli di acciaio indossato: dalla cotta di anelli dei guerrieri germanici alle lastre brunate delle
            botteghe di Milano. Una cronaca dell'oggetto più sofisticato che il Medioevo abbia mai vestito.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cronologia"
              className="group inline-flex items-center gap-3 border border-brass bg-brass/10 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.22em] text-brasslight transition-all duration-300 hover:bg-brass hover:text-ink"
            >
              Discendi la cronologia
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">
                <path d="M8 2v10M3.5 8L8 12.5 12.5 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#anatomia"
              className="lnk px-1 py-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-mute transition-colors hover:text-bone"
            >
              L'anatomia del cavaliere →
            </a>
          </div>

          <div className="mt-14 hidden items-center gap-6 text-[0.68rem] uppercase tracking-[0.26em] text-faint lg:flex">
            <span>Maglia</span>
            <span className="h-px w-10 bg-steel" />
            <span>Piastre</span>
            <span className="h-px w-10 bg-steel" />
            <span>Arnesi bianchi</span>
            <span className="h-px w-10 bg-steel" />
            <span className="text-brass">Il crepuscolo</span>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <figure className="plate-frame">
            <Rivets />
            <div className="kenburns overflow-hidden">
              <SafeImg
                src={IMG.hero}
                alt="Corazza gotica in acciaio lucidato con elmo chiuso, illuminata da braci di forgia"
                className="block aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                loading="eager"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 px-1 pt-3 text-[0.68rem] uppercase tracking-[0.2em] text-faint">
              <span>Tav. I — Elmo chiuso e corazza, arte milanese</span>
              <span className="whitespace-nowrap text-brass">c. 1480</span>
            </figcaption>
          </figure>

          <div className="pointer-events-none absolute -right-3 top-8 hidden rotate-90 items-center gap-3 text-[0.62rem] uppercase tracking-[0.4em] text-faint xl:flex">
            <span className="h-px w-12 bg-brass/50" />
            Anno Domini · CDLXXVI — MDC
          </div>
        </div>
      </div>

      {/* indicatore di discesa */}
      <a
        href="#prologo"
        className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 pb-6 md:flex"
        aria-label="Scendi al prologo"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.4em] text-faint">Discendi</span>
        <span className="block h-14 w-px overflow-hidden bg-steel">
          <span className="scroll-cue block h-full w-px bg-brass" />
        </span>
      </a>
    </section>
  );
}
