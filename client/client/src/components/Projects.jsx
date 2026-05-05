import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'ProReady',
    emoji: '🤖',
    desc: 'An AI-powered full-stack web application that automates resume generation, personalized learning roadmaps, and project guidance. Built with MERN stack and integrated AI APIs for dynamic content generation.',
    tags: ['MERN Stack', 'AI Integration', 'Full Stack', 'REST API'],
    github: 'https://github.com/Lathika-Sri/ProReady-Project',
    color: '#7c6af7',
    featured: true,
  },
  {
    title: 'Smart Classroom Management System',
    emoji: '🏫',
    desc: 'SIH project — core modules to monitor real-time classroom activities and automate alerts. Integrated notification and analytics APIs for actionable educator insights.',
    tags: ['Full Stack', 'API Integration', 'Real-time', 'SIH'],
    github: 'https://github.com/Lathika-Sri/SIH1',
    color: '#38bdf8',
  },
  {
    title: 'LightLine — Android Video Call App',
    emoji: '📱',
    desc: 'Lightweight Android app for video calling with flashlight support during rear camera usage. Features camera switching and meeting link sharing for real-time collaboration.',
    tags: ['Android', 'Java', 'Mobile UI', 'WebRTC'],
    github: 'https://github.com/Lathika-Sri/LightlineApp',
    color: '#34d399',
  },
  {
    title: 'Task Manager — Console App',
    emoji: '📋',
    desc: 'Java console-based Task Manager to add, update, delete, and view tasks through CLI. Implemented input validation and modular logic using Java Collections.',
    tags: ['Java', 'Collections', 'OOP', 'CLI'],
    github: 'https://github.com/Lathika-Sri/Console-Based-Project---JCF',
    color: '#f472b6',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p style={{ color: 'var(--accent3)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
          Portfolio
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '3rem' }}>
          Things I've <span style={{ color: 'var(--accent2)' }}>Built</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex', flexDirection: 'column', gap: '1rem',
              gridColumn: p.featured ? 'span 2' : 'span 1',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.color
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {p.featured && (
              <span style={{
                position: 'absolute', top: '1.2rem', right: '1.2rem',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                color: p.color, textTransform: 'uppercase',
                padding: '0.25rem 0.7rem', borderRadius: '99px',
                border: `1px solid ${p.color}40`, background: `${p.color}10`,
              }}>Featured</span>
            )}
            <div style={{ fontSize: '2rem' }}>{p.emoji}</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>{p.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  padding: '0.25rem 0.8rem', borderRadius: '99px',
                  background: `${p.color}12`, color: p.color,
                  fontSize: '0.78rem', fontWeight: 500, border: `1px solid ${p.color}25`,
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={p.github} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                <FiGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          [style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}