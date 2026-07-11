const cells = [
  {
    area: "Gestión administrativa",
    desc: "Notificaciones, derivaciones y seguimiento de plazos dejan de comerte la mañana.",
    source: "Notificaciones · Derivación · Plazos",
  },
  {
    area: "Investigación",
    desc: "Jurisprudencia, doctrina y análisis de expedientes en una fracción del tiempo.",
    source: "Jurisprudencia · Expedientes",
  },
  {
    area: "Documentación",
    desc: "Escritos, actas y trámites societarios que se redactan solos, listos para revisar.",
    source: "Escritos · Actas · Trámites",
  },
]

export function Impact() {
  return (
    <section id="impacto" className="border-b border-white/[0.08] bg-dark">
      <div className="border-b border-white/[0.08] px-12 pb-10 pt-[72px]">
        <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-elec">El impacto</div>
        <h2 className="font-display text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white text-balance">
          Menos trabajo mecánico.
          <br />
          Más criterio jurídico.
        </h2>
        <p className="mt-[22px] max-w-[540px] text-[16px] leading-[1.6] text-white/50">
          La IA no reemplaza al abogado: le saca de encima lo repetitivo para que dedique su tiempo a lo que de verdad
          agrega valor. Estas son las áreas donde primero se nota.
        </p>
      </div>

      <div className="grid grid-cols-3 max-[720px]:grid-cols-1">
        {cells.map((c) => (
          <div
            key={c.area}
            className="flex flex-col gap-3 border-r border-white/[0.08] px-12 pb-[60px] pt-[52px] last:border-r-0 max-[720px]:border-b max-[720px]:border-r-0 max-[720px]:last:border-b-0"
          >
            <div className="mb-1 flex items-center gap-3 font-display text-[23px] font-bold tracking-[-0.02em] text-white">
              <span className="h-1 w-[22px] flex-shrink-0 rounded-[2px] bg-elec" />
              {c.area}
            </div>
            <div className="text-[14.5px] leading-[1.6] text-white/50">{c.desc}</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-elec">{c.source}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
