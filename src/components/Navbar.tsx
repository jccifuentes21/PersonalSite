import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px, 5vw, 48px)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition:
            'background-color 300ms var(--ease-out), border-color 300ms var(--ease-out)',
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 600,
            fontSize: '0.9375rem',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
          }}
        >
          JC
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {NAV_LINKS.map(link => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
          <ThemeButton theme={theme} onToggle={toggleTheme} />
        </nav>

        {/* Mobile controls */}
        <div className="mobile-nav" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThemeButton theme={theme} onToggle={toggleTheme} />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border)',
              background: 'var(--bg-raised)',
              color: 'var(--text-muted)',
              transition: 'transform 160ms var(--ease-out)',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.94)' }}
            onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'var(--bg)',
            paddingTop: 60,
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '32px clamp(20px, 5vw, 48px)', gap: 4 }}>
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-muted)',
                  padding: '12px 0',
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid var(--border)' : 'none',
                  transition: 'color 150ms ease-out',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: '0.01em',
        color: 'var(--text-muted)',
        transition: 'color 150ms ease-out',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
    >
      {children}
    </a>
  )
}

function ThemeButton({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to dim mode' : 'Switch to dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border)',
        background: 'var(--bg-raised)',
        color: 'var(--text-muted)',
        transition:
          'color 150ms ease-out, background-color 150ms ease-out, border-color 150ms ease-out, transform 160ms var(--ease-out)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = 'var(--text)'
        e.currentTarget.style.backgroundColor = 'var(--bg-muted)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = 'var(--text-muted)'
        e.currentTarget.style.backgroundColor = 'var(--bg-raised)'
        e.currentTarget.style.transform = 'scale(1)'
      }}
      onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.94)' }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
    >
      {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  )
}
