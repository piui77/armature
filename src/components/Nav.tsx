import { useEffect, useState } from "react";
import { useScrollProgress } from "../lib/hooks";
import { downloadProjectZip } from "../lib/zipBundle";
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
  const [zipState, setZipState] = useState<"idle" | "working" | "done">("idle");

  const handleZip = async () => {
    if (zipState === "working") return;
    setZipState("working");
    try {
      await downloadProjectZip();
      setZipState("done");
      setTimeout(() => setZipState("idle"), 4500);
    } catch {
      setZipState("idle");
    }
  };

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
        <button
          onClick={handleZip}
          disabled={zipState === "working"}
          className={`inline-flex shrink-0 items-center gap-2 border px-3 py-2 font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
            zipState === "done"
              ? "border-brass bg-brass text-ink"
              : "border-brass/70 bg-brass/10 text-brasslight hover:bg-brass hover:text-ink"
          }`}
          title="Scarica tutti i file del sito in un archivio .zip"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
            <path
              d="M8 2v8.5M4.5 7.5 8 11l3.5-3.5M3 13.5h10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">
            {zipState === "working" ? "Preparo…" : zipState === "done" ? "✓ Fatto" : "Scarica .zip"}
          </span>
          <span className="sm:hidden">Zip</span>
        </button>
      </nav>
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brass transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
