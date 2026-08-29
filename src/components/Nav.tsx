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
  ["#cavallo", "X", "Cavallo"],
  ["#vita", "XI", "Vita"],
  ["#miti", "XII", "Miti"],
  ["#glossario", "XIII", "Glossario"],
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
        scrolled ? "border-iron bg-ink/90 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3.5 md:px-8">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5" aria-label="Torna all'inizio">
          <Crest className="h-8 w-8 text-brass transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="font-display text-lg font-bold tracking-[0.22em] text-bone">
            FERRAR<span className="text-brass">IA</span>
          </span>
        </a>
        <div className="ml-auto flex items-center gap-1 overflow-x-auto whitespace-nowrap md:gap-1.5 [scrollbar-width:none]">
          {LINKS.map(([href, numeral, label]) => (
            <a
              key={href}
              href={href}
              className="lnk px-1.5 py-1.5 font-display text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-mute transition-colors hover:text-bone md:px-2 md:text-[0.68rem]"
            >
              <span className="mr-1 text-brass/80">{numeral}.</span>
              {label}
            </a>
          ))}
        </div>
      </nav>
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brass transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
