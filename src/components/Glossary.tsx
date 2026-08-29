import { useState } from "react";
import { GLOSSARY } from "../data/content";
import { downloadProjectZip } from "../lib/zipBundle";
import Sources from "./Sources";
import { Crest, Reveal, Rivets, SectionHead } from "../lib/ui";

type ZipState = "idle" | "working" | "done" | "error";

const SOURCES_LINKS = [
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
        <SectionHead kicker="XIV · Il lessico dell'acciaio" title="Glossario dell'armaiolo">
          Diciotto parole per leggere un'armatura come la leggeva chi la forgiava. Chi le conosce tutte, in bottega ha
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

      <Sources />

      {/* banda di download */}
      <div className="border-t border-iron">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="relative border border-brass/40 bg-iron/30 px-7 py-9 md:px-12 md:py-12">
              <Rivets />
              <div className="grid items-center gap-8 md:grid-cols-12">
                <div className="md:col-span-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brass">Per gli studiosi della forgia</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-bone md:text-3xl">Portati a casa la bottega</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-mute">
                    L'intero progetto — codice, testi e dati — si impacchetta in un archivio pronto da aprire sul tuo
                    computer. Le immagini restano online; tutto il resto viaggia con te.
                  </p>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <button
                    onClick={handleDownload}
                    disabled={zipState === "working"}
                    className={`group inline-flex items-center gap-3 border px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      zipState === "done"
                        ? "border-brass bg-brass text-ink"
                        : "border-brass bg-brass/10 text-brasslight hover:bg-brass hover:text-ink"
                    } ${zipState === "working" ? "cursor-wait opacity-70" : ""}`}
                  >
                    {zipState === "working" ? (
                      "Preparo l'archivio…"
                    ) : zipState === "done" ? (
                      `✓ ${fileCount} file scaricati`
                    ) : zipState === "error" ? (
                      "Riprova"
                    ) : (
                      <>
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M8 2v8.5M4.5 7.5 8 11l3.5-3.5M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Scarica il progetto (.zip)
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-[0.62rem] uppercase tracking-[0.2em] text-faint">zip generato al momento · solo file sorgente</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-iron bg-coal/60">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <a href="#top" className="group inline-flex items-center gap-3">
                <Crest className="h-9 w-9 text-brass transition-transform duration-500 group-hover:rotate-[8deg]" />
                <span className="font-display text-xl font-bold tracking-[0.22em] text-bone">
                  VESTIRE <span className="text-brass">IL FERRO</span>
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
                {SOURCES_LINKS.map((s) => (
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
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {[
                  ["#cronologia", "Cronologia"],
                  ["#elmi", "Gli Elmi"],
                  ["#anatomia", "Anatomia"],
                  ["#tiro", "Sotto tiro"],
                  ["#arsenale", "L'arsenale"],
                  ["#vestizione", "Vestizione"],
                  ["#bottega", "Bottega"],
                  ["#scuole", "Scuole"],
                  ["#garnitura", "Garnitura"],
                  ["#cavallo", "Cavallo"],
                  ["#vita", "Vita nel ferro"],
                  ["#miti", "Miti"],
                  ["#glossario", "Glossario"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="lnk font-display text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-mute transition-colors hover:text-brasslight"
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
