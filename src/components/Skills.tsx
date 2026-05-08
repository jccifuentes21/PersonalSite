import { motion } from 'framer-motion'

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
}
const chipItem = {
  hidden: { opacity: 0, scale: 0.88, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.35, ease: EASE_OUT },
  },
}

const SKILL_ROWS = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Vite', 'Zustand', 'Redux Toolkit', 'TanStack Query', 'Sass', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Go', 'Node.js', 'REST APIs', 'gRPC', 'Protocol Buffers', 'Microservices'],
  },
  {
    category: 'Cloud',
    skills: ['GCP', 'Cloud Run', 'Pub/Sub', 'Cloud Datastore', 'Cloud Storage', 'Docker', 'GitHub Actions', 'Cloud Build'],
  },
  {
    category: 'Blockchain',
    skills: ['XRPL', 'TX Chain (Coreum)', 'XUMM', 'Leap', 'Keplr', 'Cosmostation'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Firebase', 'Figma', 'Bash'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
      >
        <p className="section-label">Stack</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {SKILL_ROWS.map((row, i) => (
          <motion.div
            key={row.category}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: EASE_OUT, delay: i * 0.055 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 1fr',
              gap: '16px 32px',
              padding: '20px 0',
              borderBottom: '1px solid var(--border)',
              alignItems: 'start',
            }}
          >
            <span
              style={{
                fontFamily: 'ui-monospace, Consolas, monospace',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                paddingTop: 4,
              }}
            >
              {row.category}
            </span>

            <motion.div
              variants={chipContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}
            >
              {row.skills.map(skill => (
                <motion.span key={skill} variants={chipItem} className="chip">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
