import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  {
    title: 'Languages',
    color: '#7c6af7',
    items: ['C', 'C++', 'Java', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    color: '#38bdf8',
    items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: '#34d399',
    items: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Tools & Design',
    color: '#f472b6',
    items: ['Git', 'GitHub', 'Figma', 'Adobe XD'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{
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
            Technical Skills
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '3rem' }}>
            My <span style={{ color: 'var(--accent2)' }}>Tech Stack</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                padding: '1.8rem',
                borderRadius: '16px',
                background: 'var(--surface)',
                border: `1px solid var(--border)`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: cat.color,
              }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.2rem', color: cat.color }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.items.map(item => (
                  <span key={item} style={{
                    padding: '0.3rem 0.9rem', borderRadius: '99px',
                    background: `${cat.color}15`,
                    color: 'var(--text)', fontSize: '0.82rem', fontWeight: 500,
                    border: `1px solid ${cat.color}30`,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}