import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const rawX = useMotionValue(-9999)
  const rawY = useMotionValue(-9999)
  const x = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.4 })
  const y = useSpring(rawY, { stiffness: 90, damping: 22, mass: 0.4 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [rawX, rawY])

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 700,
        height: 700,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, var(--orb-cursor) 0%, transparent 55%)',
        pointerEvents: 'none',
        zIndex: 0,
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  )
}
