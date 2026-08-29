import { STATS } from "../data/content";
import { useCountUp, useInView } from "../lib/hooks";
import { Reveal, SectionHead } from "../lib/ui";

function Stat({ value, prefix, suffix, label, delay }: { value: number; prefix: string; suffix: string; label: string; delay: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const v = useCountUp(value, inView);
  return (
    <div ref={ref} className="px-6 py-8 md:px-8">
      <Reveal delay={delay}>
        <p className="font-display text-4xl font-black text-bone md:text-5xl">
          {prefix}
          <span className="tabular-nums">{v.toLocaleString("it-IT")}</span>
          <span className="text-brass">{suffix}</span>
        </p>
        <p className="mt-3 max-w-[22ch] text-sm leading-snug text-mute">{label}</p>
      </Reveal>
    </div>
  );
}

export default function Prologue() {
  return (
    <section id="prologo" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead kicker="Prologo · Tavola d'apertura" title="La seconda pelle dell'Europa" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-mute lg:col-span-7 lg:pt-24">
          <Reveal>
            <p className="dropcap">
              Per oltre mille anni l'armatura fu la tecnologia più avanzata che un essere umano potesse indossare: metallurgia,
              balistica, ergonomia e araldica cucite intorno a un solo corpo. Non fu mai soltanto difesa — fu status,
              ritratto, bottega, diplomazia. Fu il modo in cui un'epoca intera decise di tenere in vita i suoi uomini
              migliori.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Questa pagina ne segue la metamorfosi epoca per epoca: sei secoli di forma che cambia sotto la pressione di
              frecce, picche e archibugi, e poi l'anatomia completa di un arnese del Quattrocento, la bilancia
              dell'armaiolo, i gesti della bottega e i miti che ancora la appesantiscono.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 divide-y divide-iron border-y border-iron sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {STATS.map((s, i) => (
          <Stat key={s.label} value={s.value} prefix={s.prefix} suffix={s.suffix} label={s.label} delay={i * 110} />
        ))}
      </div>
    </section>
  );
}
