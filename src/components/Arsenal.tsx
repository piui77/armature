import { useEffect, useState } from "react";
import { WEAPON_CATS, WEAPONS, type WeaponCat } from "../data/arsenal";
import { Reveal, SectionHead } from "../lib/ui";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ArmoryIcon({ id, className = "h-7 w-7" }: { id: string; className?: string }) {
  switch (id) {
    case "spada-una-mano":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 19 17.5 6.5 20 4M17.5 6.5l-4-.7M17.5 6.5l.7 4M6 14l4 4M5 19l-1.5 1.5" {...strokeProps} />
        </svg>
      );
    case "spada-lunga":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 20 19 5l1.8-1.8M6.5 14.5l3 3M4 20 2.8 21.2" {...strokeProps} />
          <circle cx="2.2" cy="21.8" r="1.3" {...strokeProps} />
        </svg>
      );
    case "spadone":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3.5 20.5 20.5 3.5M7 12l5 5M3.5 20.5 2 22M9 15.5l1.5 1.5" {...strokeProps} />
        </svg>
      );
    case "falcione":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 19C8 12 14 7 20 5l-1.5 5c-3 2-6 4-8 8zM5 19l-1.5 1.5" {...strokeProps} />
        </svg>
      );
    case "daga":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 3v9M8.5 7.5h7" {...strokeProps} />
          <circle cx="12" cy="14.5" r="2.4" {...strokeProps} />
          <circle cx="12" cy="20.5" r="1.6" {...strokeProps} />
        </svg>
      );
    case "lancia-guerra":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 20 18.5 5.5 20 3l-2.5 1.5zM4 20l-1.2 1.2" {...strokeProps} />
        </svg>
      );
    case "lancia-giostra":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 20 17 7M11 10.5l3.5 3.5" {...strokeProps} />
          <circle cx="18.5" cy="5.5" r="2.3" {...strokeProps} />
          <circle cx="18.5" cy="5.5" r="0.4" fill="currentColor" />
        </svg>
      );
    case "alabarda":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 21V4M12 8C7.5 8.5 5 6.5 4.5 3c3.5.5 6 0 7.5-1M12 5l4.5.5" {...strokeProps} />
        </svg>
      );
    case "poleaxe":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 21V6" {...strokeProps} />
          <rect x="8.5" y="3" width="7" height="3.4" {...strokeProps} />
          <path d="M8.5 4.7C6 5 4.5 6.5 4 9" {...strokeProps} />
        </svg>
      );
    case "picca":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3 21 21 3M21 3l-3.6.8M21 3l-.8 3.6" {...strokeProps} />
        </svg>
      );
    case "roncone":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 21V9c0-4 2.5-6.5 6.5-6.5-1 2-1.2 3.6-.5 5.5M12 9 7 10.5" {...strokeProps} />
        </svg>
      );
    case "mazza":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 21v-9M12 2.8v1.6M12 11.6v1.6M5.4 8h1.6M17 8h1.6M7.6 3.6l1.1 1.1M15.3 11.3l1.1 1.1M16.4 3.6l-1.1 1.1M8.7 11.3l-1.1 1.1" {...strokeProps} />
          <circle cx="12" cy="8" r="3.4" {...strokeProps} />
        </svg>
      );
    case "martello":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 21V10M8 7.5C5.5 8 4 9.5 3.5 12" {...strokeProps} />
          <rect x="8" y="5.5" width="8" height="4" {...strokeProps} />
        </svg>
      );
    case "mazzafrusto":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M7 21l6-9M19 2.6V4M22.4 6H21M21.4 3.6l-1 1M21.4 8.4l-1-1" {...strokeProps} />
          <circle cx="14.5" cy="10.5" r="1" {...strokeProps} />
          <circle cx="16.7" cy="8.3" r="1" {...strokeProps} />
          <circle cx="19" cy="6" r="2.6" {...strokeProps} />
        </svg>
      );
    case "ascia-cavallo":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M14 21 8 8M8 8C5 7 3.5 4.5 3.5 2c3 .8 5.5.4 7.5-1l1.5 5z" {...strokeProps} />
        </svg>
      );
    case "longbow":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M7 3C3 9 3 15 7 21M7 3v18M7 12h13M20 12l-2.6-1.7M20 12l-2.6 1.7" {...strokeProps} />
        </svg>
      );
    case "balestra":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 9c5-4.5 11-4.5 16 0M4 9h16M12 9v11M12 20H8.5" {...strokeProps} />
        </svg>
      );
    case "archibugio":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3 14 16 10l3-1M14 11l6 7M9 12.5l1.8 3.4c1.2.4 1.8 1.4 1.8 2.6" {...strokeProps} />
        </svg>
      );
    case "scudo-mandorla":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 2.5c4.8 2.8 6.8 6.4 6.8 10 0 4-2.8 6.2-6.8 8-4-1.8-6.8-4-6.8-8 0-3.6 2-7.2 6.8-10z" {...strokeProps} />
          <path d="M12 5v14" {...strokeProps} />
          <circle cx="12" cy="11" r="1.4" {...strokeProps} />
        </svg>
      );
    case "scudo-araldico":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 4h14v6.5c0 5.5-3.8 8.6-7 9.5-3.2-.9-7-4-7-9.5z" {...strokeProps} />
          <path d="M12 7v8M8.5 10.5h7" {...strokeProps} />
        </svg>
      );
    case "brocchiere":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="7.2" {...strokeProps} />
          <circle cx="12" cy="12" r="2" {...strokeProps} />
          <path d="M12 4.8v2M12 17.2v2M4.8 12h2M17.2 12h2" {...strokeProps} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M7.5 3h9v15.5c0 1.6-2 2.5-4.5 2.5s-4.5-.9-4.5-2.5zM12 5.5v13" {...strokeProps} />
        </svg>
      );
  }
}

function ArmorMeter({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Efficacia contro l'arnese: ${value} su 5`}>
      <span className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-faint">Contro l'arnese</span>
      <span className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rotate-45 transition-colors ${i <= value ? "bg-brass" : "border border-steel bg-transparent"}`}
          />
        ))}
      </span>
    </div>
  );
}

export default function Arsenal() {
  const [cat, setCat] = useState<WeaponCat | "tutte">("tutte");
  const [selectedId, setSelectedId] = useState(WEAPONS[0].id);

  const filtered = WEAPONS.filter((w) => cat === "tutte" || w.cat === cat);
  useEffect(() => {
    if (!filtered.some((w) => w.id === selectedId)) setSelectedId(filtered[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat]);

  const weapon = WEAPONS.find((w) => w.id === selectedId) ?? WEAPONS[0];
  const catLabel = (id: WeaponCat) => WEAPON_CATS.find((c) => c.id === id)?.label ?? id;

  return (
    <section id="arsenale" className="relative border-t border-iron bg-coal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead kicker="V · L'arsenale" title="Le armi di chi vestiva il ferro">
          Ventidue strumenti fra lame, inastate, percussione, tiro e difesa. Ognuno è descritto nel suo rapporto con
          l'armatura: cosa doveva aprirla, cosa la accompagnava, cosa finì per renderla superflua.
        </SectionHead>

        {/* filtri */}
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {WEAPON_CATS.map((c) => {
              const count = c.id === "tutte" ? WEAPONS.length : WEAPONS.filter((w) => w.cat === c.id).length;
              const isActive = cat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  aria-pressed={isActive}
                  className={`border px-4 py-2 font-display text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive
                      ? "border-brass bg-brass text-ink"
                      : "border-iron text-mute hover:border-brass/60 hover:text-brasslight"
                  }`}
                >
                  {c.label} <span className={isActive ? "text-ink/60" : "text-faint"}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* griglia armi */}
          <Reveal variant="left" className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {filtered.map((w) => {
                const isActive = w.id === selectedId;
                return (
                  <button
                    key={w.id}
                    onClick={() => setSelectedId(w.id)}
                    aria-pressed={isActive}
                    className={`group border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                      isActive
                        ? "border-brass bg-brass/10 shadow-[0_14px_30px_-16px_rgba(201,162,75,0.4)]"
                        : "border-iron bg-coal/70 hover:border-steel hover:bg-iron/40"
                    }`}
                  >
                    <span className={`block transition-colors ${isActive ? "text-brass" : "text-faint group-hover:text-mute"}`}>
                      <ArmoryIcon id={w.id} />
                    </span>
                    <span
                      className={`mt-3 block font-display text-[0.78rem] font-bold uppercase leading-snug tracking-[0.1em] ${
                        isActive ? "text-brasslight" : "text-bone/85 group-hover:text-bone"
                      }`}
                    >
                      {w.name}
                    </span>
                    <span className="mt-1.5 block text-[0.62rem] uppercase tracking-[0.18em] text-faint">
                      {catLabel(w.cat)} · {w.period}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* scheda */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="border border-iron bg-coal/70 p-6 md:p-7 lg:sticky lg:top-28">
              <div key={weapon.id} className="num-swap">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center border border-steel bg-ink text-brass">
                    <ArmoryIcon id={weapon.id} className="h-9 w-9" />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-[0.64rem] font-bold uppercase tracking-[0.22em] text-brass">
                      {catLabel(weapon.cat)}
                    </p>
                    <p className="mt-1 text-[0.64rem] uppercase tracking-[0.2em] text-faint">{weapon.period}</p>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-bone md:text-3xl">{weapon.name}</h3>
                <p className="mt-2 text-base italic text-mute">{weapon.line}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-mute">{weapon.desc}</p>

                <div className="mt-5 space-y-2 border-t border-iron pt-4">
                  {weapon.stats.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-faint">{s.label}</span>
                      <span className="flex-1 border-b border-dotted border-steel" />
                      <span className="font-display text-[0.78rem] font-bold uppercase tracking-[0.08em] text-bone">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <ArmorMeter value={weapon.antiArmor} />
                </div>

                <div className="mt-5 border-l-2 border-brass bg-brass/[0.06] p-4">
                  <p className="text-[0.92rem] leading-relaxed text-bone/90">{weapon.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
