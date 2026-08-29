import { Reveal } from "../lib/ui";

export default function Intermezzo({
  image,
  alt,
  kicker,
  quote,
  source,
}: {
  image: string;
  alt: string;
  kicker: string;
  quote: string;
  source: string;
}) {
  return (
    <section className="relative h-[64vh] min-h-[440px] overflow-hidden border-y border-iron md:h-[72vh]">
      <div className="kenburns absolute inset-0">
        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/15" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-14 md:items-center md:px-8 md:pb-0">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-brasslight">
              <span className="h-px w-10 bg-brass" />
              {kicker}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="mt-6">
              <p className="font-display text-2xl font-bold leading-snug text-bone sm:text-3xl md:text-[2.6rem] md:leading-[1.15]">
                «{quote}»
              </p>
              <cite className="mt-5 block text-[0.7rem] uppercase not-italic tracking-[0.3em] text-mute">{source}</cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
