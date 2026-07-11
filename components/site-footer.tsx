export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-rule px-12 py-8">
      <div className="inline-flex items-baseline font-display text-[17px] font-extrabold text-dark">
        pragma
        <span className="ml-[2px] inline-block h-[5px] w-[5px] rounded-full bg-elec" />
      </div>
      <div className="flex gap-7">
        <a href="#servicios" className="text-[13px] text-muted no-underline transition-colors hover:text-dark">
          Servicios
        </a>
        <a href="#por-que" className="text-[13px] text-muted no-underline transition-colors hover:text-dark">
          Por qué Pragma
        </a>
        <a href="#impacto" className="text-[13px] text-muted no-underline transition-colors hover:text-dark">
          Impacto
        </a>
      </div>
      <div className="text-[12px] text-muted">© 2026 Pragma. Todos los derechos reservados.</div>
    </footer>
  )
}
