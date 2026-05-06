import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('https://portfolio1-dbzm.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ ok: true, msg: 'Message sent! I\'ll get back to you soon 🎉' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ ok: false, msg: data.error || 'Something went wrong.' })
      }
    } catch {
      setStatus({ ok: false, msg: 'Could not reach the server. Please try again later.' })
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', padding: '0.9rem 1.2rem',
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: '10px', color: 'var(--text)', fontSize: '0.95rem',
    fontFamily: 'Sora, sans-serif', outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p style={{ color: 'var(--accent3)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
          Get in Touch
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
          Let's <span style={{ color: 'var(--accent2)' }}>Connect</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '3rem', maxWidth: '500px' }}>
          I'm actively looking for internship and placement opportunities. If you have an exciting role or project, I'd love to hear about it!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <input
              type="text" name="name" placeholder="Your Name" required
              value={form.name} onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <input
              type="email" name="email" placeholder="Your Email" required
              value={form.email} onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <textarea
              name="message" placeholder="Your Message" required rows={5}
              value={form.message} onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button type="submit" disabled={loading}
              style={{
                padding: '0.9rem 2rem', borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--accent), #5b4fd4)',
                color: '#fff', fontWeight: 600, fontSize: '0.95rem',
                border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              <FiSend /> {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p style={{ fontSize: '0.9rem', color: status.ok ? '#34d399' : '#f87171' }}>
                {status.msg}
              </p>
            )}
          </form>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            {[
              { icon: <FiMail />, label: 'Email', val: 'lathikasribalamurugan6@gmail.com', href: 'mailto:lathikasribalamurugan6@gmail.com' },
              { icon: <FiLinkedin />, label: 'LinkedIn', val: 'linkedin.com/in/lathikasri6', href: 'https://linkedin.com/in/lathikasri6' },
              { icon: <FiGithub />, label: 'GitHub', val: 'github.com/lathikasri6', href: 'https://github.com/lathikasri6' },
            ].map(({ icon, label, val, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none' }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent2)', fontSize: '1.1rem', flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.15rem' }}>{label}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{val}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}