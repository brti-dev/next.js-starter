import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button'
import Button from './Button'

const NewMenuButton = ({ children, ...props }) => (
  <MenuButton
    as={Button}
    style={{
      appearance: 'menulist-button',
      WebkitAppearance: 'menulist-button',
      MozAppearance: 'menulist-button',
    }}
    {...props}
  >
    {children}
  </MenuButton>
)

export {
  Menu,
  MenuList,
  NewMenuButton as MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
}
