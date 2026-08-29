import { useState } from "react";
import { BARDA_NOTE, BARDA_PIECES } from "../data/arsenal";
import { Reveal, SectionHead } from "../lib/ui";

const CENTERS: Record<string, [number, number]> = {
  chanfron: [101, 99],
  criniere: [184, 95],
  peytral: [121, 187],
  flanchards: [262, 169],
  crupper: [371, 163],
};

export default function Horse() {
  const [selected, setSelected] = useState(0);
  const piece = BARDA_PIECES[selected];

  return (
    <section id="cavallo" className="relative border-t border-iron bg-coal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="X · Il cavallo vestito" title="La fortezza a quattro zampe">
          Un cavaliere senza cavallo è un pedone con troppo addosso. Dal Duecento anche il destriero si veste di ferro:
          tocca le piastre della tavola — o scegli dall'elenco — per leggere la barda pezzo per pezzo.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* tavola schematica */}
          <Reveal variant="left" className="lg:col-span-6">
            <div className="plate-frame">
              <div className="relative overflow-hidden bg-[#14110d] p-4">
                <svg viewBox="0 0 480 340" className="block w-full" role="img" aria-label="Tavola schematica del cavallo bardato">
                  {/* terreno */}
                  <line x1="70" y1="318" x2="420" y2="318" stroke="#262019" strokeWidth="2" />
                  {/* zampe */}
                  {[
                    "112,224 132,222 128,296 114,298",
                    "156,228 176,226 172,298 158,300",
                    "252,230 272,228 268,298 254,300",
                    "316,222 336,220 332,296 318,298",
                  ].map((pts) => (
                    <polygon key={pts} points={pts} fill="#1d1913" stroke="#3a3227" strokeWidth="1.4" />
                  ))}
                  {/* zoccoli */}
                  {[
                    [111, 296, 19, 13],
                    [155, 298, 19, 13],
                    [251, 298, 19, 13],
                    [315, 294, 19, 13],
                  ].map(([x, y, w, h]) => (
                    <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill="#171410" stroke="#3a3227" strokeWidth="1.2" />
                  ))}
                  {/* coda */}
                  <path d="M402 168C424 196 420 236 404 262" fill="none" stroke="#3a3227" strokeWidth="5" strokeLinecap="round" opacity="0.85" />

                  {/* pezzi della barda */}
                  {BARDA_PIECES.map((p, i) => {
                    const shapes: Record<string, string> = {
                      chanfron: "52,96 84,48 130,54 150,100 138,142 92,152 60,130",
                      criniere: "130,54 206,46 234,116 180,148 150,100",
                      peytral: "92,152 138,142 166,180 152,228 106,222 84,182",
                      flanchards: "180,148 234,116 330,108 358,166 344,220 246,230 182,212 168,178",
                      crupper: "330,108 388,114 402,168 380,220 344,220 358,166",
                    };
                    const isSel = i === selected;
                    return (
                      <g key={p.id} onClick={() => setSelected(i)} className="cursor-pointer">
                        <polygon
                          points={shapes[p.id]}
                          fill={isSel ? "rgba(201,162,75,0.16)" : "#241f18"}
                          stroke={isSel ? "#c9a24b" : "#3a3227"}
                          strokeWidth="1.6"
                          style={{ transition: "fill 0.35s, stroke 0.35s" }}
                        />
                      </g>
                    );
                  })}

                  {/* orecchio e occhio */}
                  <polygon points="96,50 108,22 122,52" fill="#241f18" stroke="#3a3227" strokeWidth="1.4" />
                  <circle cx="102" cy="92" r="4" fill="#0f0d0a" />

                  {/* punti numerati */}
                  {BARDA_PIECES.map((p, i) => {
                    const [cx, cy] = CENTERS[p.id];
                    const isSel = i === selected;
                    return (
                      <g key={`hot-${p.id}`} onClick={() => setSelected(i)} className="cursor-pointer">
                        <circle cx={cx} cy={cy} r="12" fill={isSel ? "#c9a24b" : "#0f0d0a"} stroke="#c9a24b" strokeWidth="1.5" style={{ transition: "fill 0.35s" }} />
                        <text
                          x={cx}
                          y={cy + 4}
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="700"
                          fill={isSel ? "#0f0d0a" : "#eccf7e"}
                          style={{ fontFamily: "Cinzel, Georgia, serif" }}
                        >
                          {i + 1}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
              <p className="px-1 pt-3 text-[0.66rem] uppercase tracking-[0.2em] text-faint">
                Tav. schematica della barda · forme stilizzate
              </p>
            </div>
          </Reveal>

          {/* elenco e scheda */}
          <div className="lg:col-span-6">
            <Reveal variant="right" delay={100}>
              <div className="divide-y divide-iron border-y border-iron">
                {BARDA_PIECES.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(i)}
                    aria-pressed={i === selected}
                    className={`group flex w-full items-center gap-5 px-4 py-3.5 text-left transition-all duration-300 ${
                      i === selected ? "bg-brass/10" : "hover:bg-iron/40"
                    }`}
                  >
                    <span className={`font-display text-lg font-black tabular-nums ${i === selected ? "text-brass" : "text-faint"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className={`block font-display text-[0.85rem] font-bold uppercase tracking-[0.14em] ${i === selected ? "text-brasslight" : "text-bone/85 group-hover:text-bone"}`}>
                        {p.name} <span className="normal-case italic text-faint">· {p.alias}</span>
                      </span>
                    </span>
                    <span className="text-[0.66rem] uppercase tracking-[0.18em] text-faint">{p.weight}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div key={piece.id} className="num-swap mt-8 border border-iron bg-coal/70 p-6 md:p-8">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-brass">
                  Pezzo {selected + 1} di {BARDA_PIECES.length} · {piece.weight}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-bone md:text-3xl">{piece.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-mute md:text-lg">{piece.text}</p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 border-l-2 border-steel pl-5 text-sm italic leading-relaxed text-faint">{BARDA_NOTE}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
