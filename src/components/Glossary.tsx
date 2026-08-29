import { GLOSSARY } from "../data/content";
import { Crest, Reveal, SectionHead } from "../lib/ui";

const SOURCES = [
  { name: "Royal Armouries — Leeds", url: "https://royalarmouries.org" },
  { name: "The Met — Arms and Armor", url: "https://www.metmuseum.org/about-the-met/collection-areas/arms-and-armor" },
  { name: "Museo Stibbert — Firenze", url: "https://museostibbert.it" },
  { name: "Wallace Collection — Londra", url: "https://www.wallacecollection.org" },
];

export default function Glossary() {
  return (
    <section id="glossario" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="VI · Il lessico dell'acciaio" title="Glossario dell'armaiolo">
          Dodici parole per leggere un'armatura come la leggeva chi la forgiava. Chi le conosce tutte, in bottega ha
          già il martello in mano.
        </SectionHead>

        <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {GLOSSARY.map((g, i) => (
            <Reveal key={g.term} delay={(i % 3) * 90} className="group border-t border-iron pt-5">
              <dt className="flex items-center justify-between font-display text-base font-bold uppercase tracking-[0.18em] text-bone transition-colors duration-300 group-hover:text-brasslight">
                {g.term}
                <span className="text-[0.62rem] font-semibold text-faint">{String(i + 1).padStart(2, "0")}</span>
              </dt>
              <dd className="mt-2.5 text-[0.95rem] leading-relaxed text-mute">{g.def}</dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <footer className="border-t border-iron bg-coal/60">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <a href="#top" className="group inline-flex items-center gap-3">
                <Crest className="h-9 w-9 text-brass transition-transform duration-500 group-hover:rotate-[8deg]" />
                <span className="font-display text-xl font-bold tracking-[0.22em] text-bone">
                  FERRAR<span className="text-brass">IA</span>
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
                Atlante dell'armatura medievale, dall'ultima lamella romana alla prima corazza moderna. Testo redatto
                per questa pagina; tavole illustrate a mano libera.
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brass">Armerie di riferimento</p>
              <ul className="mt-4 space-y-2.5">
                {SOURCES.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="lnk font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-mute transition-colors hover:text-brasslight"
                    >
                      {s.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brass">Indice</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  ["#cronologia", "Cronologia"],
                  ["#anatomia", "Anatomia"],
                  ["#pesi", "Pesi"],
                  ["#bottega", "La Bottega"],
                  ["#miti", "Miti"],
                  ["#glossario", "Glossario"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="lnk font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-mute transition-colors hover:text-brasslight"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-iron pt-7 text-[0.66rem] uppercase tracking-[0.24em] text-faint">
            <span>✠ Forgiato con cura — MMXXVI</span>
            <span>
              Ferrum · Honor · <span className="text-brass">Memoria</span>
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
