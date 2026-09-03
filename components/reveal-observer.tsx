"use client"

import { useEffect } from "react"

/**
 * Ports the original "reveal on scroll" behaviour: every element carrying the
 * `.reveal` class gets an `.in` class the first time it enters the viewport.
 * Mount this once per page.
 */
export function RevealObserver({
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
}: {
  threshold?: number
  rootMargin?: string
}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (els.length === 0) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      els.forEach((el) => el.classList.add("in"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold, rootMargin },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return null
}
