import { useState } from 'react'
import Link from 'next/link'

import Layout from '@/components/Layout'
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@/components/Menu'
import Code from '@/components/Code'

export default function MenuComponent() {
  const [selected, setSelected] = useState(null)
  return (
    <Layout>
      <h1>Menu</h1>
      <p>A dropdown menu with a list of choices.</p>
      <p>
        Besides the <code>MenuButton</code> component which extends the{' '}
        <Link href="/components/button">Button component</Link>, all other
        component operations are identical to{' '}
        <a href="https://reach.tech/menu-button/#menuitems">Reach UI</a>{' '}
        specification.
      </p>
      <h2>Simple Menu</h2>
      <Menu>
        <MenuButton variant="contained">Open Menu</MenuButton>{' '}
        <span>Selected option: {selected ?? 'none'}</span>
        <MenuList>
          <MenuItem onSelect={() => setSelected('Foo')}>Foo</MenuItem>
          <MenuItem onSelect={() => setSelected('Bar')}>Bar</MenuItem>
        </MenuList>
      </Menu>
    </Layout>
  )
}
