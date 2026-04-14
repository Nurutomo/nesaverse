import { useState } from 'react'
import './App.css'

const instagramAccounts = [
  {
    handle: '@unesartire',
    href: 'https://www.instagram.com/unesartire/',
    desc: 'Seni dan budaya dari para kreator UNESA.',
    accentClass: 'card-accent-art',
    emoji: '🎨',
  },
  {
    handle: '@unesa_parkir',
    href: 'https://www.instagram.com/unesa_parkir/',
    desc: 'Informasi parkir dan mobilitas di sekitar kampus.',
    accentClass: 'card-accent-parkir',
    emoji: '🅿️',
  },
  {
    handle: '@wibunesa',
    href: 'https://www.instagram.com/wibunesa/',
    desc: 'Highlight kehidupan mahasiswa dan cerita komunitas.',
    accentClass: 'card-accent-wibu',
    emoji: '🎓',
  },
]

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20} aria-hidden="true">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20} aria-hidden="true">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  )
}

function App() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  function toggleTheme() {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* ignore */ }
  }

  return (
    <div className="site">
      {/* ── Navbar ── */}
      <div className="header-container">
        <header className="header-glass navbar" id="header">
          <a className="navbar-brand" href="/" aria-label="nesaverse home">
            <div className="navbar-logo" aria-hidden="true">N</div>
            <div>
              <div className="navbar-name">nesaverse</div>
              <div className="navbar-tagline">Komunitas UNESA</div>
            </div>
          </a>

          <nav className="navbar-links" aria-label="Main navigation">
            {instagramAccounts.map((a, i) => (
              <a
                key={a.handle}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className={`nav-link${i === 0 ? ' nav-link--brand' : ''}`}
              >
                {a.handle}
              </a>
            ))}
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </header>
      </div>

      {/* ── Main ── */}
      <main className="main">
        {/* Welcome hero card */}
        <div className="welcome-card glassmorphism" id="home-welcome-container">
          <div>
            <p className="welcome-title">Welcome to nesaverse :)</p>
            <p className="welcome-sub">
              Komunitas meme dan konten seputar UNESA 🎓
            </p>
          </div>
          <div className="social-links">
            {instagramAccounts.map((a) => (
              <a
                key={a.handle}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={`Instagram ${a.handle}`}
              >
                <InstagramIcon size={20} />
                <span>{a.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Section header */}
        <div className="section-header glassmorphism">
          <h2 className="section-title">Akun Instagram</h2>
          <p className="section-sub">
            Ikuti akun-akun Instagram resmi komunitas nesaverse.
          </p>
        </div>

        {/* Feature cards */}
        <div className="cards-grid">
          {instagramAccounts.map((account) => (
            <article key={account.handle} className="feature-card glassmorphism">
              <a
                className="feature-card__link"
                href={account.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className={`feature-card__media ${account.accentClass}`}>
                  <div className="feature-card__media-inner">
                    <span role="img" aria-label={account.handle}>{account.emoji}</span>
                  </div>
                </div>
                <div className="feature-card__content">
                  <h2 className="feature-card__title">{account.handle}</h2>
                  <p className="feature-card__desc">{account.desc}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="footer glassmorphism">
        © 2026 nesaverse. All rights reserved.
      </footer>
    </div>
  )
}

export default App
