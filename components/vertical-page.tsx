'use client'

import { LightsCanvas } from '@/components/lights-canvas'
import { NavScroll } from '@/components/nav-scroll'
import { RevealObserver } from '@/components/reveal-observer'

const WA_LINK = 'https://wa.me/5493415111363'

type Vertical = 'legal' | 'empresas'

const content = {
  legal: {
    name: 'pragma legal',
    switchName: 'pragma empresas',
    switchDesc: 'IA para pymes y equipos de operaciones',
    title: <>De abogados,<br />para abogados<span className="hl-elec">.</span></>,
    lede: 'Inteligencia artificial aplicada a tu práctica legal. Ni teoría ni herramientas genéricas: soluciones concretas, personalizadas y enfocadas en resultados que se ven en el día a día.',
    audience: ['Estudios jurídicos', 'Áreas legales', 'Abogados independientes'],
    quote: 'La IA no reemplaza al abogado: le saca de encima lo repetitivo para que dedique su tiempo a lo que de verdad agrega valor.',
    intro: 'Una forma más inteligente de trabajar',
    journey: 'AI Journey',
    time: 'Media hora',
  },
  empresas: {
    name: 'pragma empresas',
    switchName: 'pragma legal',
    switchDesc: 'IA para estudios jurídicos y áreas legales',
    title: <>Redefinamos<br />la forma de hacer<span className="hl-elec"> negocios</span><span className="hl-elec">.</span></>,
    lede: 'Inteligencia artificial aplicada a las operaciones de tu empresa. Ni teoría ni herramientas genéricas: soluciones concretas, personalizadas y enfocadas en resultados que se ven en el día a día.',
    audience: ['Pymes', 'Equipos de operaciones', 'Áreas corporativas'],
    quote: 'La IA no reemplaza a tu equipo: le saca de encima lo repetitivo para que dedique su tiempo a lo que de verdad mueve el negocio.',
    intro: 'Una forma más inteligente de hacer negocios',
    journey: 'AI Journey',
    time: '30 minutos',
  },
} as const

export function VerticalPage({ kind }: { kind: Vertical }) {
  const d = content[kind]
  return (
    <div className={`pragma-vertical ${kind}`}>
      <NavScroll />
      <RevealObserver />
      <nav id="nav" className="nav">
        <a href="/" className="logo"><span className="logo-dot" />{d.name}</a>
        <div className="nav-links">
          <a href="#journey">{d.journey}</a><a href="#como">Cómo trabajamos</a><a href="#impacto">Impacto</a><a href="#contacto">Contacto</a>
        </div>
        <div className="nav-right"><a className="nav-switch" href={kind === 'legal' ? '/empresas' : '/legal'}>Ir a {d.switchName} →</a><a className="nav-btn" href={WA_LINK}>Hablemos <span>↗</span></a></div>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-bg"><LightsCanvas /></div>
          <div className="hero-top reveal"><span className="hero-tag">Inteligencia Artificial · {kind === 'legal' ? 'Equipos legales' : 'Empresas'}</span><a className="hero-top-cta" href={WA_LINK}>Media hora, sin compromiso. <span>→</span></a></div>
          <div className="hero-headline reveal"><h1 className="hero-h1">{d.title}</h1><p className="hero-lede">{d.lede}</p></div>
          <div className="hero-bottom reveal"><div><span className="lbl">Para quién</span><div className="hero-val">{d.audience.join(' · ')}</div></div><div><span className="lbl">Cómo</span><div className="hero-val">Formación + implementación + acompañamiento</div></div></div>
        </section>

        {kind === 'legal' && <section id="para-quien" className="aud-grid reveal"><div className="aud-header"><span className="lbl">01</span><h2>Para quién</h2></div><div className="aud-cell"><span className="aud-k">01</span><h3>Estudios jurídicos</h3><p>Más tiempo para pensar, menos tiempo buscando información.</p></div><div className="aud-cell"><span className="aud-k">02</span><h3>Áreas legales</h3><p>Procesos más claros, documentos más ordenados, respuestas más rápidas.</p></div><div className="aud-cell"><span className="aud-k">03</span><h3>Abogados independientes</h3><p>La capacidad de un equipo grande, sin tener que armarlo.</p></div></section>}

        <section id="journey" className="journey"><div className="journey-header reveal"><span className="lbl">{d.journey}</span><h2>{d.intro}</h2><p>Un proceso simple, pensado para que la tecnología se adapte a tu forma de trabajar.</p></div><div className="stages reveal"><article className="stage"><span className="stage-n">01</span><div><span className="stage-kicker">Formación</span><h3 className="stage-t">Entender la herramienta.</h3><p className="stage-desc">Capacitaciones sobre casos reales de tu práctica: tus documentos, tus problemas y tus objetivos.</p></div></article><article className="stage"><span className="stage-n">02</span><div><span className="stage-kicker">Implementación</span><h3 className="stage-t">Aplicarla a tu trabajo.</h3><p className="stage-desc">Diseñamos flujos y soluciones que encajan con lo que ya hacés.</p></div></article><article className="stage"><span className="stage-n">03</span><div><span className="stage-kicker">Acompañamiento</span><h3 className="stage-t">Seguir mejorando.</h3><p className="stage-desc">Estamos cerca para medir resultados y encontrar nuevas oportunidades.</p></div></article></div></section>

        <section id="impacto" className="impact"><div className="impact-top reveal"><span className="lbl">Impacto</span><h2>Lo que cambia cuando la IA trabaja con vos.</h2></div><div className="impact-inner reveal"><div className="impact-cell"><strong>70%</strong><span>menos tiempo en tareas repetitivas</span></div><div className="impact-cell"><strong>+30%</strong><span>más capacidad de respuesta</span></div><div className="impact-cell"><strong>100%</strong><span>adaptado a tu forma de trabajar</span></div></div><p className="impact-note">Los resultados dependen de cada equipo y cada proceso. Lo importante es empezar.</p></section>

        <section id="como" className="como"><div className="como-header reveal"><span className="lbl">Cómo trabajamos</span><h2>Sin humo. Con resultados.</h2></div><div className="como-grid reveal"><div className="como-col si"><span className="como-mark">+</span><h3>Lo que sí hacemos</h3><p>Trabajamos con tus casos reales, documentos reales y objetivos reales.</p></div><div className="como-col no"><span className="como-mark">−</span><h3>Lo que no hacemos</h3><p>No vendemos herramientas genéricas ni prometemos magia de un día para el otro.</p></div></div></section>

        <section id="quote" className="quote"><div className="quote-inner reveal"><span className="quote-eyebrow">La idea central</span><blockquote>“{d.quote}”</blockquote><span className="quote-author">— pragma</span></div></section>
        <section id="cta" className="cta"><div className="cta-left reveal"><span className="cta-eyebrow">¿Empezamos?</span><h2>Media hora,<br />sin compromiso<span className="hl-elec">.</span></h2><p>Te mostramos qué puede hacer la IA por tu {kind === 'legal' ? 'estudio o tu área legal' : 'empresa'}, con ejemplos de tu práctica. Si con lo que ya tenés alcanza, te lo decimos.</p><a className="acta" href={WA_LINK}>Hablemos <span className="cta-arrow">↗</span></a></div></section>
        <section id="contacto" className="contact"><span className="contact-eyebrow">Contacto</span><h2 className="contact-h">Hablemos.</h2><div className="contact-grid reveal"><a href="mailto:mpansa@bepragma.com.ar" className="contact-row"><span className="contact-ico">@</span><span className="contact-txt"><small>Email</small>mpansa@bepragma.com.ar</span></a><a href="mailto:enhidalgo@bepragma.com.ar" className="contact-row"><span className="contact-ico">@</span><span className="contact-txt"><small>Email</small>enhidalgo@bepragma.com.ar</span></a><a href={WA_LINK} className="contact-row"><span className="contact-ico">↗</span><span className="contact-txt"><small>WhatsApp</small>+54 9 341 511 1363</span></a></div></section>
      </main>
      <footer className="footer"><span className="footer-logo"><span className="logo-dot" />{d.name}</span><div className="footer-links"><a href="/">pragma</a><a href="/legal">legal</a><a href="/empresas">empresas</a></div><span className="footer-copy">© 2024 pragma</span></footer>
    </div>
  )
}
