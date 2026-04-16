import type { ComponentPropsWithoutRef } from 'react'

type DropdownItemProps = {
  label: string
  onSelect?: () => void
} & Omit<ComponentPropsWithoutRef<'a'>, 'children'>

function DropdownItems({ label, onSelect, className, ...anchorProps }: DropdownItemProps) {
  return (
    <a
      {...anchorProps}
      target={anchorProps.target ?? '_blank'}
      rel={anchorProps.rel ?? 'noreferrer'}
      className={className ? `dropdown-link ${className}` : 'dropdown-link'}
      role="menuitem"
      onClick={(event) => {
        anchorProps.onClick?.(event)
        if (!event.defaultPrevented) {
          onSelect?.()
        }
      }}
    >
      {label}
    </a>
  )
}

export default DropdownItems
