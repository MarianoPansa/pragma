import { WHATSAPP_URL } from "@/lib/site"
import { ArrowIcon } from "@/components/arrow-icon"

const services = [
  {
    num: "01",
    title: ["Capacitaciones", "a medida"],
    desc: "Formamos a tu equipo en IA aplicada a casos reales de tu práctica: sobre tus expedientes, tus escritos y tus flujos, no sobre ejemplos de manual. Salen sabiendo hacer, no solo entendiendo qué es.",
    tags: ["Sobre tus expedientes", "Tus escritos", "Tus flujos de trabajo"],
  },
  {
    num: "02",
    title: ["Desarrollos", "a medida"],
    desc: "Construimos herramientas y asistentes propios: bases de conocimiento consultables, análisis documental, automatización de escritos y tareas repetitivas. Soluciones que se integran a cómo ya trabajás.",
    tags: ["Bases de conocimiento", "Análisis documental", "Automatización de escritos", "Tareas repetitivas"],
  },
  {
    num: "03",
    title: ["Acompañamiento", "integral"],
    desc: "Somos tu partner de transformación, no un proveedor que entrega y desaparece. Diagnóstico, implementación y seguimiento hasta que la IA sea una parte natural de tu operación.",
    tags: ["Diagnóstico", "Implementación", "Seguimiento"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="border-b border-rule">
      <div className="flex items-baseline justify-between border-b border-rule px-12 pb-12 pt-16">
        <div>
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-elec">Servicios</div>
          <div className="font-display text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-dark">
            Todo lo que necesitás
            <br />
            para empezar
          </div>
        </div>
        <div className="max-w-[280px] text-right text-[14px] font-light text-muted">
          Cada intervención se diseña para tu equipo, tu operación y tus problemas concretos.
        </div>
      </div>

      {services.map((s) => (
        <div
          key={s.num}
          className="group relative grid cursor-default grid-cols-[140px_1fr_1fr_auto] items-center gap-12 overflow-hidden border-b border-rule px-12 py-10"
        >
          {/* hover wipe */}
          <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-dark transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

          <div className="relative z-10 font-display text-[72px] font-extrabold leading-none tracking-[-0.05em] text-svc-num transition-colors duration-[250ms] group-hover:text-white">
            {s.num}
          </div>

          <div className="relative z-10 font-display text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-dark transition-colors duration-[250ms] group-hover:text-white">
            {s.title[0]}
            <br />
            {s.title[1]}
          </div>

          <div className="relative z-10">
            <div className="text-[14.5px] leading-[1.65] text-muted transition-colors duration-[250ms] group-hover:text-white/[0.55]">
              {s.desc}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-rule px-[11px] py-1 text-[11.5px] font-medium text-muted transition-[color,border-color] duration-[250ms] group-hover:border-white/[0.22] group-hover:text-white/[0.75]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center gap-[10px] whitespace-nowrap text-[13.5px] font-semibold text-dark transition-colors duration-[250ms] group-hover:text-white"
          >
            Consultar
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-rule transition-[background,border-color] duration-200 group-hover:bg-white/[0.15]">
              <ArrowIcon className="h-[14px] w-[14px]" />
            </span>
          </a>
        </div>
      ))}
    </section>
  )
}
