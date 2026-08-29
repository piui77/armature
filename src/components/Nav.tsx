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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-iron bg-ink/95 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]"
          : "border-transparent bg-ink/70"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* riga del marchio */}
        <div className="flex items-center justify-between py-3">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="Torna all'inizio">
            <Crest className="h-8 w-8 text-brass transition-transform duration-500 group-hover:rotate-[8deg]" />
            <span className="font-display text-lg font-bold tracking-[0.2em] text-bone">
              VESTIRE <span className="text-brass">IL FERRO</span>
            </span>
          </a>
          <p className="hidden text-[0.62rem] uppercase tracking-[0.3em] text-faint sm:block">
            Codice marziale · <span className="text-mute">476 – 1600 d.C.</span>
          </p>
        </div>

        {/* riga delle sezioni: va a capo, sempre tutta visibile */}
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-iron/60 py-2 md:gap-x-5" aria-label="Sezioni della pagina">
          {LINKS.map(([href, numeral, label]) => (
            <a
              key={href}
              href={href}
              className="lnk whitespace-nowrap py-0.5 font-display text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-mute transition-colors hover:text-bone md:text-[0.66rem] md:tracking-[0.14em]"
            >
              <span className="mr-1 text-brass/80">{numeral}.</span>
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brass transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
