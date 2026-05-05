export default function Footer() {
    return (
      <footer style={{
        textAlign: 'center', padding: '2rem',
        borderTop: '1px solid var(--border)',
        color: 'var(--muted)', fontSize: '0.85rem',
      }}>
        Designed & Built by <span style={{ color: 'var(--accent2)', fontWeight: 600 }}>Lathika Sri Balamurugan</span> · 2026
      </footer>
    )
  }