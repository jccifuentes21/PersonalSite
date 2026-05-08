import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const LINKS = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'jccifuentes21@gmail.com',
    href: 'mailto:jccifuentes21@gmail.com',
  },
  {
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'github.com/jccifuentes21',
    href: 'https://github.com/jccifuentes21',
  },
  {
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jccifuentes21',
    href: 'https://linkedin.com/in/jccifuentes21',
  },
]

export function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <p className="section-label">Contact</p>

        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--text)',
            marginBottom: 16,
            maxWidth: '14ch',
          }}
        >
          Let's work together
        </h2>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            maxWidth: '48ch',
            marginBottom: 48,
          }}
        >
          Open to full-stack roles and interesting problems.
          Feel free to reach out.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {LINKS.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: i * 0.07 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderBottom: '1px solid var(--border)',
                color: 'var(--text-muted)',
                transition: 'color 150ms ease-out',
                gap: 16,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ color: 'var(--text-dim)', flexShrink: 0 }}>{link.icon}</span>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      marginBottom: 2,
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    className="contact-value"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {link.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} style={{ flexShrink: 0, opacity: 0.5 }} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.3 }}
        style={{
          marginTop: 80,
          paddingTop: 32,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-dim)',
          }}
        >
          © 2025 Juan Camilo Cifuentes
        </span>
        <span
          style={{
            fontFamily: 'ui-monospace, Consolas, monospace',
            fontSize: '0.75rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.04em',
          }}
        >
          Built with React + Vite
        </span>
      </motion.div>
    </section>
  )
}
