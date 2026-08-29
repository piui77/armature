import { useEffect, useState } from "react";
import { useScrollProgress } from "../lib/hooks";
import { Crest } from "../lib/ui";

const LINKS: [string, string, string][] = [
  ["#cronologia", "I", "Cronologia"],
  ["#elmi", "II", "Elmi"],
  ["#anatomia", "III", "Anatomia"],
  ["#tiro", "IV", "Tiro"],
  ["#arsenale", "V", "Arsenale"],
  ["#pesi", "VI", "Pesi"],
  ["#vestizione", "VII", "Vestizione"],
  ["#bottega", "VIII", "Bottega"],
  ["#scuole", "IX", "Scuole"],
  ["#garnitura", "X", "Garnitura"],
  ["#cavallo", "XI", "Cavallo"],
  ["#vita", "XII", "Vita"],
  ["#miti", "XIII", "Miti"],
  ["#glossario", "XIV", "Glossario"],
];

export default function Nav() {
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open
          ? "border-iron bg-ink/95 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* riga del marchio */}
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5" aria-label="Torna all'inizio">
          <Crest className="h-8 w-8 text-brass transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="font-display text-lg font-bold tracking-[0.22em] text-bone">
            VESTIRE <span className="text-brass">IL FERRO</span>
          </span>
        </a>
        <span className="ml-auto hidden text-[0.62rem] uppercase tracking-[0.26em] text-faint md:block">
          Codice marziale · 476–1600 d.C.
        </span>

        {/* pulsante indice, solo mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Chiudi l'indice" : "Apri l'indice"}
          className="ml-auto flex items-center gap-2 border border-iron px-3 py-2 font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brasslight transition-colors hover:border-brass/60 md:hidden"
        >
          Indice
          <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true">
            <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </nav>

      {/* riga delle sezioni, desktop */}
      <div className="hidden border-t border-iron/60 md:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-1 gap-y-0.5 px-5 py-2 md:px-8">
          {LINKS.map(([href, numeral, label]) => (
            <a
              key={href}
              href={href}
              className="lnk px-2 py-1 font-display text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-mute transition-colors hover:text-bone lg:text-[0.7rem]"
            >
              <span className="mr-1 text-brass/80">{numeral}.</span>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* pannello indice, mobile */}
      {open && (
        <div className="border-t border-iron bg-ink/98 md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 px-5 py-4">
            {LINKS.map(([href, numeral, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2.5 border-b border-iron/50 py-2.5 font-display text-[0.74rem] font-bold uppercase tracking-[0.16em] text-bone/90 transition-colors active:text-brasslight"
              >
                <span className="text-brass">{numeral}.</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brass transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
