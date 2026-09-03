"use client"

import { useEffect } from "react"

/**
 * Toggles the `.bg` class on the fixed nav once the page is scrolled past
 * `threshold` pixels — a verbatim port of the original scroll listener.
 */
export function NavScroll({
  targetId = "nav",
  threshold = 20,
}: {
  targetId?: string
  threshold?: number
}) {
  useEffect(() => {
    const nav = document.getElementById(targetId)
    if (!nav) return
    const onScroll = () => {
      nav.classList.toggle("bg", window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [targetId, threshold])

  return null
}
