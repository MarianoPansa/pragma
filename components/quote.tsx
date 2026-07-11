export function Quote() {
  return (
    <section id="quote" className="border-b border-rule px-12 py-[104px] text-center">
      <div className="mx-auto max-w-[920px]">
        <div className="mb-8 text-[11px] font-bold uppercase tracking-[0.18em] text-elec">Nuestra filosofía</div>
        <blockquote className="font-display text-[clamp(32px,5vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-dark text-balance">
          {"“La mejor forma de predecir"}
          <br />
          {"el futuro es "}
          <em className="not-italic text-elec">crearlo</em>
          {".”"}
        </blockquote>
        <div className="mt-8 text-[15px] font-medium tracking-[0.04em] text-muted">— Alan Kay</div>
      </div>
    </section>
  )
}
