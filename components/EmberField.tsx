'use client'

import { useReducedMotion } from 'framer-motion'

function srand(seed: number) {
  let s = seed
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) | 0
    return (s >>> 0) / 4294967296
  }
}

const _r = srand(2026)
const EMBERS = Array.from({ length: 28 }, (_, i) => ({
  id:       i,
  left:     _r() * 100,
  size:     1.5 + _r() * 2.5,
  opacity:  0.10 + _r() * 0.20,
  duration: 10 + _r() * 12,
  delay:    -(_r() * 12),
  drift:    (_r() - 0.5) * 100,
}))

export default function EmberField() {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {EMBERS.map((e) => (
        <div
          key={e.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left:            `${e.left}%`,
            width:           e.size,
            height:          e.size,
            opacity:         e.opacity,
            backgroundColor: '#D4A017',
            animation:       `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
            '--drift':       `${e.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
