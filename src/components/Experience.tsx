import { motion } from 'framer-motion'

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const bulletContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const bulletItem = {
  hidden: { opacity: 0, x: -10, filter: 'blur(4px)' },
  show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.45, ease: EASE_OUT } },
}

const EXPERIENCE = [
  {
    company: 'TX Canada Labs Corp.',
    note: 'formerly Blockcare',
    location: 'Vancouver, British Columbia',
    period: 'Jan 2023 – Apr 2026',
    roles: [
      {
        title: 'Full-Stack Developer',
        period: 'Aug 2025 – Apr 2026',
        bullets: [
          'Architected a fault-tolerant, event-driven funding pipeline integrating the Alpaca brokerage API — SSE event capture, intent-based orders in Cloud Datastore, USDC-to-USD conversion, and a recovery mechanism that reconciles missed events against live balances on service restart.',
          'Built an Alpaca proxy service bridging frontend applications with brokerage data, enabling real-time account balance visibility and funding state tracking.',
          'Developed a partner referral system end-to-end — referral code generation, bonus attribution, and a full invoice backend (model, store, service layer) in Go.',
          'Built a MiniCMS enabling the marketing team to manage and publish targeted banners across platform surfaces without engineering involvement.',
          'Managed GCP infrastructure and CI/CD pipelines alongside the engineering lead, owning deployment reliability for production services.',
        ],
        tech: ['Go', 'TypeScript', 'GCP', 'Cloud Run', 'Pub/Sub', 'Docker', 'GitHub Actions', 'Cloud Build'],
      },
      {
        title: 'Frontend Developer',
        period: 'Jan 2023 – Aug 2025',
        bullets: [
          'Contributed to blockchain explorer and DEX interfaces — including a cross-chain bridge between XRPL and Coreum — serving 400,000+ users on a platform processing $200M+ in monthly trading volume.',
          'Implemented Firebase Authentication from scratch, including two-factor authentication via authenticator app across the platform.',
          'Integrated multi-wallet support across XUMM, Leap, Keplr, and Cosmostation, handling wallet connection flows, transaction signing, and on-chain state display.',
          'Built reusable React and TypeScript component libraries, standardizing design patterns across multiple applications — including contributions to a full platform redesign.',
          'Diagnosed and resolved user-reported performance issues, optimizing rendering and refining user flows across multiple React applications.',
        ],
        tech: ['React', 'TypeScript', 'XRPL', 'Firebase', 'Zustand', 'Redux Toolkit', 'TanStack Query', 'Sass'],
      },
    ],
  },
]

const EDUCATION = [
  {
    institution: 'Monterrey Institute of Technology (ITESM)',
    degree: 'B.Sc. Mechatronics Engineering, minor in Computer Science',
    period: 'June 2021',
    location: 'Guadalajara, Mexico',
  },
  {
    institution: 'Cornerstone International College (CICCC)',
    degree: 'Diploma, Web Development',
    period: 'December 2022',
    location: 'Vancouver, British Columbia',
  },
]

export function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <p className="section-label">Experience</p>
      </motion.div>

      {EXPERIENCE.map((job, ji) => (
        <motion.div
          key={ji}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.05 }}
          style={{ marginBottom: 64 }}
        >
          {/* Company header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '4px 16px',
              marginBottom: 8,
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                }}
              >
                {job.company}
              </span>
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  marginLeft: 8,
                }}
              >
                ({job.note})
              </span>
            </div>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                color: 'var(--text-muted)',
              }}
            >
              {job.period}
            </span>
          </div>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.01em',
              marginBottom: 40,
            }}
          >
            {job.location}
          </p>

          {/* Roles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {job.roles.map((role, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: EASE_OUT, delay: ri * 0.06 }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '4px 16px',
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: 'var(--text)',
                    }}
                  >
                    {role.title}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                <motion.ul
                  variants={bulletContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  {role.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      variants={bulletItem}
                      style={{
                        display: 'flex',
                        gap: 12,
                        fontSize: '0.9375rem',
                        lineHeight: 1.65,
                        color: 'var(--text-muted)',
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: '0.55em',
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: 'var(--text-dim)',
                        }}
                      />
                      <span style={{ maxWidth: '68ch' }}>{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {role.tech.map(t => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="section-label" style={{ marginBottom: 32 }}>Education</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {EDUCATION.map((edu, i) => (
            <div key={i}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '4px 16px',
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: 'var(--text)',
                  }}
                >
                  {edu.institution}
                </span>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                  }}
                >
                  {edu.period}
                </span>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: 4 }}>
                {edu.degree}
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', letterSpacing: '0.01em' }}>
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
