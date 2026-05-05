import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    icon: '🏅',
    title: '3rd Place — Design Odyssey',
    sub: 'Kalam 2024, Sri Shakthi Institute of Engineering & Technology',
  },
  {
    icon: '🎯',
    title: 'Event Co-ordinator — Kalam 2025',
    sub: 'Led and managed department-level activities at Sri Shakthi Institute',
  },
  {
    icon: '☁️',
    title: 'NPTEL Elite — Cloud IoT Edge ML',
    sub: 'Scored 65% | National Programme on Technology Enhanced Learning',
  },
  {
    icon: '🟡',
    title: 'Lean Six Sigma Yellow Belt',
    sub: 'Scored 96% | Quality Management Certification',
  },
  {
    icon: '☕',
    title: 'Great Learning — Java',
    sub: 'Completed professional Java certification',
  },
  {
    icon: '🎨',
    title: 'Great Learning — UI/UX Design',
    sub: 'Completed UI/UX design certification',
  },
  {
    icon: '💼',
    title: 'TCS iON Young Professional',
    sub: 'Industry readiness certification from Tata Consultancy Services',
  },
  {
    icon: '🚀',
    title: 'KPR Intercollege Fiesta 2026',
    sub: 'Technical workshops & hackathon — inter-college participation',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" ref={ref} style={{
      padding: '6rem 2rem',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p style={{ color: 'var(--accent3)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Achievements & Certifications
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '3rem' }}>
            Milestones & <span style={{ color: 'var(--accent2)' }}>Recognition</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              style={{
                padding: '1.4rem 1.6rem',
                borderRadius: '12px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <span style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.3rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}