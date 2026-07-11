"use client"

import { useEffect, useState } from "react"
import { WHATSAPP_URL } from "@/lib/site"

function LogoDot() {
  return <span className="ml-[2px] inline-block h-[6px] w-[6px] rounded-full bg-elec" />
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] flex h-[60px] items-center justify-between border-b px-12 transition-[background,border-color] duration-300 ${
        scrolled ? "border-rule bg-cream" : "border-transparent"
      }`}
    >
      <a
        href="#"
        className="inline-flex items-baseline font-display text-[22px] font-extrabold tracking-[-0.02em] text-dark no-underline"
      >
        pragma
        <LogoDot />
      </a>
      <div className="flex items-center gap-8">
        <a href="#servicios" className="text-[13.5px] text-muted no-underline transition-colors hover:text-dark">
          Servicios
        </a>
        <a href="#por-que" className="text-[13.5px] text-muted no-underline transition-colors hover:text-dark">
          Por qué
        </a>
        <a href="#impacto" className="text-[13.5px] text-muted no-underline transition-colors hover:text-dark">
          Impacto
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-lg bg-dark px-5 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-80"
        >
          Contactar →
        </a>
      </div>
    </nav>
  )
}
