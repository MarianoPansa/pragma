import { WHATSAPP_URL } from "@/lib/site"

const values = [
  {
    title: "Desde adentro",
    text: "Venimos del derecho: entendemos cómo trabaja un abogado y hablamos tu idioma.",
  },
  {
    title: "A tu medida",
    text: "Nada de plantillas. Trabajamos sobre tus documentos, tus flujos y tus problemas reales.",
  },
  {
    title: "Con resultados",
    text: "Concreto y medible. Menos tiempo administrativo, más foco en lo que agrega valor.",
  },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-b border-rule px-12 pt-[120px]"
    >
      {/* top row */}
      <div className="flex items-center justify-between gap-6">
        <div className="pt-[6px] text-[11px] font-bold uppercase tracking-[0.18em] text-elec">
          Inteligencia Artificial · Equipos Legales
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-dark py-2 pl-5 pr-2 text-[13.5px] font-semibold text-white transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-elec"
        >
          Agendá una charla
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-elec transition-colors duration-200 group-hover:bg-white/[0.22]">
            <svg
              viewBox="0 0 14 14"
              fill="none"
              stroke="#fff"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[14px] w-[14px]"
              aria-hidden="true"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </span>
        </a>
      </div>

      {/* headline */}
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(300px,400px)] items-end gap-14 pt-10 max-[900px]:grid-cols-1 max-[900px]:gap-7">
        <h1 className="font-display text-[clamp(52px,8.5vw,116px)] font-extrabold leading-[0.96] tracking-[-0.04em] text-dark text-balance">
          De abogados,
          <br />
          para&nbsp;
          <span className="inline-block rounded-[6px] bg-elec px-[0.18em] text-white">abogados</span>.
        </h1>
        <p className="max-w-[420px] pb-2 text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-muted text-pretty">
          Inteligencia artificial aplicada a tu práctica legal.{" "}
          <strong className="font-semibold text-dark">No teoría ni herramientas genéricas:</strong> soluciones
          concretas, personalizadas y con resultados que se ven en el día a día de tu estudio o tu área legal.
        </p>
      </div>

      {/* bottom values */}
      <div className="mt-14 grid grid-cols-3 border-t border-rule max-[720px]:grid-cols-1">
        {values.map((v, i) => (
          <div
            key={v.title}
            className={`border-r border-rule py-[34px] pr-10 max-[720px]:!border-b max-[720px]:!border-r-0 max-[720px]:!px-0 max-[720px]:!py-7 max-[720px]:last:border-b-0 ${
              i === 0 ? "pl-0" : "pl-10"
            } last:border-r-0 last:pr-0`}
          >
            <span className="mb-5 block h-1 w-6 rounded-[2px] bg-elec" />
            <div className="mb-[10px] font-display text-[21px] font-bold tracking-[-0.02em] text-dark">{v.title}</div>
            <div className="text-[14.5px] leading-[1.6] text-muted">{v.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
