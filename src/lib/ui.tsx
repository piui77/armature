import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./hooks";
import { IMG } from "../data/content";

/**
 * Corrispondenza fra le tavole e le loro copie locali (public/images/).
 * Quando i file locali esistono, il sito li usa e non dipende più dai link esterni.
 */
const LOCAL_MAP: Record<string, string> = {
  [IMG.hero]: "/images/tavola-elmo-e-corazza.jpg",
  [IMG.era1]: "/images/epoca-1-eredita-di-roma.jpg",
  [IMG.era2]: "/images/epoca-2-cavaliere-anno-mille.jpg",
  [IMG.era3]: "/images/epoca-3-grande-transizione.jpg",
  [IMG.era4]: "/images/epoca-4-armatura-bianca.jpg",
  [IMG.era5]: "/images/epoca-5-gotico-fiammeggiante.jpg",
  [IMG.era6]: "/images/epoca-6-crepuscolo-acciaio.jpg",
  [IMG.anatomy]: "/images/anatomia-arnese-bianco.jpg",
  [IMG.workshop]: "/images/bottega-del-forgiatore.jpg",
  [IMG.mail]: "/images/macro-maglia-di-anelli.jpg",
  [IMG.joust]: "/images/giostra-dei-cavalieri.jpg",
};

/**
 * Immagine «al sicuro»: prova prima la copia locale in public/images/;
 * se non c'è (o è corrotta) ripiega sul link esterno originale.
 */
export function SafeImg({
  src,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const mapped = LOCAL_MAP[src];
  const base = mapped ? mapped.replace(/\.(jpg|jpeg|png)$/i, "") : null;
  // Ordine di tentativo: copia locale .jpg, copia locale .png, link esterno.
  const candidates = base ? [`${base}.jpg`, `${base}.png`, src] : [src];
  const [idx, setIdx] = useState(0);
  const resolved = candidates[Math.min(idx, candidates.length - 1)];
  return (
    <img
      src={resolved}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setIdx((i) => Math.min(i + 1, candidates.length - 1))}
    />
  );
}

type RevealVariant = "up" | "left" | "right" | "scale";

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: "div" | "article" | "figure" | "li" | "blockquote";
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const variantClass =
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : variant === "scale" ? "reveal-scale" : "";
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag ref={ref as never} className={`reveal ${variantClass} ${inView ? "is-in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function Crest({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 2l11 5v9c0 8-5 12-11 14C10 28 5 24 5 16V7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M16 8v16M10 13h12" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function DiamondMark({ className = "h-2.5 w-2.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden="true">
      <rect x="2" y="2" width="6" height="6" transform="rotate(45 5 5)" fill="currentColor" />
    </svg>
  );
}

export function CrossPaten({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M6.5 1h3v4.6L14 4.2v3l-4.5 1.3V15h-3V8.5L2 7.2v-3l4.5 1.4z" fill="currentColor" />
    </svg>
  );
}

export function SectionHead({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <DiamondMark className="h-2.5 w-2.5 shrink-0 text-brass" />
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brass md:text-xs">{kicker}</span>
          <span className="h-px flex-1 bg-iron" />
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">{children}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Rivets() {
  return (
    <>
      <span className="rivet left-2 top-2" />
      <span className="rivet right-2 top-2" />
      <span className="rivet bottom-2 left-2" />
      <span className="rivet bottom-2 right-2" />
    </>
  );
}
