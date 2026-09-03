'use client'

import { LightsCanvas } from '@/components/lights-canvas'
import { NavScroll } from '@/components/nav-scroll'
import { RevealObserver } from '@/components/reveal-observer'

const WA_LINK = 'https://wa.me/5493415111363'

export default function LandingPage() {
  return (
    <div className="pragma-landing">
      <NavScroll targetId="nav" threshold={20} />
      <RevealObserver threshold={0.15} rootMargin="0px 0px -40px 0px" />

      {/* Navigation */}
      <nav id="nav" className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="10" height="10" fill="currentColor" />
              <rect x="18" y="4" width="10" height="10" fill="currentColor" />
              <rect x="4" y="18" width="10" height="10" fill="currentColor" />
              <rect x="18" y="18" width="10" height="10" fill="currentColor" />
            </svg>
          </a>
          <a href={WA_LINK} className="nav-btn">
            Contáctanos
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-bg">
          <LightsCanvas gap={26} />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            De <span className="hero-em">abogados</span>,<br />
            para <span className="hero-em">abogados</span>.
          </h1>
          <p className="hero-subtitle">
            Pragma es IA aplicada a tu práctica legal: soluciones concretas, personalizadas y con resultados que se ven en el día a día de tu estudio o tu área legal.
          </p>
          <a href={WA_LINK} className="hero-cta">
            Empezar ahora
          </a>
        </div>
      </header>

      {/* Verticals Section */}
      <section className="verticals-section">
        <div className="verticals-grid">
          {/* Legal Vertical */}
          <a href="/legal" className="vertical-card reveal">
            <div className="vertical-card-bg">
              <svg viewBox="0 0 400 300" className="vertical-pattern">
                <defs>
                  <pattern id="legal-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.1" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#legal-dots)" />
              </svg>
            </div>
            <div className="vertical-card-content">
              <h2 className="vertical-title">Pragma Legal</h2>
              <p className="vertical-desc">
                IA para equipos legales: gestión de documentos, análisis de contratos y automatización de procesos.
              </p>
              <span className="vertical-cta">Explorar →</span>
            </div>
          </a>

          {/* Empresas Vertical */}
          <a href="/empresas" className="vertical-card empresas reveal">
            <div className="vertical-card-bg">
              <svg viewBox="0 0 400 300" className="vertical-pattern">
                <defs>
                  <pattern id="empresas-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.1" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#empresas-dots)" />
              </svg>
            </div>
            <div className="vertical-card-content">
              <h2 className="vertical-title">Pragma Empresas</h2>
              <p className="vertical-desc">
                IA para áreas legales corporativas: compliance, contratos y gestión de riesgos.
              </p>
              <span className="vertical-cta">Explorar →</span>
            </div>
          </a>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="landing-cta">
        <div className="landing-cta-content">
          <h2>¿Listo para transformar tu práctica legal?</h2>
          <p>Contáctanos hoy y descubre cómo Pragma puede optimizar tu trabajo.</p>
          <a href={WA_LINK} className="landing-cta-btn">
            Iniciar conversación
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="10" height="10" fill="currentColor" />
              <rect x="18" y="4" width="10" height="10" fill="currentColor" />
              <rect x="4" y="18" width="10" height="10" fill="currentColor" />
              <rect x="18" y="18" width="10" height="10" fill="currentColor" />
            </svg>
            <span>Pragma</span>
          </div>
          <div className="footer-links">
            <a href="/legal">Legal</a>
            <a href="/empresas">Empresas</a>
            <a href={WA_LINK}>Contacto</a>
          </div>
          <p className="footer-copy">© 2024 Pragma. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
