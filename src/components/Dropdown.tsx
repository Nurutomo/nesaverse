import { Children, cloneElement, isValidElement, useEffect, useId, useRef, useState } from 'react'
import type { ReactElement, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type DropdownProps = {
  label?: string
  children: ReactNode
}

function Dropdown({ label = 'Menu', children }: DropdownProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const menuId = useId()

  const childrenWithCloseHandler = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child
    }

    const typedChild = child as ReactElement<{ onSelect?: () => void }>
    const existingOnSelect = typedChild.props.onSelect

    return cloneElement(typedChild, {
      onSelect: () => {
        existingOnSelect?.()
        setMenuOpen(false)
      },
    })
  })

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="navbar-dropdown" ref={menuRef}>
      <button
        type="button"
        className="dropdown-toggle"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {label}
        <FontAwesomeIcon icon={faChevronDown} className={`dropdown-caret${menuOpen ? ' is-open' : ''}`} />
      </button>

      <div
        className={`dropdown-menu${menuOpen ? ' is-open' : ''}`}
        id={menuId}
        role="menu"
        aria-hidden={!menuOpen}
      >
        {childrenWithCloseHandler}
      </div>
    </div>
  )
}

export default Dropdown
