type Tier = {
  num: string
  title: string
  desc: string
  rowClass: string
  borderClass: string
  numClass: string
  titleClass: string
  descClass: string
}

const tiers: Tier[] = [
  {
    num: "01",
    title: "Aprendemos cómo trabajás, no cómo creemos que trabajás.",
    desc: "Cuando capacitamos a tu equipo, los vemos operar en tiempo real. Eso nos da una lectura de tu operación que ningún cuestionario ni reunión inicial puede darte. Entendemos tu problema antes de proponer cualquier solución.",
    rowClass: "bg-cream border-b border-rule",
    borderClass: "border-rule",
    numClass: "text-why-num",
    titleClass: "text-dark",
    descClass: "text-muted",
  },
  {
    num: "02",
    title: "No inventamos la rueda.",
    desc: "Las soluciones que implementamos se basan en herramientas que ya existen, ya fueron probadas y ya funcionan. Sin desarrollos desde cero, sin riesgos innecesarios. El objetivo es que veas resultados en semanas, no en meses.",
    rowClass: "bg-tier2 border-b border-rule",
    borderClass: "border-white/10",
    numClass: "text-white/[0.14]",
    titleClass: "text-white",
    descClass: "text-white/[0.55]",
  },
  {
    num: "03",
    title: "Todo a medida. Nada genérico.",
    desc: "Ni las capacitaciones, ni el diagnóstico, ni las soluciones. Cada intervención se diseña para tu equipo, tu operación y tus problemas concretos. No existe el copy-paste.",
    rowClass: "bg-dark",
    borderClass: "border-white/[0.08]",
    numClass: "text-white/10",
    titleClass: "text-white",
    descClass: "text-white/[0.45]",
  },
]

export function WhyPragma() {
  return (
    <section id="por-que">
      <div className="flex items-baseline justify-between border-b border-rule px-12 pb-12 pt-16">
        <div>
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-elec">Por qué Pragma</div>
          <div className="font-display text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-dark">
            No nos conformamos con una solución:
            <br />
            queremos la mejor.
          </div>
        </div>
        <div className="max-w-[280px] text-right text-[14px] font-light text-muted">
          Nada de cursos pregrabados ni consultoras que desaparecen.
        </div>
      </div>

      {tiers.map((t) => (
        <div key={t.num} className={`grid grid-cols-2 ${t.rowClass}`}>
          <div className={`flex flex-col justify-between border-r px-12 py-14 ${t.borderClass}`}>
            <div className={`mb-6 font-display text-[96px] font-extrabold leading-none tracking-[-0.06em] ${t.numClass}`}>
              {t.num}
            </div>
            <div
              className={`font-display text-[clamp(20px,2.2vw,30px)] font-bold leading-[1.2] tracking-[-0.02em] ${t.titleClass}`}
            >
              {t.title}
            </div>
          </div>
          <div className="flex flex-col justify-center px-12 py-14">
            <div className={`max-w-[420px] text-[15px] leading-[1.7] ${t.descClass}`}>{t.desc}</div>
          </div>
        </div>
      ))}
    </section>
  )
}
