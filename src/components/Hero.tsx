import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const NAME_LINES = ['Juan Camilo', 'Cifuentes']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_OUT },
  },
}

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding:
          'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 48px) clamp(60px, 8vw, 80px)',
        maxWidth: 900,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Ambient orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-8%',
            width: 'clamp(500px, 60vw, 800px)',
            height: 'clamp(500px, 60vw, 800px)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, var(--orb1) 0%, transparent 60%)',
            filter: 'blur(50px)',
            willChange: 'transform',
            animation: 'orbFloat1 10s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-10%',
            width: 'clamp(350px, 45vw, 600px)',
            height: 'clamp(350px, 45vw, 600px)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, var(--orb2) 0%, transparent 60%)',
            filter: 'blur(50px)',
            willChange: 'transform',
            animation: 'orbFloat2 13s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            right: '25%',
            width: 'clamp(250px, 32vw, 420px)',
            height: 'clamp(250px, 32vw, 420px)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, var(--orb3) 0%, transparent 60%)',
            filter: 'blur(40px)',
            willChange: 'transform',
            animation: 'orbFloat3 17s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} style={{ marginBottom: 32 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              padding: '5px 14px',
              letterSpacing: '0.01em',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#4ade80',
                flexShrink: 0,
                boxShadow: '0 0 6px #4ade80',
              }}
            />
            Vancouver, BC — Open to new roles
          </span>
        </motion.div>

        {/* Name — each line with blur-reveal */}
        <div style={{ marginBottom: 20 }}>
          {NAME_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.8,
                ease: EASE_OUT,
                delay: 0.2 + i * 0.13,
              }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2.75rem, 7.5vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: '-0.04em',
                  color: 'var(--text)',
                  margin: 0,
                }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 400,
            color: 'var(--text-muted)',
            letterSpacing: '-0.01em',
            marginBottom: 20,
          }}
        >
          Full-Stack Software Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            maxWidth: 500,
            marginBottom: 44,
          }}
        >
          I build production systems end-to-end — from React interfaces to Go
          microservices on GCP. Most comfortable when handed a problem, not a spec.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
        >
          <CTAButton
            href="https://github.com/jccifuentes21"
            primary
            icon={<GithubIcon />}
          >
            GitHub
          </CTAButton>
          <CTAButton
            href="https://linkedin.com/in/jccifuentes21"
            icon={<LinkedinIcon />}
          >
            LinkedIn
          </CTAButton>
          <CTAButton href="mailto:jccifuentes21@gmail.com">
            Get in touch
          </CTAButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        style={{
          position: 'absolute',
          bottom: 'clamp(28px, 4vw, 44px)',
          left: 'clamp(20px, 5vw, 48px)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'var(--text-dim)',
          zIndex: 1,
        }}
      >
        <ArrowDown
          size={13}
          style={{ animation: 'scrollPulse 2.4s ease-in-out infinite' }}
        />
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  )
}

function CTAButton({
  href,
  children,
  primary = false,
  icon,
}: {
  href: string
  children: React.ReactNode
  primary?: boolean
  icon?: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 20px',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: '0.01em',
        border: '1px solid',
        borderColor: primary ? 'transparent' : 'var(--border)',
        background: primary ? 'var(--accent)' : 'transparent',
        color: primary ? '#fff' : 'var(--text-muted)',
        transition:
          'background-color 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out, transform 160ms var(--ease-out)',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        if (primary) {
          e.currentTarget.style.backgroundColor = 'var(--accent-deep)'
        } else {
          e.currentTarget.style.backgroundColor = 'var(--bg-raised)'
          e.currentTarget.style.color = 'var(--text)'
          e.currentTarget.style.borderColor = 'var(--border-hover)'
        }
      }}
      onMouseLeave={e => {
        if (primary) {
          e.currentTarget.style.backgroundColor = 'var(--accent)'
        } else {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = 'var(--text-muted)'
          e.currentTarget.style.borderColor = 'var(--border)'
        }
        e.currentTarget.style.transform = 'scale(1)'
      }}
      onMouseDown={e => {
        e.currentTarget.style.transform = 'scale(0.97)'
      }}
      onMouseUp={e => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      {icon}
      {children}
    </a>
  )
}
