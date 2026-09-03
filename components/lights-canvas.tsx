"use client"

import { useEffect, useRef } from "react"

type Dot = {
  x: number
  y: number
  phase: number
  speed: number
  accent: boolean
}

/**
 * "Lucecitas" — a grid of dots that twinkle with a staggered sine wave.
 * Ported verbatim from the source design's canvas script. Reads the accent
 * (`--elec`) and ink (`--dark`) colors from the nearest styled ancestor so it
 * automatically picks up the blue (legal) or orange (empresas) accent.
 */
export function LightsCanvas({
  gap = 26,
  className,
}: {
  gap?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const parent = c.parentElement
    if (!parent) return
    const ctx = c.getContext("2d")
    if (!ctx) return

    const cs = getComputedStyle(c)
    const accent = cs.getPropertyValue("--elec").trim() || "#3B7BF5"
    const ink = cs.getPropertyValue("--dark").trim() || "#0A0C14"

    let dots: Dot[] = []
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf = 0
    const t0 = performance.now()

    function build() {
      const r = parent!.getBoundingClientRect()
      w = r.width
      h = r.height
      c!.width = w * dpr
      c!.height = h * dpr
      c!.style.width = w + "px"
      c!.style.height = h + "px"
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          dots.push({
            x: x + (Math.random() - 0.5) * 4,
            y: y + (Math.random() - 0.5) * 4,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.9,
            accent: Math.random() < 0.08,
          })
        }
      }
    }

    function draw(now: number) {
      const t = (now - t0) / 1000
      ctx!.clearRect(0, 0, w, h)
      for (const d of dots) {
        const s = Math.sin(t * d.speed + d.phase)
        const a = s * 0.5 + 0.5
        const alpha = 0.06 + a * a * 0.55
        ctx!.beginPath()
        ctx!.arc(d.x, d.y, d.accent ? 1.6 : 1.1, 0, Math.PI * 2)
        ctx!.fillStyle = d.accent ? accent : ink
        ctx!.globalAlpha = d.accent ? alpha : alpha * 0.7
        ctx!.fill()
        if (d.accent && a > 0.75) {
          ctx!.globalAlpha = (a - 0.75) * 0.35
          ctx!.beginPath()
          ctx!.arc(d.x, d.y, 5, 0, Math.PI * 2)
          ctx!.fillStyle = accent
          ctx!.fill()
        }
      }
      ctx!.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(build)
    ro.observe(parent)
    build()

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(draw)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [gap])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
