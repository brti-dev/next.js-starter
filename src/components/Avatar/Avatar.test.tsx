import '@testing-library/jest-dom'

import { render } from '../../../test-utils'
import Avatar, { AvatarGroup } from './Avatar'

test('should render initials and label properly', () => {
  const { getByText } = render(<Avatar alt="Barry Lyndon">BL</Avatar>)

  expect(getByText('BL')).toHaveAttribute('aria-label', 'Barry Lyndon')
})

test('should not label when similar text is present', () => {
  const { getByText } = render(<Avatar alt="BL">BL</Avatar>)

  expect(getByText('BL')).not.toHaveAttribute('aria-label')
})

test('should render an image', () => {
  const alt = 'Dan Abramov'
  const src = 'https://bit.ly/dan-abramov'
  const { getAllByRole } = render(<Avatar alt={alt} src={src} />)

  const img = getAllByRole('img')
  expect(img).toHaveLength(2)
  expect(img[1]).toHaveAttribute('alt', alt)
  expect(img[1]).toHaveAttribute('src', src)
})

test('should render group', () => {
  const { getAllByRole } = render(
    <AvatarGroup>
      <Avatar alt="foo">F</Avatar>
      <Avatar alt="bar">B</Avatar>
    </AvatarGroup>
  )

  expect(getAllByRole('img')).toHaveLength(2)
})

test('should hide excess avatars in a group', () => {
  const { getAllByRole } = render(
    <AvatarGroup max={2}>
      <Avatar alt="foo">F</Avatar>
      <Avatar alt="bar">B</Avatar>
      <Avatar alt="baz">Z</Avatar>
      <Avatar alt="fiz">Z</Avatar>
    </AvatarGroup>
  )

  expect(getAllByRole('img')).toHaveLength(3)
})

test('should indicate total in a group', () => {
  const { getByText } = render(
    <AvatarGroup total={100}>
      <Avatar alt="foo">F</Avatar>
      <Avatar alt="bar">B</Avatar>
    </AvatarGroup>
  )

  expect(getByText('+98')).toBeTruthy()
})
