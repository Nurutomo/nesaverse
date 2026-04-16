type FeatureCardsProps = {
  accounts: Array<{
    handle: string
    href: string
    desc: string
    imageSrc: string
  }>
}

function FeatureCards({ accounts }: FeatureCardsProps) {
  return (
    <div className="cards-grid">
      {accounts.map((account) => (
        <article key={account.handle} className="feature-card glassmorphism">
          <a
            className="feature-card__link group"
            href={account.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="feature-card__media">
              <div className="feature-card__media-inner">
                <img src={account.imageSrc} alt={account.handle} className="feature-card__image" />
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
  )
}

export default FeatureCards
