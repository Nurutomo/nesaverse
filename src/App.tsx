import './App.css'

const instagramAccounts = [
  {
    handle: '@unesartir',
    href: 'https://www.instagram.com/unesartir/',
    tagline: 'Art and culture updates from UNESA creatives.',
  },
  {
    handle: '@unesa_parkir',
    href: 'https://www.instagram.com/unesa_parkir/',
    tagline: 'Parking information and mobility notices around campus.',
  },
  {
    handle: '@wibunesa',
    href: 'https://www.instagram.com/wibunesa/',
    tagline: 'Student life highlights and community stories.',
  },
]

function App() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="site-title">
        <p className="eyebrow">Welcome to</p>
        <h1 id="site-title">nesaverse</h1>
        <p className="subtitle">
          Explore the UNESA community through our featured Instagram accounts.
        </p>
      </section>

      <section className="accounts" aria-label="Featured Instagram accounts">
        {instagramAccounts.map((account) => (
          <article key={account.handle} className="card">
            <h2>{account.handle}</h2>
            <p>{account.tagline}</p>
            <a href={account.href} target="_blank" rel="noreferrer">
              Visit Instagram
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
