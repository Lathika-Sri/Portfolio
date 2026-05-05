import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1rem 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <span style={{ fontFamily: 'Clash Display', fontWeight: 700, fontSize: '1.3rem', color: 'var(--accent2)' }}>
          LS<span style={{ color: 'var(--accent3)' }}></span>
        </span>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <li key={l}>
              <Link to={l.toLowerCase()} smooth duration={500} offset={-70}
                style={{ fontSize: '0.9rem', color: 'var(--muted)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {l}
              </Link>
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/10aXghV8NnLIRJC0c97vtk0sr_bzd_Qg1/view?usp=drive_link" download
              style={{
                padding: '0.5rem 1.2rem', borderRadius: '8px',
                border: '1px solid var(--accent)', color: 'var(--accent2)',
                fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#fff' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent2)' }}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.4rem', cursor: 'pointer' }}
          className="nav-burger"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
              background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
              padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem',
            }}
          >
            {links.map(l => (
              <Link key={l} to={l.toLowerCase()} smooth duration={500} offset={-70}
                onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--muted)', fontSize: '1rem', cursor: 'pointer' }}
              >
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </>
  )
}