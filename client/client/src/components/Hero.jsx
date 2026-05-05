import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 2rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '60%', right: '10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', paddingTop: '6rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ color: 'var(--accent3)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '1rem', letterSpacing: '0.08em' }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.05 }}
        >
          Lathika Sri<span style={{ color: 'var(--accent)' }}></span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 400, color: 'var(--muted)',
            marginBottom: '1.5rem',
          }}
        >
          Aspiring Full Stack Developer |{' '}
          <span style={{
            background: 'linear-gradient(90deg, var(--accent2), var(--accent3))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            SDE
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '560px', marginBottom: '2.5rem', lineHeight: 1.8 }}
        >
          Pre-final year B.Tech IT student building intelligent, scalable web applications.
          Passionate about clean code, great UX, and the intersection of AI with real-world solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}
        >
          <Link to="projects" smooth duration={500} offset={-70}
            style={{
              padding: '0.8rem 2rem', borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent), #5b4fd4)',
              color: '#fff', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
              boxShadow: '0 4px 24px rgba(124,106,247,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(124,106,247,0.5)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 24px rgba(124,106,247,0.35)' }}
          >
            View My Work
          </Link>
          <Link to="contact" smooth duration={500} offset={-70}
            style={{
              padding: '0.8rem 2rem', borderRadius: '10px',
              border: '1px solid var(--border)', color: 'var(--text)',
              fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent2)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }}
        >
          {[
            { icon: <FiGithub />, href: 'https://github.com/Lathika-Sri/', label: 'GitHub' },
            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/lathikasri6', label: 'LinkedIn' },
            { icon: <SiLeetcode />, href: 'https://leetcode.com/u/lathikasribleetcode/', label: 'LeetCode' },
            { icon: <SiGeeksforgeeks />, href: 'https://www.geeksforgeeks.org/profile/lathikasribatocp?tab=activity', label: 'GFG' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              title={label}
              style={{
                color: 'var(--muted)', fontSize: '1.3rem', transition: 'color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          color: 'var(--muted)', fontSize: '0.8rem',
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <FiArrowDown />
        </motion.div>
        <span>scroll</span>
      </motion.div>
    </section>
  )
}