'use client'

import { LightsCanvas } from '@/components/lights-canvas'
import { NavScroll } from '@/components/nav-scroll'
import { RevealObserver } from '@/components/reveal-observer'

const WA = 'https://wa.me/5493415111363'

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function LandingPage() {
  return (
    <div className="pragma-landing">
      <NavScroll targetId="nav" threshold={20} />
      <RevealObserver threshold={0.15} rootMargin="0px 0px -40px 0px" />

      {/* NAV */}
      <nav id="nav" className="nav">
        <a href="/" className="lockup" aria-label="pragma — inicio">
          pragma<span className="dot" />
        </a>
        <a href={WA}>Contacto →</a>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg">
          <LightsCanvas gap={26} />
        </div>
        <div className="eyebrow reveal" data-d="1">
          Inteligencia artificial aplicada
        </div>
        <h1 className="reveal" data-d="2">
          Elegí por dónde
          <br />
          querés <em>empezar</em>
          <span className="dot-h">.</span>
        </h1>
        <p className="hero-sub reveal" data-d="3">
          Pragma es IA aplicada a problemas reales. <strong>Trabajamos sobre tus documentos, flujos y procesos</strong>, con resultados que se ven en el día a día. Dos caminos, una misma forma de trabajar.
        </p>
      </header>

      {/* PATHS */}
      <div className="paths">
        <a href="/legal" className="path legal reveal" data-d="4">
          <div className="p-top">
            <span className="p-tag">Estudios · Escribanías · Áreas legales</span>
            <span className="p-mark" />
          </div>
          <div className="p-h">
            <span className="brand">pragma </span>
            <span className="kind">legal</span>
          </div>
          <p className="p-desc">
            IA aplicada a tu práctica: escritos que se redactan solos, jurisprudencia en minutos y expedientes que dejan de acumularse. De abogados, para abogados.
          </p>
          <div className="p-cta">
            <span>
              <span className="k">Explorar</span>
              <span className="v">Para el mundo legal</span>
            </span>
            <span className="p-arrow">
              <Arrow />
            </span>
          </div>
        </a>

        <a href="/empresas" className="path empresas reveal" data-d="5">
          <div className="p-top">
            <span className="p-tag">Pymes · Equipos de operaciones</span>
            <span className="p-mark" />
          </div>
          <div className="p-h">
            <span className="brand">pragma </span>
            <span className="kind">empresas</span>
          </div>
          <p className="p-desc">
            IA aplicada a las operaciones de tu empresa: procesos más claros, menos tareas repetitivas y más tiempo para hacer crecer el negocio.
          </p>
          <div className="p-cta">
            <span>
              <span className="k">Explorar</span>
              <span className="v">Para tu empresa</span>
            </span>
            <span className="p-arrow">
              <Arrow />
            </span>
          </div>
        </a>
      </div>

      {/* FOOTER */}
      <footer>
        <span>© 2026 pragma.</span>
        <div className="foot-contact">
          <a href="mailto:mpansa@bepragma.com.ar">mpansa@bepragma.com.ar</a>
          <span className="sep">·</span>
          <a href={WA}>+54 9 3415 111 363</a>
        </div>
      </footer>
    </div>
  )
}
