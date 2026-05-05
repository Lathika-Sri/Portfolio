import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p style={{ color: 'var(--accent3)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
          About Me
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', fontWeight: 700 }}>
          Crafting digital experiences<br />
          <span style={{ color: 'var(--accent2)' }}>with purpose & precision</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{ lineHeight: 1.9, color: 'var(--muted)', fontSize: '1rem' }}>
            <p style={{ marginBottom: '1.2rem' }}>
              I'm <strong style={{ color: 'var(--text)' }}>Lathika Sri B</strong>, a pre-final year B.Tech Information Technology student at
              Sri Shakthi Institute of Engineering and Technology (CGPA 9.00), deeply passionate about building
              full-stack web applications that solve real problems.
            </p>
            <p>
              I love the entire journey — from designing intuitive UIs to building robust backends and integrating AI APIs.
              My goal is to create software that is not just functional, but genuinely delightful to use.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Degree', value: 'B.Tech Information Technology' },
              { label: 'University', value: 'Sri Shakthi Institute of Engineering & Technology' },
              { label: 'CGPA', value: '9.00 (Till 5th Sem)' },
              { label: 'Location', value: 'Tamil Nadu, India' },
              { label: 'Status', value: '✅ Open to Opportunities' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                padding: '0.8rem 1.2rem', borderRadius: '10px',
                background: 'var(--surface)', border: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--muted)', fontSize: '0.8rem', fontWeight: 600, minWidth: '90px', paddingTop: '2px' }}>{label}</span>
                <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}