import { WHATSAPP_URL } from "@/lib/site"

export function CTA() {
  return (
    <section id="cta" className="flex flex-wrap items-center justify-between gap-12 bg-dark px-12 py-24">
      <div className="flex-1">
        <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.16em] text-elec">
          El momento de empezar es ahora
        </div>
        <h2 className="max-w-[580px] font-display text-[clamp(32px,4vw,56px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white text-balance">
          La IA ya transforma cómo trabajan los mejores equipos legales.
        </h2>
      </div>
      <div className="flex flex-col items-start gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer whitespace-nowrap rounded-xl bg-elec px-9 py-4 text-[16px] font-semibold text-white transition-[opacity,transform] duration-150 hover:-translate-y-[2px] hover:opacity-90"
        >
          Hablemos hoy →
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[13px] text-white/40 no-underline transition-colors hover:text-white/70"
        >
          o escribinos por WhatsApp
        </a>
      </div>
    </section>
  )
}
