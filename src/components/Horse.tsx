import { useState } from "react";
import { BARDA_NOTE, BARDA_PIECES } from "../data/arsenal";
import { Reveal, SectionHead } from "../lib/ui";

const CENTERS: Record<string, [number, number]> = {
  chanfron: [134, 86],
  criniere: [198, 90],
  peytral: [172, 168],
  flanchards: [300, 164],
  crupper: [386, 160],
};

const PLATES: { id: string; d: string; lams: string[] }[] = [
  {
    id: "chanfron",
    d: "M 80 80 C 86 64 100 52 116 48 L 128 46 C 138 50 146 58 148 68 C 152 82 157 94 164 102 L 152 114 C 140 107 126 103 112 103 C 98 102 88 94 80 80 Z",
    lams: ["M 90 76 C 102 66 116 60 132 57", "M 96 92 C 110 86 126 84 144 84"],
  },
  {
    id: "criniere",
    d: "M 150 52 C 186 66 222 92 252 114 L 240 134 C 210 112 176 88 142 74 Z",
    lams: ["M 162 62 L 154 80", "M 184 76 L 176 94", "M 206 90 L 198 108", "M 228 104 L 220 122"],
  },
  {
    id: "peytral",
    d: "M 158 140 C 152 158 154 180 164 198 L 190 190 C 182 174 180 156 184 140 Z",
    lams: ["M 164 148 C 160 164 162 180 170 192", "M 176 144 C 172 162 174 178 182 190"],
  },
  {
    id: "flanchards",
    d: "M 240 128 C 278 120 318 120 350 130 C 362 148 366 170 360 190 C 334 204 296 208 262 202 C 248 180 242 154 240 128 Z",
    lams: ["M 246 146 C 284 138 322 138 354 146", "M 250 168 C 288 162 324 162 356 168", "M 254 188 C 292 194 328 194 358 186"],
  },
  {
    id: "crupper",
    d: "M 358 128 C 376 124 394 128 404 142 C 412 156 414 174 408 190 L 388 198 C 382 180 374 162 362 146 Z",
    lams: ["M 368 136 C 384 134 398 138 406 150", "M 372 158 C 386 158 398 164 404 174"],
  },
];

function HorsePlate({
  plate,
  index,
  selected,
  onSelect,
}: {
  plate: (typeof PLATES)[number];
  index: number;
  selected: boolean;
  onSelect: (i: number) => void;
}) {
  return (
    <g onClick={() => onSelect(index)} className="cursor-pointer">
      <path
        d={plate.d}
        fill={selected ? "rgba(201,162,75,0.20)" : "#2b251c"}
        stroke={selected ? "#c9a24b" : "#4d4232"}
        strokeWidth={selected ? 2 : 1.6}
        style={{ transition: "fill 0.35s, stroke 0.35s" }}
      />
      {plate.lams.map((l) => (
        <path
          key={l}
          d={l}
          fill="none"
          stroke={selected ? "#c9a24b" : "#463b2b"}
          strokeWidth="1.1"
          opacity={selected ? 0.8 : 0.55}
          style={{ transition: "stroke 0.35s" }}
        />
      ))}
    </g>
  );
}

export default function Horse() {
  const [selected, setSelected] = useState(0);
  const piece = BARDA_PIECES[selected];

  return (
    <section id="cavallo" className="relative border-t border-iron bg-coal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="XI · Il cavallo vestito" title="La fortezza a quattro zampe">
          Un cavaliere senza cavallo è un pedone con troppo addosso. Dal Duecento anche il destriero si veste di ferro:
          tocca le piastre della tavola — o scegli dall'elenco — per leggere la barda pezzo per pezzo.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* tavola */}
          <Reveal variant="left" className="lg:col-span-6">
            <div className="plate-frame">
              <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_30%,#1c1712,#100e0a)] p-4 md:p-6">
                <svg viewBox="0 0 540 360" className="block w-full" role="img" aria-label="Tavola della barda del cavallo, vista laterale">
                  {/* terreno */}
                  <ellipse cx="268" cy="336" rx="215" ry="10" fill="#000" opacity="0.35" />
                  <line x1="36" y1="336" x2="504" y2="336" stroke="#262019" strokeWidth="2" />

                  {/* zampe lontane */}
                  <path
                    d="M198 200 C196 226 197 250 201 268 C198 276 198 284 201 292 C199 306 200 314 202 322 L216 322 C214 310 214 300 215 292 C218 282 218 274 216 266 C220 246 220 222 220 202 Z"
                    fill="#1a1611"
                    stroke="#332b20"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M362 202 C370 220 380 238 386 252 C396 256 402 264 400 274 C394 290 390 306 390 322 L376 322 C376 306 380 292 384 278 C376 270 370 260 368 248 C362 234 358 218 356 202 Z"
                    fill="#1a1611"
                    stroke="#332b20"
                    strokeWidth="1.4"
                  />
                  <path d="M200 322 L218 322 L221 334 L198 334 Z" fill="#14100c" />
                  <path d="M374 322 L392 322 L395 334 L372 334 Z" fill="#14100c" />

                  {/* coda */}
                  <path d="M406 142 C428 160 436 192 428 226 C422 252 412 270 400 282" fill="none" stroke="#1a1611" strokeWidth="11" strokeLinecap="round" />
                  <path d="M402 150 C418 170 424 196 418 224" fill="none" stroke="#262019" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

                  {/* corpo */}
                  <path
                    d="M66 98 C58 92 56 82 64 76 C72 69 82 66 90 62 C98 56 104 50 110 45 L105 21 C108 14 117 16 119 23 L125 41 C136 41 146 48 150 58 C160 62 210 92 252 116 C270 122 306 126 330 124 C356 121 388 122 402 136 C414 150 418 172 412 190 C408 200 400 208 392 212 C366 224 330 230 296 228 C262 226 228 222 206 214 C192 208 180 198 174 186 C166 170 160 152 154 136 C148 122 140 112 130 106 C118 102 104 100 92 100 C80 100 70 100 66 98 Z"
                    fill="#262019"
                    stroke="#4d4232"
                    strokeWidth="2"
                  />

                  {/* muso: bocca, narice, occhio */}
                  <path d="M62 95 C70 92 78 92 86 94" fill="none" stroke="#171310" strokeWidth="1.5" strokeLinecap="round" />
                  <ellipse cx="72" cy="85" rx="3" ry="2.2" fill="#14100c" />
                  <circle cx="104" cy="66" r="3.4" fill="#0f0d0a" />
                  <circle cx="105.2" cy="64.8" r="0.9" fill="#8a7a58" />

                  {/* criniera */}
                  <path d="M112 44 C116 38 122 34 128 34 C124 40 120 46 118 52 Z" fill="#1a1611" />
                  <path d="M132 46 C172 60 216 90 250 113 L242 122 C208 100 166 74 130 56 Z" fill="#1a1611" />

                  {/* linee di muscolatura */}
                  <path d="M206 128 C222 148 224 172 212 194" fill="none" stroke="#4d4232" strokeWidth="1.2" opacity="0.45" />
                  <path d="M344 130 C364 146 368 172 356 196" fill="none" stroke="#4d4232" strokeWidth="1.2" opacity="0.45" />
                  <path d="M298 134 C304 158 302 182 294 202" fill="none" stroke="#4d4232" strokeWidth="1.2" opacity="0.35" />

                  {/* zampe vicine */}
                  <path
                    d="M178 196 C176 224 177 248 181 266 C178 274 178 282 181 290 C179 304 180 314 182 322 L196 322 C194 310 194 300 195 290 C198 280 198 272 196 264 C200 244 200 218 200 200 Z"
                    fill="#221d15"
                    stroke="#4d4232"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M344 202 C352 220 362 236 368 250 C380 254 386 262 384 272 C378 288 372 304 372 322 L358 322 C358 306 362 290 366 276 C358 268 352 258 350 246 C344 232 340 216 338 202 Z"
                    fill="#221d15"
                    stroke="#4d4232"
                    strokeWidth="1.6"
                  />
                  <path d="M178 322 L198 322 L201 334 L176 334 Z" fill="#14100c" stroke="#332b20" strokeWidth="1" />
                  <path d="M356 322 L374 322 L377 334 L354 334 Z" fill="#14100c" stroke="#332b20" strokeWidth="1" />

                  {/* piastre della barda */}
                  {PLATES.map((plate, i) => (
                    <HorsePlate key={plate.id} plate={plate} index={i} selected={i === selected} onSelect={setSelected} />
                  ))}

                  {/* punti numerati */}
                  {BARDA_PIECES.map((p, i) => {
                    const [cx, cy] = CENTERS[p.id];
                    const isSel = i === selected;
                    return (
                      <g key={`hot-${p.id}`} onClick={() => setSelected(i)} className="cursor-pointer">
                        <circle
                          cx={cx}
                          cy={cy}
                          r="12"
                          fill={isSel ? "#c9a24b" : "#0f0d0a"}
                          stroke="#c9a24b"
                          strokeWidth="1.5"
                          style={{ transition: "fill 0.35s" }}
                        />
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
                Tav. XI — La barda, vista laterale · tocca le piastre o i punti numerati
              </p>
            </div>

            <Reveal delay={220}>
              <div className="mt-6 grid gap-px border border-iron bg-iron sm:grid-cols-2">
                {[
                  "Prima della piastra, la barda era di maglia e di cuoio bollito: la testiera compare già nel Duecento.",
                  "Una barda completa di piastre pesava sul cavallo quasi quanto un uomo in arnese: anche il destriero portava la sua parte.",
                ].map((t) => (
                  <p key={t} className="bg-coal p-5 text-[0.9rem] leading-relaxed text-mute">
                    {t}
                  </p>
                ))}
              </div>
            </Reveal>
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
