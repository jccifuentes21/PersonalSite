import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef, useState } from 'react'

import sologenicImg from '../assets/sologenic.png'
import pulsaraImg from '../assets/pulsara.png'
import txExplorerImg from '../assets/tx-explorer.png'
import txMarketplaceImg from '../assets/tx-marketplace.png'

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const PROJECTS = [
  {
    name: 'Sologenic DEX',
    image: sologenicImg,
    description:
      'Decentralized exchange and blockchain explorer built on the XRP Ledger. Contributed to the cross-chain bridge between XRPL and Coreum, multi-wallet integrations, and on-chain transaction flows — 400,000+ users, $200M+ monthly trading volume.',
    url: 'https://sologenic.org/trade',
    tech: ['React', 'TypeScript', 'XRPL', 'Zustand', 'Redux'],
    glowColor: 'var(--orb1)',
    gridColor: 'var(--orb-cursor)',
  },
  {
    name: 'Pulsara',
    image: pulsaraImg,
    description:
      'Decentralized exchange and DeFi ecosystem built on the Coreum blockchain. Contributed to the DAX interface — token trading, liquidity provision, and on-chain reward flows — alongside the broader Pulsara platform including liquid staking and cross-chain bridge UI.',
    url: 'https://dax.pulsara.io',
    tech: ['React', 'TypeScript'],
    glowColor: 'var(--orb3)',
    gridColor: 'var(--orb-cursor)',
  },
  {
    name: 'TX Explorer',
    image: txExplorerImg,
    description:
      'Blockchain explorer for the Coreum network, built on top of Forbole\'s Big Dipper 2.0 framework for the Cosmos ecosystem. Contributed to the frontend implementation — block and transaction views, address lookups, and on-chain data rendering.',
    url: 'https://explorer.tx.org',
    tech: ['React', 'TypeScript', 'Cosmos', 'Big Dipper'],
    glowColor: 'var(--orb2)',
    gridColor: 'var(--orb-cursor)',
  },
  {
    name: 'TX Marketplace',
    image: txMarketplaceImg,
    badge: 'In Development',
    description:
      'Full-stack digital asset marketplace built on the Coreum blockchain. Designed and implemented the backend architecture — REST and WebSocket APIs, order management, wallet integrations, and GCP infrastructure — serving as the data layer for the full trading experience.',
    url: 'https://tx.market',
    tech: ['Go', 'PostgreSQL', 'GCP', 'Docker', 'React', 'TypeScript'],
    glowColor: 'var(--orb1)',
    gridColor: 'var(--orb-cursor)',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
      >
        <p className="section-label">Projects</p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 16,
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0] & { image?: string }
  index: number
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: EASE_OUT, delay: index * 0.09 }}
      style={{ height: '100%' }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border)',
          background: 'var(--bg-raised)',
          overflow: 'hidden',
          position: 'relative',
          transition:
            'transform 220ms var(--ease-out), box-shadow 220ms ease-out, border-color 220ms ease-out',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
          e.currentTarget.style.borderColor = 'var(--border-hover)'
        }}
        onMouseLeave={e => {
          setSpotlight(s => ({ ...s, visible: false }))
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = 'var(--border)'
        }}
      >
        {/* Mouse-tracking spotlight inside card */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
            background: spotlight.visible
              ? `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px, ${project.glowColor}, transparent 70%)`
              : 'transparent',
            transition: 'background 0.15s ease-out',
          }}
        />

        {/* Screenshot */}
        <div
          style={{
            height: 200,
            borderBottom: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg-muted)',
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                transition: 'transform 400ms var(--ease-out)',
              }}
            />
          ) : (
            <>
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(${project.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${project.gridColor} 1px, transparent 1px)`,
                  backgroundSize: '36px 36px',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'ui-monospace, Consolas, monospace',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'var(--text-dim)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                screenshot coming
              </span>
            </>
          )}
        </div>

        {/* Card body */}
        <div style={{ padding: 24, position: 'relative', zIndex: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                }}
              >
                {project.name}
              </h3>
              {'badge' in project && project.badge && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent-border)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '2px 7px',
                    background: 'var(--accent-dim)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>
            <ArrowUpRight
              size={16}
              style={{
                color: 'var(--text-dim)',
                flexShrink: 0,
                marginTop: 2,
                transition: 'color 150ms ease-out, transform 150ms var(--ease-out)',
                opacity: 'badge' in project && project.badge ? 0.35 : 1,
              }}
            />
          </div>

          <p
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: 20,
              maxWidth: '60ch',
              flex: 1,
            }}
          >
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.tech.map(t => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  )
}
