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
          Redefinamos la forma
          <br />
          de hacer <em>negocios<span className="dot-h">.</span></em>
        </h1>
        <p className="hero-sub reveal" data-d="3">
          Pragma es una consultora de <strong>inteligencia artificial aplicada</strong>. No damos cursos genéricos ni vendemos herramientas de manual: trabajamos sobre tus documentos, tus flujos y tus problemas reales, con resultados que se ven en el día a día.
        </p>
      </header>

      {/* PATHS */}
      <div className="paths">
        <a href="/legal" className="path legal reveal" data-d="4">
          <div className="p-top">
            <span className="p-tag">Vertical · 01</span>
            <span className="p-mark" />
          </div>
          <div className="p-h">
            <span className="brand">pragma</span>
            <br />
            <span className="kind">legal</span>
          </div>
          <p className="p-desc">
            IA para estudios jurídicos, notarías y áreas legales in-house. De abogados, para abogados.
          </p>
          <div className="p-cta">
            <span>
              <span className="k">Ir a</span>
              <span className="v">bepragma.com.ar/legal</span>
            </span>
            <span className="p-arrow">
              <Arrow />
            </span>
          </div>
        </a>

        <a href="/empresas" className="path empresas reveal" data-d="5">
          <div className="p-top">
            <span className="p-tag">Vertical · 02</span>
            <span className="p-mark" />
          </div>
          <div className="p-h">
            <span className="brand">pragma</span>
            <br />
            <span className="kind">empresas</span>
          </div>
          <p className="p-desc">
            IA para pymes y equipos de operaciones, comercial y back-office. Diagnóstico, implementación y adopción.
          </p>
          <div className="p-cta">
            <span>
              <span className="k">Ir a</span>
              <span className="v">bepragma.com.ar/empresas</span>
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
          <a href="mailto:enhidalgo@bepragma.com.ar">enhidalgo@bepragma.com.ar</a>
          <span className="sep">·</span>
          <a href={WA}>+54 9 3415 111 363</a>
        </div>
      </footer>
    </div>
  )
}
