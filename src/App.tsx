import { useState, useEffect } from 'react'
import './App.css'

const instagramAccounts = [
  {
    handle: '@unesartire',
    href: 'https://www.instagram.com/unesartire/',
    tagline: 'Seni dan budaya dari para kreator UNESA.',
    emoji: '🎨',
  },
  {
    handle: '@unesa_parkir',
    href: 'https://www.instagram.com/unesa_parkir/',
    tagline: 'Informasi parkir dan mobilitas di sekitar kampus.',
    emoji: '🅿️',
  },
  {
    handle: '@wibunesa',
    href: 'https://www.instagram.com/wibunesa/',
    tagline: 'Highlight kehidupan mahasiswa dan cerita komunitas.',
    emoji: '🎓',
  },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  )
}

function App() {
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="site">
      <nav className="navbar" aria-label="Main navigation">
        <a className="navbar-brand" href="/" aria-label="nesaverse home">
          <div className="navbar-logo" aria-hidden="true">N</div>
          <div className="navbar-text">
            <span className="navbar-title">nesaverse</span>
            <span className="navbar-tagline">Komunitas UNESA</span>
          </div>
        </a>

        <div className="navbar-links">
          {instagramAccounts.map((a, i) => (
            <a
              key={a.handle}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className={`nav-link${i === 0 ? ' nav-link-accent' : ''}`}
            >
              {a.handle}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      <main className="main">
        <section className="hero-card" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="hero-title">Welcome to nesaverse :)</h1>
          <p className="hero-subtitle">
            Komunitas meme dan konten seputar UNESA 🎓
          </p>
          <div className="hero-socials">
            {instagramAccounts.map((a) => (
              <a key={a.handle} href={a.href} target="_blank" rel="noreferrer" className="social-btn">
                <InstagramIcon />
                {a.handle}
              </a>
            ))}
          </div>
        </section>

        <section className="cards-grid" aria-label="Featured Instagram accounts">
          {instagramAccounts.map((account) => (
            <a
              key={account.handle}
              href={account.href}
              target="_blank"
              rel="noreferrer"
              className="feature-card"
            >
              <div className="card-icon" aria-hidden="true">{account.emoji}</div>
              <div className="card-body">
                <h2>{account.handle}</h2>
                <p>{account.tagline}</p>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
