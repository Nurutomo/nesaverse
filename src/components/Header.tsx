import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import DropdownItems from './DropdownItem'

type HeaderProps = {
  dark: boolean
  onToggleTheme: () => void
  accounts: Array<{ handle: string; href: string }>
}

function Header({ dark, onToggleTheme, accounts }: HeaderProps) {
  return (
    <div className="header-container">
      <header className="header-glass navbar" id="header">
        <a className="navbar-brand" href="/" aria-label="nesaverse home">
          <div className="navbar-logo" aria-hidden="true">N</div>
          <div>
            <div className="navbar-name">Nesaverse</div>
            <div className="navbar-tagline">Komunitas UNESA</div>
          </div>
        </a>

        <nav className="navbar-links" aria-label="Main navigation">
          <Dropdown label="Akun Instagram">
            {accounts.map((account) => (
              <DropdownItems
                key={account.handle}
                label={account.handle}
                href={account.href}
              />
            ))}
          </Dropdown>

          <button
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} fixedWidth />
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
