import { useState } from "react";
import { GLOSSARY } from "../data/content";
import { downloadProjectZip } from "../lib/zipBundle";
import { Crest, Reveal, Rivets, SectionHead } from "../lib/ui";

type ZipState = "idle" | "working" | "done" | "error";

const SOURCES = [
  { name: "Royal Armouries — Leeds", url: "https://royalarmouries.org" },
  { name: "The Met — Arms and Armor", url: "https://www.metmuseum.org/about-the-met/collection-areas/arms-and-armor" },
  { name: "Museo Stibbert — Firenze", url: "https://museostibbert.it" },
  { name: "Wallace Collection — Londra", url: "https://www.wallacecollection.org" },
];

export default function Glossary() {
  const [zipState, setZipState] = useState<ZipState>("idle");
  const [fileCount, setFileCount] = useState(0);

  const handleDownload = async () => {
    if (zipState === "working") return;
    setZipState("working");
    try {
      const info = await downloadProjectZip();
      setFileCount(info.files);
      setZipState("done");
      setTimeout(() => setZipState("idle"), 5000);
    } catch {
      setZipState("error");
      setTimeout(() => setZipState("idle"), 5000);
    }
  };

  return (
    <section id="glossario" className="relative border-t border-iron">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="VII · Il lessico dell'acciaio" title="Glossario dell'armaiolo">
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

        {/* Portati a casa la bottega */}
        <Reveal delay={150} className="mt-24">
          <div className="plate-frame">
            <Rivets />
            <div className="relative overflow-hidden border border-iron/60 bg-gradient-to-br from-iron/50 via-coal to-ink p-8 md:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-ember/10 blur-3xl"
              />
              <div className="relative grid items-center gap-8 md:grid-cols-12">
                <div className="md:col-span-8">
                  <p className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brass">
                    <span className="h-px w-8 bg-brass" />
                    Portati a casa la bottega
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-bone md:text-4xl">
                    Scarica il sito, file per file
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-mute">
                    Codice sorgente, stili, configurazione e README, impacchettati in un archivio{" "}
                    <span className="font-display text-sm font-bold uppercase tracking-wider text-brasslight">.zip</span>{" "}
                    pronto da aprire sul tuo PC. Poi: <code className="text-bone">npm install</code>,{" "}
                    <code className="text-bone">npm run dev</code>, e la forgia riparte in locale. Le tavole illustrate
                    restano online, come indicato nel file <span className="text-bone">LEGGIMI-IMMAGINI.txt</span>.
                  </p>
                </div>
                <div className="md:col-span-4 md:justify-self-end">
                  <button
                    onClick={handleDownload}
                    disabled={zipState === "working"}
                    className={`group inline-flex w-full items-center justify-center gap-3 border px-7 py-4 font-display text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 md:w-auto ${
                      zipState === "done"
                        ? "border-brass bg-brass text-ink"
                        : zipState === "error"
                          ? "border-blood bg-blood/15 text-[#c96a5a]"
                          : "border-brass bg-brass/10 text-brasslight hover:bg-brass hover:text-ink hover:shadow-[0_0_28px_rgba(201,162,75,0.35)]"
                    }`}
                  >
                    {zipState === "working" ? (
                      <>
                        <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" aria-hidden="true">
                          <path d="M12 3a9 9 0 1 0 9 9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        </svg>
                        Preparo l'archivio…
                      </>
                    ) : zipState === "done" ? (
                      <>
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                          <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {fileCount} file scaricati
                      </>
                    ) : zipState === "error" ? (
                      "Riprova"
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">
                          <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19.5h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Scarica il progetto (.zip)
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-[0.64rem] uppercase tracking-[0.22em] text-faint md:text-right">
                    ≈ 20 file · React + Vite + Tailwind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
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
                  ["#elmi", "Gli Elmi"],
                  ["#anatomia", "Anatomia"],
                  ["#pesi", "Pesi"],
                  ["#bottega", "La Bottega"],
                  ["#miti", "Miti"],
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
