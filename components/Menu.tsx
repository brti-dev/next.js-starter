import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button'
import Button from '@/components/Button'

const NewMenuButton = ({ children, ...props }) => (
  <MenuButton as={Button} {...props}>
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
