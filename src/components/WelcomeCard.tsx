import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

type WelcomeCardProps = {
  accounts: Array<{ handle: string; href: string }>
}

function WelcomeCard({ accounts }: WelcomeCardProps) {
  return (
    <div className="welcome-card glassmorphism" id="home-welcome-container">
      <div>
        <p className="welcome-title">Welcome to Nesaverse :)</p>
        <p className="welcome-sub">
          Komunitas meme kampus dengan konten seputar UNESA.
        </p>
      </div>
      <div className="social-links">
        {accounts.map((a) => (
          <a
            key={a.handle}
            href={a.href}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label={`Instagram ${a.handle}`}
          >
            <FontAwesomeIcon icon={faInstagram} widthAuto={true} />
            <span className="social-link__label">{a.handle}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default WelcomeCard
